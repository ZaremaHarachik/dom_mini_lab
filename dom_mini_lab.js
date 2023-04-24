const head = document.getElementById("head");
head.textContent = "some other text";

const hiddenButton = document.getElementById("hidden");
hiddenButton.addEventListener("click", () => {
  head.style.display = "none";
});

const not_hiddenButton = document.getElementById("not_hidden");
not_hiddenButton.addEventListener("click", () => {
  head.style.display = "block";
});
