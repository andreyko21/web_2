new Swiper('.our-partners', {
    loop: true,
    spaceBetween: 30,
    autoplay: {
        delay: 2000,
    },
    breakpoints: {
        1200: {
            slidesPerView: 4,
        },
        900: {
            slidesPerView: 3,
        },
        700: {
            slidesPerView: 2,
        }
    }
});

new Swiper('.season__watch', {
    watchOverflow: true,
    spaceBetween: 30,
    loop: true,
    autoplay: {
        delay: 2000,
    },
    breakpoints: {
        1000: {
            slidesPerView: 3,
        },
        600: {
            slidesPerView: 2,
        },
        300: {
            slidesPerView: 1,
        }
    }
});

new Swiper('.watchs-list', {
    watchOverflow: true,
    centeredSlides: true,
    slidesPerView: 2,
    loop: true,
    breakpoints: {
        600: {
            slidesPerView: 2,
        },
        300: {
            slidesPerView: 1,
        }
    }
});

const iconMenu = document.querySelector('.burger-menu');
if(iconMenu){
    const menuHeader = document.querySelector('.header');
    const menuBody = document.querySelector('.top-line');
    const menuBody2 = document.querySelector('.nav');
    iconMenu.addEventListener("click", function(e){
        document.body.classList.toggle('lock');
        iconMenu.classList.toggle('active');
        menuBody.classList.toggle('active');
        menuBody2.classList.toggle('active');
        menuHeader.classList.toggle('active');
    })
}



