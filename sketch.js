var rounds = [];
var r = 50;
var g = 255;
var b = 68;
var CANVAS_WIDTH = 1850
var CANVAS_HEIGHT = 950
function setup() {
  createCanvas(CANVAS_WIDTH, CANVAS_HEIGHT);
}

function draw() {
}

function mousePressed() {
  makeNewRound()
  drawCircles()
}

function myconstrain(x) {
  if (x < 0) {
    return 0;
  } else if (x > 255) {
    return 255;
  }
  return x
}

function drawCircles() {
  rounds.map((round, round_num) => {
    round.map(circle => {
      let diff = ((rounds.length - round_num) * 15)
      fill(r - diff, g - diff, b - diff)
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
  rounds.push(round)
}