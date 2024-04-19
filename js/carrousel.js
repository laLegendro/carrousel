(function () {
  let carrousel = document.querySelector(".carrousel");

  let bouton = document.querySelector(".bouton__ouvrir");

  let carrousel__x = document.querySelector(".carrousel__x");

  let galerie = document.querySelector(".galerie");

  let carrousel__figure = document.querySelector(".carrousel__figure");

  let galerie__img = galerie.querySelectorAll("img");

  for (const elm of galerie__img) {
    let carrousel__img = document.createElement("img");
    carrousel__img.src = elm.src;
    carrousel__figure.appendChild(carrousel__img);

    let carrousel__radio = document.createElement("input");
    carrousel__radio.type = "radio";
    carrousel__radio.name = "carrousel__radio";
    carrousel__radio.value = elm.src; // pour le css
    carrousel__radio.dataset.src = elm.src; // pour le js

    carrousel__radio.classList.add("carrousel__radio");
  }

  bouton.addEventListener("mousedown", function () {
    console.log("click");
    carrousel.classList.add("carrousel--ouvrir");
  });

  carrousel__x.addEventListener("mousedown", function () {
    console.log("click");
    carrousel.classList.remove("carrousel--ouvrir");
  });
})();
