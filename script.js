const btnFeatures = document.querySelector(".nav__features");
const btnWorks = document.querySelector(".nav__works");
const btnTeam = document.querySelector(".nav__team");
const btnTestiM = document.querySelector(".nav__testimon");
const btnDownload = document.querySelector(".nav__download");

btnFeatures.addEventListener("click", function() {
    window.scroll({
        top:750,
        left:0,
        behavior:"smooth",
    });
});
btnWorks.addEventListener("click", function() {
    window.scroll({
        top: 1550,
        left: 0,
        behavior:"smooth",
    });
});
btnTeam.addEventListener("click", function() {
    window.scroll({
        top: 1900,
        left: 0,
        behavior:"smooth",
    });
});
btnTestiM.addEventListener("click", function() {
    window.scroll({
        top: 2585,
        left: 0,
        behavior:"smooth",
    });
});
btnDownload.addEventListener("click", function() {
    window.scroll({
        top: document.body.scrollHeight,
        left:0,
        behavior:"smooth",
    });
});