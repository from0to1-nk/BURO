$(function () {

    //main
    const mainContent = new Swiper('.main-slider__content', {
        navigation: {
            nextEl: '.main-slider__prev',
            prevEl: '.main-slider__next'
        },

    });
    const mainImg = new Swiper('.main-slider__images', {
        slidesPerView: 1,
        spaceBetween: 30,
        lazy: true,
        navigation: {
            nextEl: '.s-button-prev',
            prevEl: '.s-button-next'
        },

    });

    mainContent.controller.control = mainImg;
    mainImg.controller.control = mainContent;

    $('.tariffs__wrapper .tariffs__tab').on('click', function (event) {
        var id = $(this).attr('data-id');
        $('.tariffs__wrapper').find('.tariffs__item').removeClass('active-tab').hide();
        $('.tariffs__wrapper .tariffs__tabs').find('.tariffs__tab').removeClass('active');
        $(this).addClass('active');
        $('#' + id).addClass('active-tab').fadeIn();
        return false;
    });
    //reviews

    var reviewsImages = new Swiper('.reviews-images', {
        slidesPerView: 1,
        spaceBetween: 30,
        lazy: true,
    });

    var reviewsContent = new Swiper('.reviews-content', {
        pagination: {
            el: '.swiper-pagination',
            type: 'fraction',
        },
        navigation: {
            nextEl: '.reviews-content__next',
            prevEl: '.reviews-content__prev',
        },
    });

    reviewsContent.controller.control = reviewsImages;
    reviewsImages.controller.control = reviewsContent;

    //design-tabs
    let jsTriggers = document.querySelectorAll('.design__tab');
    jsTriggers.forEach(function (trigger) {
        trigger.addEventListener('click', function () {
            var id = this.getAttribute('data-tab'),
                content = document.querySelector('.design__tab-item[data-tab="' + id + '"]'),
                activeTrigger = document.querySelector('.design__tab.active'),
                activeContent = document.querySelector('.design__tab-item.active-tab');

            activeTrigger.classList.remove('active'); // 1
            trigger.classList.add('active'); // 2

            activeContent.classList.remove('active-tab'); // 3
            content.classList.add('active-tab'); // 4
            let children = content.children;
            for (let item of children) {
                item.classList.remove('_active');
                item.style.opacity = '1';
            }
        });

    });




    $('.add-services__wrapper .add-services__tab').on('click', function (event) {
        var id = $(this).attr('data-id');
        $('.add-services__wrapper').find('.add-services__item').removeClass('active-tab').hide();
        $('.add-services__wrapper .add-services__tabs').find('.add-services__tab').removeClass('active');
        $(this).addClass('active');
        $('#' + id).addClass('active-tab').fadeIn(100);
        return false;
    });



    //choice

    var choise__slider = new Swiper('.choice__slider', {
        slidesPerView: 1,
        spaceBetween: 15,
        slidesPerGroup: 3,
        lazy: true,
        navigation: {
            nextEl: '.choice__slider-next',
            prevEl: '.choice__slider-prev ',
        },
        pagination: {
            el: '.choice__slider-pagination',
            clickable: true,
        },
        breakpoints: {
            1551: {
                slidesPerView: 3,
                spaceBetween: 55,
            },
            1200: {
                slidesPerView: 4,
                spaceBetween: 30,
            },
            601: {
                slidesPerView: 2,
            },

        }

    });
    var articles = new Swiper('.articles__slider', {
        slidesPerView: 1.2,
        spaceBetween: 10,
        freeMode: true,
        loop: false,
        lazy: true,
        scrollbar: {
            el: '.swiper-scrollbar',
            dragSize: 120,
            draggable: true,
            snapOnRelease: true,
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        breakpoints: {
            1350: {
                slidesPerView: 4.8,

            },
            800: {
                slidesPerView: 2.8,

            },
            501: {
                slidesPerView: 1.9,
                spaceBetween: 23,
            },
        }
    });
    var project = new Swiper('.project__slider', {
        slidesPerView: 'auto',
        spaceBetween: 5,
        freeMode: true,
        loop: false,
        scrollbar: {
            el: '.swiper-scrollbar',
            dragSize: 120,
            draggable: true,
            snapOnRelease: true,
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
    });

    //часто задоваемые вопросы табуляция
    $('.questions__item-title').on('click', function () {
        $('.questions__item-title').removeClass('open');
        $('.questions__item').removeClass('questions__item--active');
        $(this).addClass('open');
        $(this).parent().addClass('questions__item--active');
    });
    //сервис табуляция
    $('.services-tab__wrapper .services-tab').on('click', function (event) {
        var id = $(this).attr('data-id');
        $('.services-tab__wrapper').find('.services-tab__items').removeClass('active-tab').hide();
        $('.services-tab__wrapper .services-tabs').find('.services-tab').removeClass('active');
        $(this).addClass('active');
        $('#' + id).addClass('active-tab').fadeIn();
        return false;
    });

    //стилизация выбора города
    $('.header__city').styler();
    $('.main__checkbox').styler();
    $('.file-input').styler();

    ///звездный рейтинг
    $(".rateYo").rateYo({
        spacing: "10px",
        starWidth: "15px",
        readOnly: true,
        rating: 5,
        ratedFill: "#FFC700"
    });

    ////////появление бокового меню, left278 =>left0

    let all = document.querySelectorAll('.menu__btn');

    for (let i = 0; i < all.length; i++) {
        all[i].onclick = function () {
            document.querySelector('.nav__menu').classList.add('open');
            document.querySelector('.main-slider__inner').style.transform = 'translateX(130px)';
        };
    }

    try {
        document.querySelector('.nav-toggle').onclick = function () {
            document.querySelector('.nav__menu').classList.remove('open');
            document.querySelector('.main-slider__inner').style.transform = 'translateX(0)';

            document.querySelector('.services__left-menu').classList.remove('open');
            document.querySelector('.nav__menu').classList.remove('gray');

        }
    } catch {}


    if ($('.nav__menu').hasClass('open')) {
        $('.main-slider__inner').css({
            transform: 'translateX(279px)'
        });
    } else {}

    //drop-down menu
    $('.scroll-menu__btn').on('click', function () {
        element = $('.nav__top-list');
        display = element.css('display');
        if (display == 'none') {
            element.slideDown(400);
        }

        if (display == 'block') {
            element.slideUp(400);
        }
        return false
    });


    $('.services__menu-item').on('click', function () {

        element = $('.services__drop-menu');
        display = element.css('display');
        if (display == 'none') {
            element.slideDown(400);
        }

        if (display == 'block') {
            element.slideUp(400);
        }
        //return false
    });

    //появления бокового подменю
    $('.services__drop-item').on('click', function () {
        $('.services__left-menu').toggleClass('open');
        if ($('.services__left-menu').hasClass('open')) {
            $('.nav__menu').addClass('gray');
        } else {
            $('.nav__menu').removeClass('gray');
        }
    });

    //появление меню  при прокрутке
    $(window).on('scroll', function () {
        if ($(window).scrollTop() > 950) { // если прокрутка дошла до меню
            $('.scroll__top-menu').slideDown(400);
        } else {
            $('.scroll__top-menu').slideUp(400);
        }
    })

    //хлебные крошки при прокрутке
    const breadlink = document.querySelector(".scroll__breadcrumbs-link")

    function breadcrumbs(breadlink) {
        let bread = document.querySelector('.scroll__breadcrumbs');
        let scroll = Math.round(window.scrollY); //сколько документа проскроллено
        let menuHeight = document.querySelector('.scroll__top-menu').offsetHeight;
        if (scroll > (950 + menuHeight)) {
            bread.classList.add('fixed')
        } else if (scroll < (950 + menuHeight) && bread.classList.contains('fixed')) {
            bread.classList.remove('fixed')
        }
    }

    window.addEventListener('scroll', function () {

        if (breadlink) {
            breadcrumbs(breadlink)
        }

    });



    //////start project-page
    var swiperPage = new Swiper('.interier-page__slider', {
        direction: 'vertical',
        lazy: true,
        spaceBetween: 10,
        pagination: {
            el: '.project-pagination',
        },

        navigation: {
            nextEl: '.project-button-next',
            prevEl: '.project-button-prev',
        },

    });

    var swiperP = new Swiper('.main__slider', {
        direction: 'vertical',
        lazy: true,
        spaceBetween: 10,
        pagination: {
            el: '.project-pagination',
        },

        navigation: {
            nextEl: '.project-button-next',
            prevEl: '.project-button-prev',
        },

    });

    let mySliderAllSlides = document.querySelector('.project-slider__total');
    let mySliderCureentSlide = document.querySelector('.project-slider__current');


    //mySliderAllSlides.innerHTML = swiperP.slides.length;
    //чтобы просто показывало тотал слайдов

    swiperP.on('slideChange', function () {
        let currentSlide = ++swiperP.realIndex;
        if (currentSlide < 10) {
            mySliderCureentSlide.innerHTML = '0' + currentSlide;
        } else {
            mySliderCureentSlide.innerHTML = currentSlide;
        }

        if (currentSlide < swiperP.slides.length) {
            if (currentSlide < 10) {
                mySliderAllSlides.innerHTML = '0' + (currentSlide + 1);
            } else {
                mySliderAllSlides.innerHTML = currentSlide + 1;
            }

        } else if (currentSlide == swiperP.slides.length) {
            if (currentSlide < 10) {
                mySliderAllSlides.innerHTML = '0' + currentSlide;
            } else {
                mySliderAllSlides.innerHTML = currentSlide;
            }

        }
    })


    swiperP.on('slideChangeTransitionStart', function () {
        mySliderCureentSlide.setAttribute("style", "opacity:0; transition: all, 0.5s;")

    });

    swiperP.on('slideChangeTransitionEnd', function () {
        mySliderCureentSlide.setAttribute("style", "opacity:1; transition: all, 0.5s;")

    });

    //свайпер с фэенсибоксом

    var selector = '.main__slider-slide:not(.swiper-slide-duplicate)';
    //// фенсибокс не содержит дубликаты!!!!

    $().fancybox({
        selector: selector,
        backFocus: false
    });
    $(document).on('click', '.swiper-slide-duplicate', function (e) {
        var $slides = $(this)
            .parent()
            .children('.swiper-slide:not(.swiper-slide-duplicate)');

        $slides
            .eq(($(this).attr("data-swiper-slide-index") || 0) % $slides.length)
            .trigger("click.fb-start", {
                $trigger: $(this)
            });

        return false;
    });

    /////повесить на кнопку
    let $slidebox = $('.main__slider-slide:not(.swiper-slide-duplicate)');
    $('.swiper__button-loupe').click(function () {
        $.fancybox.open($slidebox);
    });

    ///отменяем переход по ссылке на картинку
    let main_slides = document.getElementsByClassName("swiper-slide");
    for (let i = 0; i < main_slides.length; i++) {
        main_slides[i].onclick = function () {
            return false;
        };
    }

    ///////////////////галерея interier__slider
    var selectorI = '.interier__slide:not(.swiper-slide-duplicate)';
    $().fancybox({
        selector: selectorI,
        backFocus: false
    });

    let $slideboxI = $('.interier__slide:not(.swiper-slide-duplicate)');

    $('.interier__button-loupe').click(function () {
        $.fancybox.open($slideboxI);
    });

    //////////////////////галерея holl-slider
    let $slideboxH = $('.holl-slide:not(.swiper-slide-duplicate)');
    var selectorH = '.holl-slide:not(.swiper-slide-duplicate)';
    $().fancybox({
        selector: selectorH,
        backFocus: false
    });
    $('.holl__button-loupe').click(function () {
        $.fancybox.open($slideboxH);
    });
    //////////////////////галерея interier-big__slider

    $('[data-fancybox="big-gallery"]').fancybox({});
    let $slideboxInterier = $('[data-fancybox="big-gallery"]');
    $('.interier-big__slider__button-loupe').click(function () {
        $.fancybox.open($slideboxInterier);
    });
    ///отменяем переход по ссылке на картинку
    let slideboxInterierItems = document.querySelectorAll('.interier-big__slider-img');

    for (let i = 0; i < slideboxInterierItems.length; i++) {
        slideboxInterierItems[i].onclick = function () {
            return false;
        };
    }


    ///massonry
    var $galery = $('.add-services__preview-inner').masonry({
        itemSelector: '.add-services__preview-item',
        columnWidth: 20,
        stamp: ".add-services__preview-text",
    });

    $galery.imagesLoaded().progress(function () {
        $galery.masonry('layout');
    });



    var $project__preview = $('.project__preview').masonry({
        itemSelector: '.project-item',
        columnWidth: '.project-item__size',
        percentPosition: true,
        gutter: 30
    });

    $('.project__preview').isotope({
        itemSelector: '.project-item',
        masonry: {
            columnWidth: '.project-item__size',
            gutter: 30
        }
    });

    $('.filter-button-group').on('click', '.filter', function () {
        var filterValue = $(this).attr('data-filter');
        $project__preview.isotope({
            filter: filterValue
        });
    });

    // filter functions

    $checkboxes = $('.main__checkbox');


    $checkboxes.change(function () {
        var filters = [];
        console.log(filters)
        $checkboxes.filter(':checked').each(function () {
            filters.push(this.value);
        });
        // ['.red', '.blue'] -> '.red, .blue'
        filters = filters.join(', ');
        $project__preview.isotope({
            filter: filters
        });

    });


    $project__preview.imagesLoaded().progress(function () {
        $project__preview.masonry('layout');
    });

    $('.preview__img-wrapper').fancybox({
        helpers: {
            overlay: {
                locked: false
            }
        }
    });



    /// questions__item delay
    function questionsAnimate() {
        let questions = document.querySelectorAll('.questions__item')
        let n = 0;
        for (let i = 0; i < questions.length; i++) {
            n = n + .2;
            questions[i].style.animationDelay = n + 's';
        }
    }
    questionsAnimate()


    //маска для инпутов

    $(".tel__input").mask("+7(999) 999-9999");

    //Валидация
    $("#choice-form").validate({
        rules: {
            tel: 'required',
            checkbox: 'required',

        },
        messages: {
            tel: "Пожалуйста введите номер телефона",
            checkbox: "Пожалуйста, подтвердите согласие на обработку данных"
        }
    });


    $("#project-form").validate({
        rules: {
            tel: 'required',
            name: 'required',

        },
        messages: {
            tel: "Введите корректный номер телефона",
            name: "Введите свое имя",

        },

    });

    $("#feedback__form").validate({
        rules: {
            tel: 'required',
            name: 'required',
            email: 'required'
        },
        messages: {
            tel: "Введите корректный номер телефона",
            name: "Введите свое имя",
            email: "Введите корректный e-mail"
        },

    });
    $(".popup__form").validate({
        rules: {
            tel: 'required',
            name: 'required',
            mail: 'required',
        },
        messages: {
            tel: "Введите корректный номер телефона",
            name: "Введите свое имя",

        },

    });

    try {
        /////чтобы краснели звездочки
        let input = document.querySelectorAll('.project-form__input');
        let circle = document.querySelectorAll('.project-form__label');
        let form = document.querySelector('#project-form');

        form.onsubmit = function () {
            for (let i = 0; i < input.length; i++) {
                if (input[i].classList.contains('error')) {
                    for (let r = 0; r < circle.length; r++) {
                        circle[r].style.background = '#FA5D5D'
                    }
                }
            }
        }
    } catch {}

    ////////////////////////////

    let row = document.querySelectorAll('.feedback__input-row');



    function checkInput() {
        for (let i = 0; i < row.length; i++) {

            if (row[i].querySelector('.feedback__input').value.length != 0) {
                row[i].classList.remove('empty_field');

            } else {
                row[i].classList.add('empty_field');

            }
        }
    }

    setInterval(() => {
        checkInput();
    }, );



    //////смена карточки при клике  stage__list-btn


    let double = document.querySelectorAll('.stage__list-btn');
    let div = document.querySelectorAll('.duble-item__number')
    for (let i = 0; i < double.length; i++) {
        double[i].onclick = function () {
            for (let r = 0; r < div.length; r++) {
                if (r < 9) {
                    div[r].innerHTML = '0' + (r + 1);
                } else {
                    div[r].innerHTML = r + 1
                }
            }
        }
    }




    $('.stage__list-btn').on('click', function () {
        $(this).parent().addClass('open');
        if ($(this).parent().hasClass('open')) {
            $(this).parent().find(".strage__list-duble-item").slideDown(400);
            //$(this).parent().find(".duble-item__number").html()
        }
    })

    $('.duble-item__btn').on('click', function () {
        $(this).parent().slideUp(400);
        $('.stages__list-item').removeClass('open');
    })


    ///появление меню фильтрации

    $('.portfolio-sort__btn').on('click', function () {
        element = $('.sort__menu');
        element.toggleClass('open');
        if (element.hasClass('open')) {
            element.slideDown(400);
        } else {
            element.slideUp(400);
        }

    })

    ///////////////////////
    $(".selectlink-control").click(function () {
        var $menu_popup = $(this).next();
        $menu_popup.slideToggle(200, function () {
            $('.selectlink ul').not($menu_popup).slideUp(200);
            if ($menu_popup.is(':hidden')) {
                $('body').removeClass('body_pointer');
            } else {
                $('body').addClass('body_pointer');
            }
        });
        return false;
    });

    $(document).on('click', function (e) {
        if (!$(e.target).closest('.selectlink').length) {
            $('body').removeClass('body_pointer');
            $('.selectlink ul').slideUp(200);
        }
    });




    //popup
    let popup = $('.popup');

    $('.request__btn').on('click', function () {
        $('.overlay, #request').fadeIn('.1s')
    });

    $('.question__btn').on('click', function () {
        $('.overlay-question, #question').fadeIn('.1s')
    });

    $('.bell__btn').on('click', function () {
        $('.overlay-bell, #bell').fadeIn('.1s')
    });

    $('.request__btn').on('click', function () {
        $('.overlay-reviews, #reviews-popup').fadeIn('.1s')
    });

    $('.price__popup-close').on('click', function () {
        $('.popup__overlay, .popup').fadeOut('.1s')
    });

    //rotate Up BURO
    try {
        var Emblem = {
            init: function (el, str) {
                var element = document.querySelector(el);
                var text = str ? str : element.innerHTML;
                element.innerHTML = '';
                for (var i = 0; i < text.length; i++) {
                    var letter = text[i];
                    var span = document.createElement('span');
                    var node = document.createTextNode(letter);
                    var r = (360 / text.length) * (i);
                    var x = (Math.PI / text.length).toFixed(0) * (i);
                    var y = (Math.PI / text.length).toFixed(0) * (i);
                    span.appendChild(node);
                    span.style.webkitTransform = 'rotateZ(' + r + 'deg) translate3d(' + x + 'px,' + y + 'px,0)';
                    span.style.transform = 'rotateZ(' + r + 'deg) translate3d(' + x + 'px,' + y + 'px,0)';
                    element.appendChild(span);
                    if (i >= 0 && i < 8) {
                        span.style.fontWeight = "700"
                    }
                }
            }
        };

        Emblem.init('.emblem');
    } catch {}

    $('.articles-buttons').click(function (event) {
        $('.articles-buttons').removeClass('active');
        $(this).addClass('active');
    });

    /////////////////

    var interierSmall = new Swiper(".interier-small__slider", {
        spaceBetween: 20,
        slidesPerView: 3,

        watchSlidesVisibility: true,
        watchSlidesProgress: true,
        breakpoints: {
            1401: {
                slidesPerView: 7,
                spaceBetween: 30,
            },
            1201: {
                spaceBetween: 20,
                slidesPerView: 5,
            },

        }
    });
    var interierBig = new Swiper(".interier-big__slider", {
        spaceBetween: 30,
        thumbs: {
            swiper: interierSmall,
        },
        pagination: {
            el: '.project-pagination',

        },
        navigation: {
            nextEl: '.project-button-next',
            prevEl: '.project-button-prev',
        },
    });






});