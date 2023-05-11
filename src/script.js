const data = [
  {
    id: 0,
    type: "quote",
    message: "A vaincre sans péril, on triomphe sans gloire",
  },
  {
    id: 1,
    type: "quote",
    message: "Tout est au mieux dans le meilleur des mondes",
  },
  {
    id: 2,
    type: "quote",
    message: "L'imagination est plus importante que le savoir",
  },
  {
    id: 3,
    type: "quote",
    message: "Un problème sans solution est un problème mal posé",
  },
  {
    id: 4,
    type: "proverb",
    message: "Paix et tranquillité, voilà le bonheur.",
  },
  {
    id: 5,
    type: "proverb",
    message:
      "La patience est un arbre dont la racine est amère, et dont les fruits sont très doux.",
  },
  {
    id: 6,
    type: "proverb",
    message: "On apprend peu par la victoire, mais beaucoup par la défaite.",
  },
  {
    id: 7,
    type: "proverb",
    message: "Avec du temps et de la patience, on vient à bout de tout.",
  },
];

const output = document.getElementById("output"); // the textbox
const submit = document.getElementById("submit"); // Submit new quote or proverb
const input = document.getElementById("input"); // input for new quote or proverb
const form = document.getElementById("form"); // The form containing submit and input
const addBtn = document.getElementById("add");
const seeBtn = document.getElementById("see");
const quoteBtn = document.getElementById("quoteButton");
const proverbBtn = document.getElementById("proverbButton");

/*ADD quote or proverb button*/
function getQuote() {
  addBtn.style.display = "none"; //hide the buttons
  seeBtn.style.display = "none";
  output.innerHTML = "";
  const quote = data.filter((item) => item.type == "quote"); //filter the data into two arrays containing quote or proverb
  const proverb = data.filter((item) => item.type == "proverb");

  if (quoteBtn.checked) {
    //If quote is chosen
    console.log(quote);
    console.log(data);
    let rand = Math.floor(Math.random() * quote.length);
    const message = document.createElement("h2");
    let text = quote[rand].message;
    message.innerHTML = text;
    const button = document.createElement("button");
    button.textContent = "Add to Favorites";
    button.addEventListener("click", () => {
      localStorage.setItem(localStorage.length, text);
    });
    const div = document.createElement("div");
    button.style.display = "inline";
    message.style.display = "inline";
    div.appendChild(message);
    div.appendChild(button);
    output.appendChild(div);
  } else if (proverbBtn.checked) {
    //If proverb is chosen
    console.log(proverb);
    let rand = Math.floor(Math.random() * proverb.length);
    const message = document.createElement("h2");
    let text = proverb[rand].message;
    message.innerHTML = text;
    const button = document.createElement("button");
    button.textContent = "Add to Favorites";
    button.addEventListener("click", () => {
      localStorage.setItem(localStorage.length, text);
    });
    const div = document.createElement("div");
    button.style.display = "inline";
    message.style.display = "inline";
    div.appendChild(message);
    div.appendChild(button);
    output.appendChild(div);
  } else {
    const message = document.createElement("h2");
    message.innerText = "error";
    message.style.color = "red";
    output.appendChild(message);
  }
}

function del() {
  output.innerHTML = "";
  output.style.display = "block";
  output.style.color = "white";
  form.style.display = "none";
  addBtn.style.display = "inline";
  seeBtn.style.display = "inline";
}
function add() {
  output.style.display = "none";
  form.style.display = "block";
}
submit.addEventListener("click", () => {
  addBtn.style.display = "none";
  seeBtn.style.display = "none";
  if (document.getElementById("proverbButtonForm").checked) {
    if (input.value === "") {
      output.style.display = "block";
      form.style.display = "none";
      output.innerText = "error";
      output.style.color = "red";
    } else {
      const text = document.createElement("h2");
      const button = document.createElement("button");
      button.textContent = "Add to Favorites";
      button.addEventListener("click", () => {
        localStorage.setItem(localStorage.length, input.value);
      });
      text.innerHTML = input.value;
      output.style.display = "block";
      form.style.display = "none";
      button.style.display = "inline";
      text.style.display = "inline";
      output.appendChild(text);
      output.appendChild(button);
      const object = {
        id: data.length,
        type: "proverb",
        message: text.innerText,
      };
      data.push(object);
      //   input.value = "";
    }
  } else if (document.getElementById("quoteButtonForm").checked) {
    if (input.value === "") {
      output.style.display = "block";
      form.style.display = "none";
      output.innerText = "error";
      output.style.color = "red";
    } else {
      const text = document.createElement("h2");
      const button = document.createElement("button");
      button.textContent = "Add to Favorites";
      button.addEventListener("click", () => {
        localStorage.setItem(localStorage.length, input.value);
      });
      text.innerHTML = input.value;
      output.style.display = "block";
      form.style.display = "none";
      button.style.display = "inline";
      text.style.display = "inline";
      output.appendChild(text);
      output.appendChild(button);
      const object = {
        id: data.length,
        type: "quote",
        message: text.innerText,
      };
      data.push(object);
      //   input.value = "";
    }
  } else {
    output.style.display = "block";
    form.style.display = "none";
    output.innerText = "error";
    output.style.color = "red";
  }
});

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
