// Script for printing out the values in favorites in local storage.

// You never reassign this variable, const would be better
let favorites = JSON.parse(localStorage.getItem("favorites"));
for (i = 0; i < favorites.length; i++) {
  const text = document.createElement("h2");
  text.innerText = favorites[i];
  text.style.marginBottom = "1rem";
  output.appendChild(text);
}

// Remove the array favorites from localstorage
document.getElementById("eraseFav").addEventListener("click", () => {
  localStorage.removeItem("favorites");
  // You could also empty the DOM
  location.reload();
});
