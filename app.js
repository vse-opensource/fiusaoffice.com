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