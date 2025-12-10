// CODE GSAP SCROLL HOME PIN
gsap.registerPlugin(ScrollTrigger);
ScrollTrigger.create({
  trigger: ".home",
  start: "top top",
  end: "+=100%",
  pin: true,
  pinSpacing: false,
});
// CODE GSAP SCROLL STORE VERTICAL
const container = document.querySelector(".horizontal-container");
gsap.to(container, {
  x: () => -(container.scrollWidth - window.innerWidth ) + "px",
  ease: "none",
  scrollTrigger: {
    trigger: ".store",
    start: "top top",
    end: () => "+=" + container.scrollWidth + "px",
    scrub: true,
    pin: true, // تثبيت القسم أثناء التمرير
    anticipatePin: 1,
  },
});
