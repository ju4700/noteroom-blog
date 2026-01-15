 
 
 // Animate blobs gently for depth - hero section
    gsap.to(".blob.one", {
      x: 80,
      y: 40,
      duration: 10,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut"
    });

    gsap.to(".blob.two", {
      x: -60,
      y: -30,
      duration: 12,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut"
    });

    // Animate title
    gsap.to("#hero-title", {
      opacity: 1,
      y: 0,
      duration: 1.4,
      ease: "power4.out",
      delay: 0.4
    });

    // Animate subtitle
    gsap.to("#hero-subtitle", {
      opacity: 1,
      y: 0,
      duration: 1.2,
      ease: "power4.out",
      delay: 1.0
    });


