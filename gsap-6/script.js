const textSeperate = () => {
  let h1 = document.querySelector("h1");
  let h1Content = h1.textContent;

  let splittedText = h1Content.split("");
  let halfValue = Math.floor(splittedText.length / 2);

  let clutter = "";

  console.log(halfValue);

  splittedText.forEach(function (e, i) {
    {
      i < halfValue
        ? (clutter += `<span class="left-clutter">${e}</span>`)
        : (clutter += `<span class="right-clutter">${e}</span>`);
    }
  });

  h1.innerHTML = clutter;

  console.log(clutter);
};

textSeperate();

gsap.from(".left-clutter", {
  y: 30,
  delay: 0.3,
  duration: 1,
  opacity: 0,
  stagger: 0.2,
});
gsap.from(".right-clutter", {
  y: 30,
  delay: 0.3,
  duration: 1,
  opacity: 0,
  stagger: -0.2,
});
