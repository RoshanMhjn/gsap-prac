let inititalPath = `M 100 100 Q 500 500 990 100`;

let finalPath = `M 100 100 Q 500 500 990 100`;

let string = document.querySelector("#string");

string.addEventListener("mousemove", function (dets) {
  path = `M 100 100 Q 500 ${dets.y} 990 100`;
  gsap.to("svg path", {
    attr: { d: path },
    ease: "power3.out",
  });
});

string.addEventListener("mouseleave", function () {
  gsap.to("svg path", {
    attr: { d: finalPath },
  });
});
