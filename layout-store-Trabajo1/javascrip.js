var slideIndex = 1;

function iniciar() {
    var carrouselIndex = 0;
    showCarrousel(carrouselIndex);

    showSlides();
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

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlide-article");
  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";  
  }
  slides[slideIndex-1].style.display = "block";  
}

window.addEventListener('load', iniciar, false);