const catButton = document.querySelector("#cat-button");
const clickCount = document.querySelector("#click-count");

let clicks = 0;

catButton.addEventListener("click", () => {
  clicks += 1;
  clickCount.textContent = clicks.toLocaleString("es");
});
