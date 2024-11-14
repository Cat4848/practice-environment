const button = document.querySelector("#button");
button.addEventListener("click", () => {
  const content = document.querySelector("#content");
  content.innerHTML = "changed content";
});
