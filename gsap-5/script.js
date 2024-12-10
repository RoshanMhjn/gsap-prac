let tl = gsap.timeline();
let menu = document.getElementById("hamburger-menu");

let close = document.getElementById("nav-close");

tl.to("#full", {
  right: "0%",
  duration: 0.2,
});

tl.from("#full h4", {
  opacity: 0,
  x: 20,
  duration: 0.2,
  stagger: 0.2,
});

tl.pause();

menu.addEventListener("click", () => {
  tl.play();
});

close.addEventListener("click", () => {
  tl.reverse();
});
