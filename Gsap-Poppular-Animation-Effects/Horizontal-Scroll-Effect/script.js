const container = document.querySelector(".container");
const sections = gsap.utils.toArray(".container section");
const texts = gsap.utils.toArray(".anim");
const srolInd = document.querySelector(".ind");

let scrollTween = gsap.to(sections, {
  xPercent: -100 * (sections.length - 1),
  ease: "none",
  scrollTrigger: {
    trigger: ".container",
    pin: true,
    scrub: 1,
    end: "=+3000"
  }
});


gsap.to(srolInd, {
    width: "100vw",
    scrollTrigger: {
        trigger: ".wrapper",
        start: "top left",
        scrub: 1,
    }
})