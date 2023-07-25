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
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});
/* ----------docent---------- */
const mySwiper2 = new Swiper(".mySwiper2", {
  loop: true,
  pagination: {
    // 하단 페이지네이션
    el: ".mySwiper2 .swiper-pagination",
    clickable: true,
  },
  centeredSlides: true,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
});
