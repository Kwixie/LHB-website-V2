import mainstyles from "./css/main.scss";
import buttonstyles from "./css/buttons.scss";
import startpagestyles from "./css/startpage.scss";
import navbarstyles from "./css/navbar.scss";
import articlepagestyles from "./css/articlepage.scss";
import colorstyles from "./css/colorthemes.scss";
import investigatestyles from "./css/investigatepage.scss";
import rtestyles from "./css/rte.scss";
import typostyles from "./css/typography.scss";
import whoarewestyles from "./css/whoarewepage.scss";
import animationstyles from "./css/animation.scss";

document.addEventListener("DOMContentLoaded", function () {
  var arrow = document.querySelector(".arrow-down");

  if (arrow === null) {
    return;
  }
  arrow.addEventListener("click", function () {
    window.scrollBy({
      top: window.innerHeight, // Scroll down by viewport height
      behavior: "smooth", // Smooth scrolling
    });
  });
});

document.addEventListener("DOMContentLoaded", function () {
  const teaserBoxes = document.querySelectorAll("[data-jsid='teaser-box']");
  console.log(teaserBoxes);

  teaserBoxes.forEach((box) => {
    const readMoreBtn = box.querySelector(".read-more");
    const fullText = box.nextElementSibling;

    readMoreBtn.addEventListener("click", function () {
      box.classList.add("hidden"); // Hide the teaser box
      fullText.classList.remove("hidden"); // Show the full text
    });
    // readLessButtons.addEventListener("click", function () {
    //   fullText.classList.add("hidden"); // Hide the teaser box
    //   box.classList.remove("hidden"); // Show the full text
    // });
  });
});
