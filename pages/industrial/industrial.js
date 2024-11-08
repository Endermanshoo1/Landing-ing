const menuBtn = document.getElementById("menu-btn");
const navLinks = document.getElementById("nav-links");
const menuBtnIcon = menuBtn.querySelector("i");

menuBtn.addEventListener("click", () => {
  navLinks.classList.toggle("open");

  const isOpen = navLinks.classList.contains("open");
  menuBtnIcon.setAttribute("class", isOpen ? "ri-close-line" : "ri-menu-line");
});

navLinks.addEventListener("click", () => {
  navLinks.classList.remove("open");
  menuBtnIcon.setAttribute("class", "ri-menu-line");
});

const scrollRevealOption = {
  distance: "50px",
  origin: "bottom",
  duration: 1000,
};

// header container
ScrollReveal().reveal(".header__container p", {
  ...scrollRevealOption,
});

ScrollReveal().reveal(".header__container h1", {
  ...scrollRevealOption,
  delay: 500,
});

// about container
ScrollReveal().reveal(".about__image img", {
  ...scrollRevealOption,
  origin: "left",
});

ScrollReveal().reveal(".about__content .section__subheader", {
  ...scrollRevealOption,
  delay: 500,
});

ScrollReveal().reveal(".about__content .section__header", {
  ...scrollRevealOption,
  delay: 1000,
});

ScrollReveal().reveal(".about__content .section__description", {
  ...scrollRevealOption,
  delay: 1500,
});

ScrollReveal().reveal(".about__btn", {
  ...scrollRevealOption,
  delay: 2000,
});

// room container
ScrollReveal().reveal(".room__card", {
  ...scrollRevealOption,
  interval: 500,
});

// service container
ScrollReveal().reveal(".service__list li", {
  ...scrollRevealOption,
  interval: 500,
  origin: "right",
});


document.addEventListener("DOMContentLoaded", function () {  
  function animateCount(element, targetNumber, duration) {  
    let start = 0;  
    const stepTime = Math.abs(Math.floor(duration / targetNumber));  
    const timer = setInterval(function () {  
      start += 1;   
      element.innerHTML = start + (start === targetNumber ? "+" : "");   
      if (start === targetNumber) {  
        clearInterval(timer);  
      }  
    }, stepTime);  
  }  

  // Llama a la función de animación para cada uno de los elementos  
  animateCount(document.getElementById("experience-count"), 30, 2000);  
  animateCount(document.getElementById("completed-jobs-count"), 350, 2000);  
  animateCount(document.getElementById("happy-customers-count"), 600, 2000);  
});    

let currentSlide = 0;  
const totalSlides = document.querySelectorAll('.review-card').length;  

function showSlide(index) {  
    const slides = document.querySelectorAll('.review-card');  
    if (index >= totalSlides) {  
        currentSlide = 0; // Volver al principio  
    } else if (index < 0) {  
        currentSlide = totalSlides - 1; // Ir al final  
    } else {  
        currentSlide = index;  
    }  

    const carouselInner = document.querySelector('.carousel-inner');  
    const offset = -currentSlide * 101; // Mover el carrusel  
    carouselInner.style.transform = `translateX(${offset}%)`;  
}  

// Función para mover al siguiente slide automáticamente  
function nextSlide() {  
    showSlide(currentSlide + 1);  
}  

// Cambio automático cada 4 segundos  
setInterval(nextSlide, 2000);  

// Mostrar la primera diapositiva al cargar  
showSlide(currentSlide);  

window.onscroll = function() {  
  let scrollTop = document.documentElement.scrollTop || document.body.scrollTop;  
  let windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;  
  let scrollPercentage = (scrollTop / windowHeight) * 100;  

  document.getElementById('progressBar').style.width = scrollPercentage + '%';  
};  