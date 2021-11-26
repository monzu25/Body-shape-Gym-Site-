let menu = document.querySelector('#menu-btn');
let navbar = document.querySelector('.header .navbar');

menu.onclick = () => {
    menu.classList.toggle('fa-times');
    navbar.classList.toggle('active');
};

window.onscroll = () => {
    menu.classList.remove('fa-times');
    navbar.classList.remove('active');
};


var swiper = new Swiper(".home-slider", {
    spaceBetween: 20,
    effect: "fade",
    grabCursor: true,
    loop: true,
    centeredSlides: true,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
});

var swiper = new Swiper(".review-slider", {
    spaceBetween: 20,
    grabCursor: true,
    loop: true,
    autoplay: {
        delay: 3000,
        disableOnInteraction: false,
    },
    breakpoints: {
        0: {
            slidesPerView: 1,
        },
        600: {
            slidesPerView: 2,
        },
    },
});


var swiper = new Swiper(".blogs-slider", {
    spaceBetween: 20,
    grabCursor: true,
    loop: true,
    autoplay: {
        delay: 7500,
        disableOnInteraction: false,
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    breakpoints: {
        0: {
            slidesPerView: 1,
        },
        768: {
            slidesPerView: 2,
        },
        991: {
            slidesPerView: 3,
        },
    },
});

const monthly = document.getElementById('monthly')
const yearly = document.getElementById('yearly')

if (monthly.onclick()) {
    alert('this is monthly')
}
else {
    alert('yearly')
}


var slideIndex = 0;
showSlides();
function showSlides() {
    var i;
    var slides = document.getElementsByClassName("swiper-slide");
    var dots = document.getElementsByClassName("swiper-pagination");
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex > slides.length) { slideIndex = 1 }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
    setTimeout(showSlides, 2000); // Change image every 2 seconds
}