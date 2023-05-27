const innerContainer = document.querySelector(".inner-container");
const inner = document.querySelector(".inner");
const inner__1 = document.querySelector(".inner__text-1");
const inner__2 = document.querySelector(".inner__text-2");

innerContainer.addEventListener("click", function () {
  innerContainer.classList.add("transition");
  innerContainer.style.background = "#e2d3ce";
  inner.style.background = "none";
  inner__1.classList.add("active");
  inner__2.classList.remove("active");
});
setTimeout(function () {
  innerContainer.classList.remove("transition");
}, 500);
inner.addEventListener("click", function () {
  inner.classList.add("transition");
  inner.style.background = "#e2d3ce";
  innerContainer.style.background = "none";
  inner__1.classList.remove("active");
  inner__2.classList.add("active");
});
setTimeout(function () {
  inner.classList.remove("transition");
}, 500);
