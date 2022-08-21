const downBtn = document.querySelector(".downBtn");
const title = document.querySelector(".video-title .title");

downBtn.addEventListener("click", () => {
  title.classList.toggle("clamp");
  downBtn.classList.toggle("rotate");
});
