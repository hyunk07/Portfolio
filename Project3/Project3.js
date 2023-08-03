// 스크롤에 따른 nav 변화
$(window).on("scroll", () => {
  const slideBox = $("#slide_box").offset().top;
  console.log(slideBox);
  console.log(scrollY);

  if (scrollY > slideBox) {
    $("nav").addClass("active");
    $("#global_nav").css({ top: 80 });
  } else {
    $("nav").removeClass("active");
    $("#global_nav").css({ top: 150 });
  }
});

// 로고 클릭시 맨 위로 이동
$(".title_logo").on("click", () => {
  scrollTo({
    top: 0,
    behavior: "smooth",
  });
});


$("#global_nav a").each(function (idx) {
  // function 함수 사용시  this키워드는 내가 클릭한 그 a
  $(this).on("click", function (e) {
    e.preventDefault();

    const getArticle = $("article").eq(idx).offset().top - 80;
    scrollTo({
      top: getArticle,
      behavior: "smooth",
    });
  });
});

//모바일 토글버튼
$('.menu-toggle').click(function () {
  $(".nav").toggleClass("mobile-nav");
  $(this).toggleClass("is-active");
});



// 화살버튼클릭
//왼쪽 버튼, 이전버튼
$(".left_arrow").on("click", () => {
  $(".slidItem").last().prependTo(".slideWrapper");
});

//오른쪽 버튼, 다음버튼
$(".right_arrow").on("click", () => {
  $(".slidItem").first().appendTo(".slideWrapper");
});

//  원형버튼클릭
let currentIdx = 0;

$(".slideBtn li").on("click", (e) => {
  const target = $(e.target);
  const idx = target.index();

  $(".slideWrapper")
    .stop()
    .animate(
      {
        marginLeft: -100 * idx + "%",
      },
      700
    );

  $(".slideBtn li").removeClass("active");
  target.addClass("active");

  currentIdx = idx; //현재 인덱스에 내가 클릭한 인덱스 번호 대입
});

const autoSlide = () => {
  currentIdx = (currentIdx + 1) % 3; //0,1,2,3

  $(".slideWrapper")
    .stop()
    .animate(
      {
        marginLeft: -100 * currentIdx + "%",
      },
      700
    );

  // $('.slideBtn li').eq(currentIdx).addClass('.active');

  $(".slideBtn li")
    .eq(currentIdx)
    .addClass("active")
    .siblings()
    .removeClass("active");
};

let mainSlide = setInterval(autoSlide, 4000);

$(".info_right").hover(
  function () {
    clearInterval(mainSlide);
  },
  function () {
    mainSlide = setInterval(autoSlide, 3000);
  }
);

/* ----------exhibition---------- */
const mySwiper1 = new Swiper(".mySwiper1", {
  loop: true, // 무한 반복

  pagination: {
    // 하단 페이지네이션
    el: ".swiper-pagination",
    clickable: true,
    dynamicBullets: true,
  },

  navigation: {
    // 좌 우 화살표
    nextEl: ".mySwiper1 .swiper-button-next",
    prevEl: ".mySwiper1 .swiper-button-prev",
  },
});



var mySwiper2 = new Swiper(".mySwiper2", {
 loop: true,
  navigation: {
    nextEl: ".mySwiper2 .swiper-button-next",
    prevEl: ".mySwiper2 .swiper-button-prev",
  },
});
/* ------hanok------ */
var swiper3 = new Swiper(".mySwiper3", {
  slidesPerView: 1,
   spaceBetween: 10,
   breakpoints:{
      500: {
    slidesPerView: 4,
    spaceBetween: 30}},
  centeredSlides: true,
  navigation: {
    nextEl: ".mySwiper3 .swiper-button-next",
    prevEl: ".mySwiper3 .swiper-button-prev",
},
});

/* ---------------------------- a[href="#"] a값 제거---------------------------- */
$('a[href="#"]').on("click", (e) => e.preventDefault());