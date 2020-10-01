// JavaScript Document
//dark theme light theme switch


var listTheme = document.querySelector("ul");
var linkTheme = document.querySelectorAll("a");
var themeButton = document.querySelector("button");
var footerTheme = document.querySelectorAll("section:nth-of-type(11) > a");



themeButton.addEventListener("click", function () {

    "use strict";
    //rare error in brackets als ik dit niet doe

    listTheme.classList.toggle("light");
    linkTheme[0].classList.toggle("light");
    linkTheme[1].classList.toggle("light");
    linkTheme[2].classList.toggle("light");
    themeButton.classList.toggle("dark");
    footerTheme[0].classList.toggle("light");
    footerTheme[1].classList.toggle("light");
    footerTheme[2].classList.toggle("light");


});
