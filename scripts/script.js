// JavaScript Document//
// eslint-env es6 //
// eslint-disable no-console //
//deze tekst is om errors te vermijden//

var listTheme = document.querySelector("ul");
var themeButton = document.querySelector("li:nth-of-type(4) > button");
var themeButtonTwo = document.querySelector("li:first-of-type > button");
var footerTheme = document.querySelectorAll("footer > section > a");
var linkTheme = document.querySelectorAll("a");
//ik ben me bewust van het feit dat dit const moet zijn maar ik krijg parsing errors, met var werkt het wel//


themeButton.addEventListener("click", function () {

    "use strict";
    //ik krijg een JSLint error zonder deze tekst//

    listTheme.classList.toggle("light");
    linkTheme[0].classList.toggle("light");
    linkTheme[1].classList.toggle("light");
    themeButton.classList.toggle("dark");
    themeButtonTwo.classList.toggle("light");
    footerTheme[0].classList.toggle("light");
    footerTheme[1].classList.toggle("light");
    footerTheme[2].classList.toggle("light");


});


var navMenu = document.querySelector("li:first-of-type > button");
var dropMenu = document.querySelector("ul:nth-of-type(2)");
var menuFocus = document.querySelector(".unhideMenu");
var everyBody = document.querySelector("body");
var listGone = document.querySelector(".hideMenu");

everyBody.addEventListener("keydown", function () {
    "use strict";
    if (event.keyCode === 9) {
        if (menuFocus === document.activeElement) {
            dropMenu.classList.add("listOn");
            everyBody.classList.add("noScroll");
        }
        if (listGone === document.activeElement) {
            dropMenu.classList.remove("listOn");
            everyBody.classList.remove("noScroll");
        }

    }
});
/* Door een niet zichtbaar menu tabben is een beetje vreemd, hier zorg ik ervoor dat het menu ook uitklapt wanneer de focus op het menu komt. Aangezien de functie pas wordt getriggered wanneer er op tab wordt gedrukt zit de class op het laatste object in de zichtbare navbar, wanneer er dan getabd word staat de focus op de eerste item in de nav en wordt deze zichtbaar. Wanneer er door het menu getabbed is wordt hetzelfde trucje gebruikt om het menu weer in te klappen. */


navMenu.addEventListener("click", function () {
    "use strict";
    if (dropMenu.classList.contains("listOn")) {
        dropMenu.classList.remove("listOn");
        everyBody.classList.remove("noScroll");

    } else {
        dropMenu.classList.add("listOn");
        everyBody.classList.add("noScroll");
    }


    /*if (dropMenu.style.display === "none") {
        dropMenu.style.display = "block";
    } else {
        dropMenu.style.display = "none";
    }*/

});
var zibit = document.querySelector(".xzibit");
everyBody.onload = function () {
    "use strict";
    zibit.classList.add("loaded");
};
