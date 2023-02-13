function openMenu(){
    $(".nav-menu").animate({width: '100%'}, 400);
    $(".nav-menu-content").delay(400).fadeIn();
}

function closeMenu(){
    $(".nav-menu").animate({width: '0'}, 400);
    $(".nav-menu-content").fadeOut(100);
}

function navMenu1(){ closeMenu(); scrollTo("#inicio"); }
function navMenu2(){ closeMenu(); scrollTo("#sobre"); }
function navMenu3(){ closeMenu(); scrollTo("#servicos"); }
function navMenu4(){ closeMenu(); scrollTo("#endereco"); }
function agendar(){  closeMenu(); scrollTo("#agendar"); }

let slideIndex = 0;
showSlides();

function showSlides() {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}
  slides[slideIndex-1].style.display = "block";
  setTimeout(showSlides, 5000); // Change image every 2 seconds
}