'use strict'

var slideIndex = 1;
showDivs(slideIndex);

function plusDivs(n) {
    showDivs(slideIndex += n);
}

function showDivs(n){
    var i;
    var x = document.getElementsByClassName("mySlides");
    if (n >  x.length) {slideIndex = 1} ;
    for(i = 0; i < x.length; i++){
        x[i].style.display= "none";
    }
    x[slideIndex-1].style.display = "block";

}

