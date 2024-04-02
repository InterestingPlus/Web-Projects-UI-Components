const nav1 = document.getElementById("nav1"),
  nav2 = document.getElementById("nav2");
const underl = document.querySelector(".hr");

nav1.addEventListener("click", under1);
nav2.addEventListener("click", under2);

function under1() {
  underl.style.left = "30px";
}
function under2() {
  underl.style.left = "260px";
}
