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

const output = document.getElementById("output");
const submit = document.getElementById("submit");
const input = document.getElementById("input");

function getQuote() {
  document.getElementById("add").style.display = "none";
  document.getElementById("see").style.display = "none";
  output.innerHTML = "";
  const quote = data.filter((item) => (item.type = "quote"));
  const proverb = data.filter((item) => (item.type = "proverb"));
  if (document.getElementById("quoteButton").checked) {
    let rand = Math.floor(Math.random() * quote.length);
    const message = document.createElement("h2");
    let text = quote[rand].message;
    message.innerHTML = text;
    const button = document.createElement("button");
    button.textContent = "favorite";
    button.addEventListener("click", () => {
      localStorage.setItem(localStorage.length, text);
    });
    const div = document.createElement("div");
    div.appendChild(message);
    div.appendChild(button);
    output.appendChild(div);
  } else if (document.getElementById("proverbButton").checked) {
    let rand = Math.floor(Math.random() * proverb.length);
    const message = document.createElement("h2");
    let text = proverb[rand].message;
    message.innerHTML = text;
    const button = document.createElement("button");
    button.textContent = "favorite";
    button.addEventListener("click", () => {
      localStorage.setItem(localStorage.length, text);
    });
    const div = document.createElement("div");
    div.appendChild(message);
    div.appendChild(button);
    output.appendChild(div);
    div.style.flexDirection(column);
  } else {
    const message = document.createElement("h2");
    message.innerHTML = "error";
    output.appendChild(message);
  }
}

function del() {
  output.innerHTML = "";
  output.style.display = "block";
  document.getElementById("form").style.display = "none";
  document.getElementById("add").style.display = "inline";
  document.getElementById("see").style.display = "inline";
}
function add() {
  output.style.display = "none";
  document.getElementById("form").style.display = "block";
}
submit.addEventListener("click", () => {
  document.getElementById("add").style.display = "none";
  document.getElementById("see").style.display = "none";
  if (document.getElementById("proverbButtonForm").checked) {
    if (input.value === "") {
    } else {
      const text = document.createElement("h2");
      const button = document.createElement("button");
      button.textContent = "favorite";
      button.addEventListener("click", () => {
        localStorage.setItem(localStorage.length, input.value);
      });
      text.innerHTML = input.value;
      output.style.display = "block";
      document.getElementById("form").style.display = "none";
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
    } else {
      const text = document.createElement("h2");
      const button = document.createElement("button");
      button.textContent = "favorite";
      button.addEventListener("click", () => {
        localStorage.setItem(localStorage.length, input.value);
      });
      text.innerHTML = input.value;
      output.style.display = "block";
      document.getElementById("form").style.display = "none";
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
    
  }
});
