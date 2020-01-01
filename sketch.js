var layers = [];
var DEGRADE_RATE = 15
var MAX_LAYERS = 255 / DEGRADE_RATE
var r = 50;
var g = 255;
var b = 68;
var CANVAS_WIDTH = window.innerWidth
var CANVAS_HEIGHT = window.innerHeight
function setup() {
  createCanvas(CANVAS_WIDTH, CANVAS_HEIGHT);
}

function mousePressed() {
  makeNewRound()
  drawCircles()
}

function drawCircles() {
  layers.map((round, round_num) => {
    round.map(circle => {
      let degrade = ((layers.length - round_num) * DEGRADE_RATE)
      fill(r - degrade, g - degrade, b - degrade)
      ellipse(circle[0], circle[1], circle[2], circle[2]);
    })
  })
}

function makeNewRound() {
  let round = [];
  for (let i = 0; i < 50; i++) {
    x = random(CANVAS_WIDTH);
    y = random(CANVAS_HEIGHT);
    radius = random(CANVAS_WIDTH * .125);
    round.push([x, y, radius])
  }
  layers.push(round)
  if (layers.length > MAX_LAYERS) {
    layers.shift()
  }
}