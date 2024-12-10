let main = document.querySelector("#main");

let cursor = document.querySelector("#cursor");

let imageDiv = document.querySelector("#image");

main.addEventListener("mousemove", function (e) {
  gsap.to(cursor, {
    x: e.x,
    y: e.y,
    duration: 1,
    ease: "back.out",
    opacity: 0.8,
  });
});

imageDiv.addEventListener("mouseenter", () => {
  cursor.innerHTML = "view more";
  gsap.to(cursor, {
    scale: 2,
  });
});
imageDiv.addEventListener("mouseleave", () => {
  cursor.innerHTML = "";
  gsap.to(cursor, {
    scale: 1,
  });
});
