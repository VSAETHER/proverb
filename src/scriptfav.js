// Script for printing out the values in favorites in local storage.

let favorites = JSON.parse(localStorage.getItem("favorites"));
// const text = document.createElement("h2");
for (i = 0; i < favorites.length; i++) {
  const text = document.createElement("h2");
  text.innerText = favorites[i];
  text.style.marginBottom = "1rem";
  output.appendChild(text);
}
// output.appendChild(text);
