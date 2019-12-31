var circles = [];
var CANVAS_WIDTH = 1900
var CANVAS_HEIGHT = 1000
var CIRCLE_MIN_RADIUS = 0.02 * CANVAS_HEIGHT
var CIRCLE_MAX_RADIUS = 0.08 * CANVAS_HEIGHT
var CIRCUMFRENCE_RESOLUTION = 1

class Circle {
  constructor(center, radius) {
    this.center = center
    this.radius = radius
    this.perim = []
    let dots = radius * CIRCUMFRENCE_RESOLUTION
    for (var i = 0; i < dots; i++) {
      let theta = (2 * Math.PI / dots) * i
      this.perim.push([center[0] + (radius * Math.cos(theta)), center[1] + (radius * Math.sin(theta))])
    }
  }

  draw = () => {
    var r = 50;
    var g = 255;
    var b = 68;
    fill(r, g, b);
    ellipse(this.center[0], this.center[1], this.radius * 2, this.radius * 2);
  }

  intersects_another = () => {
    return !this.perim.every(node => get(node[0] + 1, node[1] + 1).every(rgb => rgb === 0))
  }
}

function setup() {
  createCanvas(CANVAS_WIDTH, CANVAS_HEIGHT);
}

function mousePressed() {
  while (true) {
    rand_x = random(CANVAS_WIDTH)
    rand_y = random(CANVAS_HEIGHT)
    if (get(rand_x, rand_y).every(value => value === 0)) {
      new_circle = grow_circle()
      circles.push(new_circle)
      new_circle.draw()
      break
    }
  }
}

function grow_circle() {
  let center = [random(CANVAS_WIDTH), random(CANVAS_HEIGHT)]
  let radius = Math.floor(random(CIRCLE_MIN_RADIUS, CIRCLE_MAX_RADIUS))
  new_circle = new Circle(center, radius)
  if (new_circle.intersects_another()) {
    while (new_circle.intersects_another()) {
      radius--
      new_circle = new Circle(center, radius)
      if (radius <= CIRCLE_MIN_RADIUS) {
        return grow_circle()
      }
    }
  } else {
    while (!new_circle.intersects_another()) {
      radius++
      new_circle = new Circle(center, radius)
      if (radius >= CIRCLE_MAX_RADIUS) {
        break
      }
    }
  }
  return new_circle
}
function myconstrain(x) {
  if (x < 0) {
    return 0;
  } else if (x > 255) {
    return 255;
  }
  return x
}
