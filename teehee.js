console.log('teehee!');

const colors = [
  [245, 66, 99],
  [250, 213, 80],
  [247, 250, 80],
  [128, 250, 80],
  [73, 217, 227],
  [110, 0, 255],
  [89, 58, 145],
  [235, 52, 219]
];

function randomIntFromInterval(min, max) { // min and max included
  return Math.floor(Math.random() * (max - min + 1) + min);
}

function setup() {
  createCanvas(window.innerWidth, window.innerHeight);
}

function draw() {
  let randomNumber = randomIntFromInterval(0, 7);
  let display = touches.length + ' touches';
  text(display, 5, 10);

  if (mouseIsPressed) {
    fill(colors[randomNumber]);
  } else {
    fill(colors[randomNumber]);
  }
  ellipse(mouseX, mouseY, 80, 80);
}
