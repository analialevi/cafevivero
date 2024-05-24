// Menu hamburguesa para version mobile

document.addEventListener("DOMContentLoaded", function() {
    const hamburgerMenu = document.querySelector('.menu-hamburguesa');
    const navLinks = document.querySelector('.nav-links');
    hamburgerMenu.addEventListener('click', function() {
    navLinks.classList.toggle('active');
    });
});


// Carrusel

let slideIndex = 0;
showSlide(slideIndex);

function prevSlide() {
showSlide(slideIndex -= 1);
}

function nextSlide() {
showSlide(slideIndex += 1);
}

function showSlide(n) {
const slides = document.getElementsByClassName("carousel-item");
if (n >= slides.length) {slideIndex = 0}
if (n < 0) {slideIndex = slides.length - 1}
for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
}
slides[slideIndex].style.display = "block";
}

function autoSlide() {
nextSlide();
}

// Cambiar de imagen cada 5 segundos
setInterval(autoSlide, 5000);