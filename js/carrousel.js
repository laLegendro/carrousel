(function () {
  //on va aller chercher la class carroussel
  let carrousel = document.querySelector(".carrousel");

  //on va aller chercher le formulaire qui contient les input radio
  let carrousel__form = document.querySelector(".carrousel__form");

  //on va aller chercher le formulaire qui contient les input radio
  let bouton = document.querySelector(".bouton__ouvrir");

  let carrousel__x = document.querySelector(".carrousel__x");

  let galerie = document.querySelector(".galerie");

  let carrousel__figure = document.querySelector(".carrousel__figure");

  let galerie__img = galerie.querySelectorAll("img");

  let index = 0; //compte le nombre d'image

  for (const elm of galerie__img) {
    creer_image_carrousel(index, elm);
    creer_radio_carrousel(index);

    index++;
  }

  /**
   * creer une fimage dans le carrousel à partir d'une image de la galerie
   *
   * @param {*} index numéro de l'image
   * @param {*} elm image de la galerie
   */
  function creer_image_carrousel(index, elm) {
    let carrousel__img = document.createElement("img"); //on cree l'élément image
    carrousel__img.classList.add("carrousel__img"); //on y donne la classlist
    carrousel__img.dataset.index = index;
    carrousel__img.src = elm.src; // on y donne la source qui est le site web
    carrousel__figure.appendChild(carrousel__img); // on le criss dans carrousel_img
  }

  /**
   *creer des radio bouton de navigation dans le carrousel
   * @param {*} index numero du radio bouton
   */
  function creer_radio_carrousel(index) {
    //creer un input
    let radio = document.createElement("input");
    //modifier le type = radio
    radio.type = "radio";
    //modifier le name = radio
    radio.name = "radioCarrousel";
    // modifier le value = index
    radio.value = index;
    //ajouter le radio bouton au formulaire
    carrousel__form.appendChild(radio);
    console.log(radio, "radio");

    //creer un ecouteur d'evenement change sur le radio bouton

    //initialiser le style.opacity = 0, pour l'ensemble des images
    //initialser l'image selectionnée à style.opacity = 1
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
