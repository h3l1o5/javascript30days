const img = document.querySelector("img");
const titleHighlight = document.querySelector(".hl");

const spacing = document.getElementById("spacing");
const blur = document.getElementById("blur");
const baseColor = document.getElementById("base");

img.style.padding = `${spacing.value}px`;
img.style.backgroundColor = baseColor.value;
img.style.filter = `blur(${blur.value}px)`;
titleHighlight.style.color = baseColor.value;

spacing.addEventListener("input", e => {
  img.style.padding = `${e.target.value}px`;
});

blur.addEventListener("input", e => {
  img.style.filter = `blur(${e.target.value}px)`;
});

baseColor.addEventListener("input", e => {
  img.style.backgroundColor = e.target.value;
  titleHighlight.style.color = e.target.value;
});
