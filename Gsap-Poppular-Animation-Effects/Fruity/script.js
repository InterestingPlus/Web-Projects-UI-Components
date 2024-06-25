let tl = gsap.timeline({
  scrollTrigger: {
    trigger: ".two",
    start: "10% 90%",
    end: "30% 40%",
    scrub: 1,
scroller: "#main",
    // markers: true,
  },
});
tl.to(
  ".one h2",
  {
    fontSize: "10vw",
    marginTop: "-50vh",
    marginLeft: "20vw",
  },
  "one"
);
tl.to(
  "#maaza",
  {
    width: "40vw",
    top: "120%",
    left: "5%",
  },
  "one"
);
tl.to(
  "#mango",
  {
    width: "20vw",
    top: "155%",
    left: "2%",
  },
  "one"
);
tl.to(
  "#leafs",
  {
    width: "65vw",
    top: "-10%",
    left: "-50px",
    rotate: "120deg",
  },
  "one"
);
tl.to(
  "#leaf",
  {
    width: "20vw",
    top: "155%",
    left: "28%",
    rotate: "50deg",
  },
  "one"
);
tl.from(
  ".two .right h1",
  {
    opacity: "0",
    x: "50%",
  },
  "one"
);
tl.from(
  ".two .right p",
  {
    opacity: "0",
    y: "150%",
  },
  "one"
);
