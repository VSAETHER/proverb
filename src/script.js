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
const eraseBtn = document.getElementById("erase");
const quoteBtn = document.getElementById("quoteButton");
const proverbBtn = document.getElementById("proverbButton");
const radioButtons = document.querySelectorAll('input[name="1"]');

document.addEventListener("click", () => {
  if (quoteBtn.checked || proverbBtn.checked) {
    seeBtn.removeAttribute("disabled");
  } else {
    seeBtn.setAttribute("disabled", "disabled");
  }
});
seeBtn.addEventListener("click", () => {
  eraseBtn.removeAttribute("disabled");
});

/*ADD quote or proverb button*/
seeBtn.addEventListener("click", () => {
  output.style.display = "block";
  form.style.display = "none";
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
    message.innerText = "Quote:\n \n" + text + "\n \n";
    const button = document.createElement("button");
    button.textContent = "Add to Favorites";
    button.addEventListener("click", () => {
      localStorage.setItem(localStorage.length, text);
    });
    output.append(message, button);
  } else if (proverbBtn.checked) {
    //If proverb is chosen
    console.log(proverb);
    let rand = Math.floor(Math.random() * proverb.length);
    const message = document.createElement("h2");
    let text = proverb[rand].message;
    message.innerText = "Proverb:\n \n" + text + "\n \n";
    message.style.fontSize = "2rem";

    // Create a button to add favorites, get the list from local storage.
    // Check if element already exists, if not add to the list and put back in local storage.
    const button = document.createElement("button");
    button.textContent = "Add to Favorites";
    button.addEventListener("click", () => {
      var favorites = JSON.parse(localStorage.getItem("favorites"));
      if (favorites == null) favorites = [];
      if (favorites.includes(text) == false) favorites.push(text);
      localStorage.setItem("favorites", JSON.stringify(favorites));
    });
    // Append the message and button to the textbox
    output.append(message, button);
  } //else {
  //   const message = document.createElement("h2");
  //   message.innerText = "error";
  //   message.style.color = "red";
  //   output.appendChild(message);
  // }
});

function del() {
  output.innerHTML = "";
  output.style.display = "block";
  output.style.color = "white";
  form.style.display = "none";
  eraseBtn.setAttribute("disabled", "disabled");
}
function add() {
  output.style.display = "none";
  form.style.display = "block";
}
submit.addEventListener("click", () => {
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
  }
  // else {
  //   output.style.display = "block";
  //   form.style.display = "none";
  //   output.innerText = "error";
  //   output.style.color = "red";
  // }
});
