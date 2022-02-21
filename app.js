// nav bar icon toggle
function menuBarToggle() {
  var barIcon = document.getElementById("bar-icon");
  var mobileMenu = document.getElementById('mobileMenu');

  barIcon.classList.toggle("open"); // when click bar icon do these
  mobileMenu.classList.toggle('stickyMobileMenu');
}

// close mobile menu, when open a link
var barIcon = document.getElementById("bar-icon");
var mobileMenu = document.getElementById('mobileMenu');

mobileMenu.addEventListener('click', () => {
  barIcon.classList.toggle("open");
  mobileMenu.classList.remove('stickyMobileMenu'); // close menu 
});

// sticky navbar 
window.onscroll = function() {
  let poz = window.scrollY;
  let navbar = document.getElementById('navbar');
  let hero = document.getElementById('hero');
  //console.log(poz);
  if (poz > 30) {
    navbar.classList.add('stickyNavbar');
  } else {
    navbar.classList.remove('stickyNavbar');
  }
}

// image galery
var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
}

 // testimonials
var testimonials = document.getElementById("cards-container");
var testimonialsTopValue = 0;

setInterval(function () {
  testimonialsTopValue -= 250;
  if(testimonialsTopValue >= -1050) {
    testimonials.style.top = testimonialsTopValue + "px";
  } else {
    testimonialsTopValue = 0;
    testimonials.style.top = testimonialsTopValue + "px";
  }
}, 4000);

// frequently asked questons
function openAnswer(index) {
    var question = document.querySelector('.question' + index);
    question.parentNode.children[1].classList.toggle('answerActive');
    question.parentNode.children[0].children[1].children[0].classList.toggle('questionIcon1partAnimate');
    question.parentNode.children[0].children[1].children[1].classList.toggle('questionIcon2partAnimate');
}





