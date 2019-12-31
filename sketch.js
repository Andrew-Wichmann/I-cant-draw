var circles = [];
var CANVAS_WIDTH = 1850
var CANVAS_HEIGHT = 950
var RESOLUTION = 51
function setup() {
  createCanvas(CANVAS_WIDTH, CANVAS_HEIGHT);
}

function draw() {
}

function mousePressed() {
  new_circ = new Cirle([random(CANVAS_WIDTH), random(CANVAS_HEIGHT)], Math.floor(random(10, 200)))
  circles.push(new_circ)
  new_circ.draw()
}

function myconstrain(x) {
  if (x < 0) {
    return 0;
  } else if (x > 255) {
    return 255;
  }
  return x
}

class Cirle {
  constructor(center, radius) {
    this.center = center
    this.radius = radius
    this.perim = []
    for (var i = 0; i < Math.PI * radius * RESOLUTION; i++) {
      let theta = (2 * Math.PI / RESOLUTION) * i
      this.perim.push([center[0] + (radius * Math.cos(theta)), center[1] + (radius * Math.sin(theta))])
    }
  }

  draw = () => {
    var r = 50;
    var g = 255;
    var b = 68;
    fill(r, g, b);
    ellipse(this.center[0], this.center[1], this.radius * 2, this.radius * 2);
    this.perim.forEach(dot => ellipse(dot[0], dot[1], 10, 10))
  }
}