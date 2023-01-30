function openMenu(){
    $(".nav-menu").animate({width: '100%'}, 400);
    $(".nav-menu-content").delay(400).fadeIn();
}

function closeMenu(){
    $(".nav-menu").animate({width: '0'}, 400);
    $(".nav-menu-content").fadeOut(100);
}