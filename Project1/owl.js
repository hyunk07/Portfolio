$(document).ready(function () {
    var owl = $('.ot1 .owl-carousel');

    owl.owlCarousel({
        nav: true,
        items: 1,                 // 한번에 보여줄 아이템 수
        loop: true,               // 반복여부
        margin: 35,               // 오른쪽 간격
        autoplay: true,           // 자동재생 여부
        autoplayTimeout: 1800,    // 재생간격
        autoplayHoverPause: true  //마우스오버시 멈출지 여부

    });

    $('.customNextBtn').click(function () {
        owl.trigger('.ot1 next.owl.carousel');
    })

    $('.customPrevBtn').click(function () {
        owl.trigger('.ot1 prev.owl.carousel', [300]);
    })

});



// ------------------
$(document).ready(function () {
    var owl = $('.ot2 .owl-carousel');

    owl.owlCarousel({
        nav: true,
        items: 1,                 // 한번에 보여줄 아이템 수
        loop: true,               // 반복여부
        margin: 35,               // 오른쪽 간격
        autoplay: true,           // 자동재생 여부
        autoplayTimeout: 1800,    // 재생간격
        autoplayHoverPause: true  //마우스오버시 멈출지 여부

    });

    $('.customNextBtn').click(function () {
        owl.trigger('.ot2 next.owl.carousel');
    })

    $('.customPrevBtn').click(function () {
        owl.trigger('.ot2 prev.owl.carousel', [300]);
    })

});