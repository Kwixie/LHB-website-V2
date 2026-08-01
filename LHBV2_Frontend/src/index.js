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
import cookieconsentstyles from "./css/cookieconsent.scss";

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
    const parentDiv = box.parentElement;

    readMoreBtn.addEventListener("click", function () {
      box.classList.add("hidden");
      fullText.classList.remove("hidden");
      window.location.hash = parentDiv.id;
      console.log(parentDiv.id);
    });
  });
});

document.addEventListener("DOMContentLoaded", function () {
  var banner = document.getElementById("cookie-consent-banner");

  if (banner === null) {
    return;
  }

  if (localStorage.getItem("lhb_cookie_consent") === null) {
    banner.classList.remove("hidden");
  }

  document
    .getElementById("cookie-consent-accept")
    .addEventListener("click", function () {
      localStorage.setItem("lhb_cookie_consent", "accepted");
      if (typeof gtag === "function") {
        gtag("consent", "update", { analytics_storage: "granted" });
      }
      banner.classList.add("hidden");
    });

  document
    .getElementById("cookie-consent-decline")
    .addEventListener("click", function () {
      localStorage.setItem("lhb_cookie_consent", "declined");
      banner.classList.add("hidden");
    });
});
