"use client";

import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import {
	OrbitControls,
	PerspectiveCamera,
	Center,
	Html,
	useGLTF,
} from "@react-three/drei";
import * as THREE from "three";
import PhoneScreenContent from "./PhoneScreenContent";

function PhoneModel() {
	const { scene } = useGLTF("/mobile_phone/scene.gltf");

	return (
		<group>
			<Center>
				<primitive object={scene} />
			</Center>
			
			<Html
				transform
				distanceFactor={0.18}
				position={[0, 0.000001, 0.005]}
				rotation={[0, 0, 0]}
				center
				wrapperClass="phone-html"
			>
				<div
					className="rounded-[28px] bg-black"
					style={{ 
						width: "195px", 
						height: "405px",
						overflow: "hidden"
					}}
					onPointerDown={(event) => event.stopPropagation()}
					onPointerMove={(event) => event.stopPropagation()}
					onWheel={(event) => event.stopPropagation()}
				>
					<PhoneScreenContent className="w-full h-full" />
				</div>
			</Html>
		</group>
	);
}

export default function PhoneShowcase() {
	return (
		<div className="w-full h-[700px] sm:h-[800px] lg:h-[900px]">
			<Canvas shadows className="w-full h-full">
				<PerspectiveCamera makeDefault position={[0, 0.6, 3.6]} fov={18} />
				<ambientLight intensity={2} />
				<directionalLight position={[5, 8, 5]} intensity={1.5} />
				<directionalLight position={[-5, -2, -5]} intensity={0.8} />

				<Suspense fallback={null}>
					<group scale={4.0} rotation={[-0.03, 0, 0]}>
						<PhoneModel />
					</group>
				</Suspense>

				<OrbitControls
					enablePan={false}
					enableZoom={false}
					autoRotate={false}
					rotateSpeed={0.7}
					minAzimuthAngle={-Math.PI / 3}
					maxAzimuthAngle={Math.PI / 3}
					minPolarAngle={Math.PI / 4}
					maxPolarAngle={Math.PI / 1.4}
				/>
			</Canvas>

			<style jsx global>{`
				.phone-html {
					pointer-events: auto !important;
					z-index: 10;
				}
				.phone-screen-scroll::-webkit-scrollbar {
					width: 0;
					height: 0;
				}
				.phone-screen-scroll {
					scrollbar-width: none;
					-ms-overflow-style: none;
				}
			`}</style>
		</div>
	);
}

useGLTF.preload("/mobile_phone/scene.gltf");
