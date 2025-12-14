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



let langData = {};

// تحميل اللغة المختارة
function setLanguage(lang) {
  fetch(`lang/${lang}.json`)
    .then(response => response.json())
    .then(data => {
      langData = data;
      updateTexts();
    })
    .catch(err => console.error("Error loading language file:", err));
}

// تحديث نصوص شريط التنقل
function updateTexts() {
  document.getElementById('home-navbar').textContent = langData["home-navbar"];
  document.getElementById('store-navbar').textContent = langData["store-navbar"];
  document.getElementById('test-navbar').textContent = langData["test-navbar"];
  document.getElementById('about-navbar').textContent = langData["about-navbar"];
  document.getElementById('contact-navbar').textContent = langData["contact-navbar"];
}

// تحميل اللغة الإنجليزية افتراضياً عند بداية الصفحة
setLanguage('en');
