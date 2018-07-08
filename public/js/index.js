// NAVBAR TOGGLE
const $navUl = $('nav ul');

function toggleNav() {
    $navUl.slideToggle();
}

// SMOOTH SCROLL
$(document).ready(function(){
	$("#menu").on("click", "a", function (event) {
		event.preventDefault();
		let id  = $(this).attr('href'),
            top = $(id).offset().top;
        $('body,html').animate({scrollTop: (top - 122)}, 1000);
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


// let sliderImages = document.querySelectorAll(".slide"),
//   arrowLeft = document.querySelector("#arrow-left"),
//   arrowRight = document.querySelector("#arrow-right"),
//   current = 0;

// // Clear all images
// function reset() {
//   for (let i = 0; i < sliderImages.length; i++) {
//     sliderImages[i].style.display = "none";
//   }
// }

// // Init slider
// function startSlide() {
//   reset();
//   sliderImages[0].style.display = "block";
// }

// // Show prev
// function slideLeft() {
//   reset();
//   sliderImages[current - 1].style.display = "block";
//   current--;
// }

// // Show next
// function slideRight() {
//   reset();
//   sliderImages[current + 1].style.display = "block";
//   current++;
// }

// // Left arrow click
// arrowLeft.addEventListener("click", function() {
//   if (current === 0) {
//     current = sliderImages.length;
//   }
//   slideLeft();
// });

// // Right arrow click
// arrowRight.addEventListener("click", function() {
//   if (current === sliderImages.length - 1) {
//     current = -1;
//   }
//   slideRight();
// });

// startSlide();
