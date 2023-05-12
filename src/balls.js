// Creates a function that gets a random color and puts in on the output sections.
var bgColor;
function random_bg_color() {
  var x = Math.floor(Math.random() * 256);
  var y = Math.floor(Math.random() * 256);
  var z = Math.floor(Math.random() * 256);
  bgColor = "rgba(" + x + "," + y + "," + z + "," + 0.9 + ")";
  output.style.background = bgColor;
}
var bgColorBall;
function random_bg_color_ball() {
  var x = Math.floor(Math.random() * 256);
  var y = Math.floor(Math.random() * 256);
  var z = Math.floor(Math.random() * 256);
  bgColorBall = "rgba(" + x + "," + y + "," + z + "," + 0.9 + ")";
  ball.color = bgColorBall;
}
var bgColorBall2;
function random_bg_color_ball2() {
  var x = Math.floor(Math.random() * 256);
  var y = Math.floor(Math.random() * 256);
  var z = Math.floor(Math.random() * 256);
  bgColorBall2 = "rgba(" + x + "," + y + "," + z + "," + 0.9 + ")";
  ball2.color = bgColorBall2;
}

// Gets the canvas from the HTML
const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");
let raf;

// Create the first ball with the starting coordinates and speed. Draw() draws a circle with radius "radius".
const ball = {
  x: 100,
  y: 100,
  vx: 1.5,
  vy: 0.75,
  radius: 10,
  color: "blue",
  draw() {
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2, true);
    ctx.closePath();
    ctx.fillStyle = this.color;
    ctx.fill();
  },
};

// Second ball
const ball2 = {
  x: 95,
  y: 85,
  vx: 2,
  vy: 2.3,
  radius: 5,
  color: "red",
  draw() {
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2, true);
    ctx.closePath();
    ctx.fillStyle = this.color;
    ctx.fill();
  },
};

// Function for the movement of the ball, moves in x and y-axis according to speed vx and vy. Changes direction
// when x or y is getting smaller then 0 or bigger then the width or heigth of the canvas
function draw() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ball.draw();
  ball.x += ball.vx;
  ball.y += ball.vy;
  ball2.draw();
  ball2.x += ball2.vx;
  ball2.y += ball2.vy;

  if (ball.y + ball.vy > canvas.height - 5 || ball.y + ball.vy < 5) {
    ball.vy = -ball.vy;
    // random_bg_color();
    random_bg_color_ball();
  }
  if (ball.x + ball.vx > canvas.width - 5 || ball.x + ball.vx < 5) {
    ball.vx = -ball.vx;
    // random_bg_color();
    random_bg_color_ball();
  }

  if (ball2.y + ball2.vy > canvas.height || ball2.y + ball2.vy < 0) {
    ball2.vy = -ball2.vy;
    // random_bg_color();
    random_bg_color_ball2();
  }
  if (ball2.x + ball2.vx > canvas.width || ball2.x + ball2.vx < 0) {
    ball2.vx = -ball2.vx;
    // random_bg_color();
    random_bg_color_ball2();
  }

  raf = window.requestAnimationFrame(draw);
}

raf = window.requestAnimationFrame(draw);
