// NAVBAR TOGGLE
const $window = $(window); 
const $burgerMenu = $('.toggle-nav');
const $navUl = $('nav ul');

const toggleNav = function() {
    $navUl.slideToggle();
};

const adjustToggleEv = function() {
    $navUl.off('click');
    $burgerMenu.off('click');

    if (window.matchMedia('(max-width: 767px)').matches) {
        $burgerMenu.click(toggleNav);
        $navUl.click(toggleNav);
    }  else {
        $navUl.off('click');
        $burgerMenu.off('click');
    }
};

// on Load
adjustToggleEv();

// on Resize
$window.on('resize', function() {
    adjustToggleEv();
});

// SMOOTH SCROLL
$(document).ready(function() {
    $("#menu").on("click", "a", function(event) {
        event.preventDefault();
        let id = $(this).attr('href')
          , top = $(id).offset().top;
        $('body,html').animate({
            scrollTop: (top - 122)
        }, 1000);
    });
});

// OWL-CAROUSEL
$(document).ready(function() {
    $(".owl-carousel").owlCarousel({
        loop: true,
        margin: 10,
        autoplay: true,
        autoplayHoverPause: true,
        autoplayTimeout: 2000,
        responsive: {
            0: {
                items: 2,
            },
            540: {
                items: 3,
            },
            768: {
                items: 4,
            },
            992: {
                items: 5,
            }
        }
    });
});

// PHOTO SLIDER
let myIndex = 0;
carousel();

function carousel() {
    let i;
    let x = document.getElementsByClassName("mySlides");
    for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";
    }
    myIndex++;
    if (myIndex > x.length) {
        myIndex = 1
    }
    x[myIndex - 1].style.display = "block";
    setTimeout(carousel, 2000);
    // Change image every 2 seconds
}
