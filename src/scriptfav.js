// Script for printing out the values in local storage.

for (i = 0; i < localStorage.length; i++) {
  const text = document.createElement("h2");
  text.innerText = localStorage.getItem(i);
  output.appendChild(text);
}

var bgColor;
function random_bg_color() {
  var x = Math.floor(Math.random() * 256);
  var y = Math.floor(Math.random() * 256);
  var z = Math.floor(Math.random() * 256);
  bgColor = "rgba(" + x + "," + y + "," + z + "," + 0.9 + ")";
  output.style.background = bgColor;
}

const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");
let raf;

const ball = {
  x: 100,
  y: 100,
  vx: 3,
  vy: 1,
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

function draw() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ball.draw();
  ball.x += ball.vx;
  ball.y += ball.vy;

  if (ball.y + ball.vy > canvas.height || ball.y + ball.vy < 0) {
    ball.vy = -ball.vy;
    random_bg_color();
  }
  if (ball.x + ball.vx > canvas.width || ball.x + ball.vx < 0) {
    ball.vx = -ball.vx;
    random_bg_color();
  }

  raf = window.requestAnimationFrame(draw);
}

// canvas.addEventListener("mouseover", (e) => {
//   raf = window.requestAnimationFrame(draw);
// });
raf = window.requestAnimationFrame(draw);
// canvas.addEventListener("mouseout", (e) => {
//   window.cancelAnimationFrame(raf);
// });

// ball.draw();
