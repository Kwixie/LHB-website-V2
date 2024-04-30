import mainstyles from "./css/main.scss";
import buttonstyles from "./css/buttons.scss";
import startpagestyles from "./css/startpage.scss";
import navbarstyles from "./css/navbar.scss";
import articlepagestyles from "./css/articlepage.scss";
import colorstyles from "./css/colors.scss";
import investigatestyles from "./css/investigatepage.scss";
import rtestyles from "./css/rte.scss";
import typostyles from "./css/typography.scss";
import whoarewestyles from "./css/whoarewepage.scss";
import animationstyles from "./css/animation.scss";

document.addEventListener("DOMContentLoaded", function () {
  var arrow = document.querySelector(".arrow-down");

  arrow.addEventListener("click", function () {
    window.scrollBy({
      top: window.innerHeight, // Scroll down by viewport height
      behavior: "smooth", // Smooth scrolling
    });
  });
});

console.log("Hello World");
