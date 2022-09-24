new Swiper('.our-partners', {
    loop:true,
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

new Swiper('.season__watch',{
    watchOverflow: true,
    centeredSlides: true,
    slidesPerView: 3,
    spaceBetween: 30,
    loop:true,
    autoplay: {
        delay: 2000,
    }
});

    new Swiper('.watchs-list',{
        watchOverflow: true,
        centeredSlides: true,
        slidesPerView: 3,
        loop:true,
    });



