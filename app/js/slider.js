$(function () {


    $('[data-fancybox="big-gallery"]').fancybox({});
    let $slideboxInterier = $('[data-fancybox="big-gallery"]');
    $('.interier-big__slider__button-loupe').click(function () {
        $.fancybox.open($slideboxInterier);
    });

    let slideboxInterierItems = document.querySelectorAll('.interier-big__slider-img');

    for (let i = 0; i < slideboxInterierItems.length; i++) {
        slideboxInterierItems[i].onclick = function () {
            return false;
        };
    }

});