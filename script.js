let currentCss = document.querySelector("h3");
let color1 = document.querySelector(".color1");
let color2 = document.querySelector(".color2");
let currentBackground = document.querySelector("main");

console.log(color1, color2);

color1.addEventListener("input", setGradient);
color2.addEventListener("input", setGradient);

function setGradient() {
  currentBackground.style.background = `linear-gradient(to right, ${color1.value}, ${color2.value})`;
  currentCss.textContent =
    "background: " + currentBackground.style.background + ";";
}

setGradient();
