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

ScrollTrigger.matchMedia({
  "(max-width: 480px)": function () {
    createHorizontalScroll(20);
  },

  "(min-width: 481px)": function () {
    createHorizontalScroll(30);
  },

});
function createHorizontalScroll(offset = 0) {
  gsap.to(container, {
    x: () => -(container.scrollWidth - window.innerWidth + offset) + "px",
    ease: "none",
    scrollTrigger: {
      trigger: ".store",
      start: "top top",
      end: () => "+=" + container.scrollWidth + "px",
      scrub: true,
      pin: true,
      anticipatePin: 1,
    },
  });
}
