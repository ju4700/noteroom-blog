  gsap.registerPlugin(ScrollTrigger);

  const containers = [
    ".first-container",
    ".second-container",
    ".third-container",
    ".fourth-container",
    ".fifth-container",
    ".sixth-container",
  ];

  containers.forEach(selector => {
    gsap.from(selector, {
      opacity: 0,
      y: 60,
      duration: 1.2,
      ease: "power2.out",
      scrollTrigger: {
        trigger: selector,
        start: "top 85%", // Animate when top of container hits 85% of viewport height
        toggleActions: "play none none none"
      }
    });
  });

  containers.forEach(selector => {
  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: selector,
      start: "top 85%",
      toggleActions: "play none none none"
    }
  });

  tl.from(`${selector} svg`, {
    opacity: 0,
    y: 40,
    duration: 1,
    ease: "power2.out"
  }).from(`${selector} .desc-box-2`, {
    opacity: 0,
    y: 30,
    duration: 0.8,
    ease: "power2.out"
  }, "-=0.4"); // slight overlap
});

document.querySelectorAll('.desc-box').forEach(desc => {
  const words = desc.textContent.split(" ");
  desc.innerHTML = words.map(word => `<span class="word">${word}</span>`).join(" ");

  gsap.set(desc.querySelectorAll(".word"), { opacity: 0, y: 20 });

  ScrollTrigger.create({
    trigger: desc,
    start: "top 80%",
    onEnter: () => {
      gsap.to(desc.querySelectorAll(".word"), {
        opacity: 1,
        y: 0,
        stagger: 0.05,
        ease: "power2.out",
        duration: 0.6
      });
    }
  });
});

