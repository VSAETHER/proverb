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

const output = document.getElementById("output"); // The container for the output
const submit = document.getElementById("submit"); // Submit button for new quote or proverb
const input = document.getElementById("input"); // Input for new quote or proverb
const form = document.getElementById("form"); // The form containing submit and input
const addBtn = document.getElementById("add"); // Add a new quote or proverb to the list
const seeBtn = document.getElementById("see"); // Generate a quote or proverb to the output
const eraseBtn = document.getElementById("erase"); // Erase button
const quoteBtn = document.getElementById("quoteButton"); // Radio button for quotes
const proverbBtn = document.getElementById("proverbButton"); // Radio button for proverbs
const quoteBtnForm = document.getElementById("quoteButtonForm"); // Radio button for writing a new quote
const proverbBtnForm = document.getElementById("proverbButtonForm"); // Radio button for writing a new proverb

// Enables the button for getting a quote or proverb when at least one of the radio buttons are checked
document.addEventListener("click", () => {
  if ((quoteBtn.checked || proverbBtn.checked) && output.innerText == "") {
    seeBtn.removeAttribute("disabled");
  } else {
    seeBtn.setAttribute("disabled", "disabled");
  }
});

// document.addEventListener("click", () => {
//   if (quoteBtnForm.checked || proverbBtnForm.checked) {
//     submit.removeAttribute("disabled");
//   } else {
//     submit.setAttribute("disabled", "disabled");
//   }
// });

// Enables the erase button when the output is not empty
document.addEventListener("click", () => {
  if (output.innerText != "") eraseBtn.removeAttribute("disabled");
});

//Add quote or proverb button
seeBtn.addEventListener("click", () => {
  output.style.display = "block";
  form.style.display = "none";
  output.innerText = "";
  const quote = data.filter((item) => item.type == "quote");
  const proverb = data.filter((item) => item.type == "proverb");

  //If quote is chosen
  if (quoteBtn.checked) {
    let rand = Math.floor(Math.random() * quote.length);
    const message = document.createElement("h2");
    let text = quote[rand].message;
    message.innerText = "Quote:\n \n" + text + "\n \n";

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

    //If proverb is chosen
  } else if (proverbBtn.checked) {
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
  }
});

// Erase button, erases the content in the output, shows the output and hides the form.
function del() {
  output.innerText = "";
  eraseBtn.setAttribute("disabled", "disabled");
}

// Hides the output and shows the form.
function add() {
  output.style.display = "none";
  form.style.display = "block";
  eraseBtn.setAttribute("disabled", "disabled");
  output.innerText = "";
}

// Returns original placeholder when clicked on input.
input.addEventListener(
  "click",
  () => (input.placeholder = "Add a Proverb or Quote..")
);

// Submit button, pushes a new proverb or quote to the list data and shows it in the output.
submit.addEventListener("click", () => {
  //Proverb button checked. If input is empty shows error message otherwise add to list and display in output.
  if (document.getElementById("proverbButtonForm").checked) {
    if (input.value === "") {
      input.placeholder = "Can't be empty"; // New placeholder for when trying to submit empty message
    } else {
      const text = document.createElement("h2");
      const button = document.createElement("button");
      button.textContent = "Add to Favorites";
      button.addEventListener("click", () => {
        var favorites = JSON.parse(localStorage.getItem("favorites"));
        if (favorites == null) favorites = [];
        if (favorites.includes(text.innerText) == false)
          favorites.push(text.innerText);
        localStorage.setItem("favorites", JSON.stringify(favorites));
      });
      text.innerText = input.value;
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
      input.value = "";
    }
  }
  // Same for the quote button.
  else if (document.getElementById("quoteButtonForm").checked) {
    if (input.value === "") {
      input.placeholder = "Can't be empty";
    } else {
      const text = document.createElement("h2");
      const button = document.createElement("button");
      button.textContent = "Add to Favorites";
      button.addEventListener("click", () => {
        var favorites = JSON.parse(localStorage.getItem("favorites"));
        if (favorites == null) favorites = [];
        if (favorites.includes(text.innerText) == false)
          favorites.push(text.innerText);
        localStorage.setItem("favorites", JSON.stringify(favorites));
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
      input.value = "";
    }
  } else {
    input.placeholder = "Choose Quote or Proverb."; // New placeholder for when trying to submit empty message
  }
});
