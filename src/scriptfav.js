for (i = 0; i < localStorage.length; i++) {
  const text = document.createElement("h2");
  text.innerText = localStorage.getItem(i);
  output.appendChild(text);
}

