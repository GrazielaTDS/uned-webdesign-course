function iniciar() {
    var slideIndex = 0;
    showCarrousel(slideIndex);
}

function showCarrousel(initialIndex) {

    var i;
    var slides = document.getElementsByClassName("carrousel");
    var dots = document.getElementsByClassName("dot");
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    initialIndex++;
    if (initialIndex > slides.length) { initialIndex = 1 }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[initialIndex - 1].style.display = "block";
    dots[initialIndex - 1].className += " active";
    setTimeout(showCarrousel,4000, initialIndex);
}
window.addEventListener('load', iniciar, false);