"use client";

import React, { Suspense, useEffect, useRef } from "react";
import { Canvas } from "@react-three/fiber";
import {
  useGLTF,
  OrbitControls,
  PerspectiveCamera,
  Environment,
  Html,
  ContactShadows,
  Float,
} from "@react-three/drei";

function PhoneWithDynamicScreen() {
  const { scene } = useGLTF("/phone/scene.gltf");
  const previousBodyOverflowRef = useRef<string | null>(null);
  const screenRef = useRef<HTMLDivElement | null>(null);
  const rafRef = useRef<number | null>(null);
  const targetScrollLeftRef = useRef(0);
  const velocityRef = useRef(0);
  const lastTimeRef = useRef<number | null>(null);
  const nativeWheelBoundRef = useRef(false);

  const lockBodyScroll = () => {
    if (typeof document === "undefined") return;
    if (previousBodyOverflowRef.current === null) {
      previousBodyOverflowRef.current = document.body.style.overflow;
    }
    document.body.style.overflow = "hidden";
  };

  const unlockBodyScroll = () => {
    if (typeof document === "undefined") return;
    if (previousBodyOverflowRef.current !== null) {
      document.body.style.overflow = previousBodyOverflowRef.current;
      previousBodyOverflowRef.current = null;
    }
  };

  const clampTargetToBounds = (element: HTMLDivElement) => {
    const max = Math.max(0, element.scrollWidth - element.clientWidth);
    targetScrollLeftRef.current = Math.max(0, Math.min(max, targetScrollLeftRef.current));
  };

  const startSmoothScroll = () => {
    const element = screenRef.current;
    if (!element) return;

    if (rafRef.current !== null) return;

    lastTimeRef.current = null;

    const step = (time: number) => {
      const el = screenRef.current;
      if (!el) {
        rafRef.current = null;
        return;
      }

      const lastTime = lastTimeRef.current;
      lastTimeRef.current = time;
      const dt = lastTime === null ? 1 / 60 : Math.min(0.05, (time - lastTime) / 1000);

      clampTargetToBounds(el);

      const current = el.scrollLeft;
      const target = targetScrollLeftRef.current;
      const diff = target - current;
      const stiffness = 70; 
      const damping = 14; 
      const acceleration = diff * stiffness;
      velocityRef.current += acceleration * dt;
      velocityRef.current *= Math.exp(-damping * dt);
      const next = current + velocityRef.current * dt;
      el.scrollLeft = next;
      if (Math.abs(target - el.scrollLeft) < 0.5 && Math.abs(velocityRef.current) < 5) {
        el.scrollLeft = target;
        velocityRef.current = 0;
        rafRef.current = null;
        return;
      }

      rafRef.current = window.requestAnimationFrame(step);
    };

    rafRef.current = window.requestAnimationFrame(step);
  };

  const queueWheelDelta = (rawDelta: number) => {
    const element = screenRef.current;
    if (!element) return;
    targetScrollLeftRef.current += rawDelta * 1.1;
    clampTargetToBounds(element);
    startSmoothScroll();
  };

  useEffect(() => {
    const element = screenRef.current;
    if (!element) return;
    targetScrollLeftRef.current = element.scrollLeft;

    const onWheel = (event: WheelEvent) => {
      event.preventDefault();
      event.stopPropagation();
      let delta = Math.abs(event.deltaX) > Math.abs(event.deltaY) ? event.deltaX : event.deltaY;
      if (event.deltaMode === 1) delta *= 16;
      queueWheelDelta(delta);
    };

    element.addEventListener("wheel", onWheel, { passive: false });
    nativeWheelBoundRef.current = true;

    return () => {
      element.removeEventListener("wheel", onWheel as EventListener);
      nativeWheelBoundRef.current = false;
      if (rafRef.current !== null) {
        cancelAnimationFrame(rafRef.current);
        rafRef.current = null;
      }
    };
  }, []);

  return (
    <group
      rotation={[-0.26, -Math.PI / 2, -Math.PI / 2]}
      scale={0.19}
      position={[0, 0.12, 0]}
    >
      <primitive object={scene} />
      <Html
        transform
        distanceFactor={2.5}
        position={[0, 0.12, 0]} 
        rotation={[-Math.PI / 2, 0, 0]}
        center
        wrapperClass="phone-html"
      >
        <div
          ref={screenRef}
          className="phone-screen-scroll w-[700px] h-[300px] overflow-x-auto overflow-y-hidden bg-black rounded-[25px] p-6 flex flex-row gap-6 hide-scrollbar select-none items-center"
          style={{ overscrollBehavior: "contain", WebkitOverflowScrolling: "touch", touchAction: "pan-x" }}
          onPointerEnter={lockBodyScroll}
          onPointerLeave={unlockBodyScroll}
          onTouchStart={lockBodyScroll}
          onTouchEnd={unlockBodyScroll}
          onTouchCancel={unlockBodyScroll}
          onPointerDown={(e) => e.stopPropagation()}
          onWheel={(e) => {
            if (nativeWheelBoundRef.current) return;

            e.preventDefault();
            e.stopPropagation();

            const delta =
              Math.abs(e.deltaX) > Math.abs(e.deltaY) ? e.deltaX : e.deltaY;
            queueWheelDelta(delta);
          }}
        >
          <div className="shrink-0 flex flex-col justify-center gap-2 mr-4">
            <div className="text-white text-3xl font-['Space_Grotesk'] font-bold leading-tight">
              NoteRoom
            </div>
            <div className="text-white/40 text-sm font-['Inter']">
              Knowledge, Accessible Anywhere.
            </div>
          </div>

          {[
            { img: "Science.jpg", title: "Science" },
            { img: "Philosophy.jpg", title: "Philosophy" },
            { img: "Technology.jpg", title: "Technology" },
            { img: "Artistry.jpg", title: "Artistry" },
            { img: "History.jpg", title: "History" },
            { img: "Nature.jpg", title: "Nature" },
            { img: "Learning.jpg", title: "Learning" },
            { img: "Architecture.jpg", title: "Architecture" },
            { img: "Behaviour.jpg", title: "Behaviour" },
          ].map((item, i) => (
            <div
              key={i}
              className="group relative h-[220px] aspect-4/3 rounded-2xl overflow-hidden bg-zinc-900 shrink-0 shadow-2xl"
            >
              <img
                src={`/about/grid/${item.img}`}
                alt={item.title}
                className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity"
              />
              <div className="absolute bottom-4 left-4 text-white font-medium text-xs drop-shadow-md">
                {item.title}
              </div>
            </div>
          ))}
        </div>
      </Html>
    </group>
  );
}

export default function PhoneShowcase() {
  return (
    <div className="w-full h-[800px] sm:h-[900px] lg:h-[1000px] relative -mt-20 overflow-visible">
      <Canvas shadows className="w-full h-full">
        <PerspectiveCamera makeDefault position={[0, 1.1, 3.55]} fov={18} />
        <ambientLight intensity={1.5} />
        <spotLight
          position={[10, 10, 10]}
          angle={0.15}
          penumbra={1}
          intensity={2}
          castShadow
        />
        <pointLight position={[-10, -10, -10]} intensity={1} />
        <Environment preset="city" />

        <Suspense fallback={null}>
          <Float
            speed={2}
            rotationIntensity={0.05}
            floatIntensity={0.2}
            floatingRange={[-0.05, 0.05]}
          >
            <PhoneWithDynamicScreen />
          </Float>
          <ContactShadows
            position={[0, -2, 0]}
            opacity={0.4}
            scale={15}
            blur={2.5}
            far={4}
          />
        </Suspense>

        <OrbitControls
          enablePan={false}
          enableZoom={false}
          minAzimuthAngle={-Math.PI / 3}
          maxAzimuthAngle={Math.PI / 3}
          minPolarAngle={Math.PI / 3}
          maxPolarAngle={Math.PI / 1.5}
          target={[0, 0.08, 0]}
          autoRotate={false}
        />
      </Canvas>

      <style jsx global>{`
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .hide-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }

        /* Defensive: prevent scroll chaining when the cursor is over the phone screen */
        .phone-screen-scroll {
          overscroll-behavior: contain;
        }

        /* Ensure the HTML screen sits above the canvas and can receive wheel/pointer events */
        .phone-html {
          pointer-events: auto !important;
          z-index: 50;
        }
      `}</style>
    </div>
  );
}

useGLTF.preload("/phone/scene.gltf");
