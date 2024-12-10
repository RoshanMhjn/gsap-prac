/* gsap.from(".page1 .box", {
  scale: 0,
  delay: 1,
  rotate: 360,
  duration: 2,
}); */

/* gsap.from(".page2 .top-text", {
  opacity: 0,
  duration: 1.2,
  x: 300,
  scrollTrigger: {
    trigger: ".page2 .top-text",
    scroller: "body",
    markers: true,
    start: "top 60%",
  },
});
gsap.from(".page2 .bottom-text", {
  opacity: 0,
  duration: 1.2,
  x: -300,
  scrollTrigger: {
    trigger: ".page2 .bottom-text",
    scroller: "body",
    markers: true,
    start: "top 60%",
  },
});
 */

/* gsap.from(".page2 .box", {
  scale: 0,
  opacity: 0,
  duration: 1,
  rotate: 720,
  scrollTrigger: {
    trigger: ".page2 .box",
    scroller: "body",
    markers: true,
    start: "top 70%",
    end: "top 20%",
    scrub: 3,
    pin: true,
  },
});
 */

gsap.to("#page2", {
  transform: "translateX(-160%)",
  scrollTrigger: {
    trigger: "#page2",
    scroller: "body",
    markers: true,
    start: "top 0%",
    end: "top -150%",
    scrub: 3,
    pin: true,
  },
});
