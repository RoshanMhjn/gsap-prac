//using gsap to and from methods

/* gsap.to("div", {
  x: () => 500,
  duration: 1,
  delay: 0,
  rotate: 90,
  backgroundImage: "linear-gradient(to left, red, blue)",
  stagger: -1,
  repeat: -1,
  yoyo: true,
});

gsap.from("h1", {
  opacity: 0,
  duration: 0.7,
  y: 30,
  stagger: 0.7,
  repeat: -1,
  yoyo: true,
});
 */

//GSAP TIMELINE

/* gsap.to(".box1", {
  x: 400,
  duration: 1,
  delay: 1,
  rotate: 270,
  scale: 0.8,
  yoyo: true,
  repeat: 1,
});

gsap.to(".box2", {
  x: 400,
  duration: 1,
  delay: 3,
  rotate: 90,
  scale: 0.9,
  borderRadius: "50%",
  repeat: 1,
  yoyo: true,
});

gsap.to(".box3", {
  x: 400,
  delay: 5,
  duration: 1,
  rotate: 360,
  borderRadius: "30%",
  repeat: 1,
  yoyo: true,
});
 */

//USING TIMELINE;

/* let tl = gsap.timeline();

tl.to(".box1", {
  x: 400,
  duration: 1,
  delay: 1,
  rotate: 270,
  scale: 0.8,
  repeat: 1,
  yoyo: true,
});

tl.to(".box2", {
  x: 400,
  duration: 1,
  rotate: 90,
  scale: 0.9,
  borderRadius: "50%",
  repeat: 1,
  yoyo: true,
});

tl.to(".box3", {
  x: 400,
  duration: 1,
  rotate: 360,
  borderRadius: "30%",
  repeat: 1,
  yoyo: true,
});
 */

// nav animation using gsap

let tl = gsap.timeline();

tl.from("h2", {
  y: -20,
  duration: 0.9,
  opacity: 0,
});

tl.from("h4", {
  y: -20,
  opacity: 0,
  duration: 0.5,
  stagger: 0.5,
});

tl.from(".hero-text", {
  y: -20,
  opacity: 0,
  duration: 0.8,
});
