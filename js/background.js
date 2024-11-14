const colors = [
  "#ef5777",
  "#575fcf",
  "#4bcffa",
  "#34e7e4",
  "#0be881",
  "#f53b57",
  "#3c40c6",
  "#0fbcf9",
  "#00d8d6",
  "#05c46b",
  "#ffc048",
  "#ffdd59",
  "#ff5e57",
  "#d2dae2",
  "#485460",
  "#ffa801",
  "#ffd32a",
  "#ff3f34",
];

const btn = document.querySelector("button");

function getRandomColor() {
  const randomChoice = Math.floor(Math.random() * colors.length);
  return colors[randomChoice];
}

function changeBackgroundColor() {
  const color1 = getRandomColor();
  const color2 = getRandomColor();

  while (color1 === color2) {
    color2 = getRandomColor();
  }
  document.body.style.background = `linear-gradient(45deg, ${color1}, ${color2})`;
}
changeBackgroundColor();
btn.addEventListener("click", changeBackgroundColor);