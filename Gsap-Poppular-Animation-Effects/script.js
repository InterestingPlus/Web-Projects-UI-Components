let tl = gsap.timeline({
  scrollTrigger: {
    trigger: ".profile img",
    start: "200px 200px",
    end: "170px 0",
    scrub: 1,
    scroller: "main",
    // markers: true,
  },
});

tl.to(
  "section .main img",
  {
    top: "0.8rem",
    left: "1rem",
    width: "8rem",
  },
  "one"
);
tl.to(
  ".profile .main h1",
  {
    top: "1.7rem",
    left: "16rem",
    color: "#fff",
    fontSize: "2rem",
  },
  "one"
);
tl.to(
  ".profile .main h2",
  {
    top: "4.6rem",
    left: "20rem",
    color: "#ffffffab",
    fontSize: "1.5rem",
  },
  "one"
);
