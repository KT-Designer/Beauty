var swiper = new Swiper(".mySwiper", {
    // 自動播放
    autoplay: {
        delay: 1000,
        disableOnInteraction: false,
    },
    // 第一張與最後一張無縫連接
    loop: true,
    // 顯示數量
    slidesPerView: 5,
    spaceBetween: 30,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },

    navigation: {
        nextEl: ".swiper-next",
        prevEl: ".swiper-prev",
    },

    // 斷點
    breakpoints: {
        // when window width is >= 320px
        320: {
            slidesPerView: 2,
            spaceBetween: 20
        },
        // when window width is >= 480px
        768: {
            slidesPerView: 4,
            spaceBetween: 30
        },
        // when window width is >= 640px
        1024: {
            slidesPerView: 5,
            spaceBetween: 40
        }
    }

});