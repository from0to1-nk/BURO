$(function () {


    //анимируем


    $(window).on('scroll', function () {
        if ($(window).scrollTop() > 5) {
            $('.main-slider__wrapper').addClass('toTop');
            $('.main-slider__images').addClass('toTop');
            $('.order').addClass('toTop');
        } else {

        }
    })


    // //вычисляем координаты элемента

    function offset(el) {
        var rect = el.getBoundingClientRect(),
            scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
            scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        return {
            top: rect.top + scrollTop,
            left: rect.left + scrollLeft
        }
    }


    const animItems = document.querySelectorAll('._anim-items');


    if (animItems.length > 0) {
        window.addEventListener('scroll', animOnScroll)

        function animOnScroll() {
            for (let i = 0; i < animItems.length; i++) {
                const animItem = animItems[i];
                const animItemOffset = offset(animItem).top;
                let scroll = Math.round(window.scrollY);
                let bottom = document.documentElement.clientHeight + scroll;
                if ((bottom - animItemOffset) < 500 && (bottom - animItemOffset) > 300) {
                    animItem.classList.add('_active');
                } else if (!animItem.classList.contains('_anim-no-hide')) {
                    animItem.classList.remove('_active');
                }

            }
        }
    }

    //чтобы после перезагрузки на середине сайта не отрабатывала анимация при скролле снизу вверх

    window.onload = function () {
        document.body.classList.add('loaded_hiding');
        window.setTimeout(function () {
            document.body.classList.add('loaded');
            document.body.classList.remove('loaded_hiding');
        }, 500);
        const animItems = document.querySelectorAll('._anim-items');

        for (let i = 0; i < animItems.length; i++) {
            let animItem = animItems[i];
            const animItemOffset = offset(animItem).top;
            let scroll = Math.round(window.scrollY);
            let bottom = document.documentElement.clientHeight + scroll;

            if ((bottom - animItemOffset) > 100) {
                animItem.style.opacity = '1';
                animItem.classList.add('_active')

            }

        }
    };


    //анимация при которой удетают объекты со страницы если расстояние низа объекта от начала документа минус число проскролленых пикселей дает высоту объекта или меньше

    function topAnimation() {
        let scroll = Math.round(window.scrollY); //сколько документа проскроллено

        for (let i = 0; i < animItems.length; i++) {
            const animItem = animItems[i];
            const animItemHeight = animItem.offsetHeight;
            const animItemOffset = offset(animItem).top;

            if ((animItemOffset + animItemHeight) - scroll <= (animItemHeight / 2)) {
                animItem.classList.add('_animate-away');
            }

        }

    }

    window.addEventListener('scroll', topAnimation)






})