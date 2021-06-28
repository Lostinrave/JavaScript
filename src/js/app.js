import "../scss/app.scss";

/* Your JS Code goes here */

/* MDB ui */
import * as mdb from "mdb-ui-kit"; // lib
/* Demo JS */
import "./demo.js";
import $ from "jquery";

import "slick-carousel";

/* Slick JS start*/

$(document).ready(function () {
  $(".multiple-items").slick({
    dots: true,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 200,
    speed: 300,
    slidesToShow: 6,
    slidesToScroll: 3,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },

      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ],
  });

  $(".cards-slider").slick({
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ],
  });
});
/* Slick JS end*/

document.getElementById('popupLink').onclick = function() {

  var popup = document.getElementById('toolbarPopup');
  
  //Funkcija contains grazina reiksme true arba false
  if( popup.classList.contains('open') == false ) {
    popup.classList.add('open');   
  } else {
    popup.classList.remove('open');
  }

};
$(document).ready(function(){
  $("btn").mouseover(function(){
    $("hero-button").animate({top: '10px'});
  });
});