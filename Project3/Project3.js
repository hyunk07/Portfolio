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

$('.slideBtn li').on('click', e => {
   const target = $(e.target);
   const idx = target.index();

   $('.slideWrapper').stop().animate({
      marginLeft: -100 * idx + '%'
   }, 700);

   $('.slideBtn li').removeClass('active');
   target.addClass('active');

   currentIdx = idx; //현재 인덱스에 내가 클릭한 인덱스 번호 대입
})

const autoSlide = () => {
   currentIdx = (currentIdx + 1) % 3; //0,1,2,3

   $('.slideWrapper').stop().animate({
      marginLeft: -100 * currentIdx + '%'
   }, 700);

   // $('.slideBtn li').eq(currentIdx).addClass('.active');

   $('.slideBtn li').eq(currentIdx).addClass('active').siblings().removeClass('active')
}



let mainSlide = setInterval(autoSlide, 4000);

$('.info_right').hover(function () {
   clearInterval(mainSlide);
}, function () {
   mainSlide = setInterval(autoSlide, 3000);
});


// -----------------------

// 화살버튼클릭
//왼쪽 버튼, 이전버튼
$("docent_left_arrow").on("click", () => {
   $(".slidItem").last().prependTo(".gallery");
 });
 
 //오른쪽 버튼, 다음버튼
 $(".docent_right_arrow") .last().on("click", () => {
     $(".slidItem").first().appendTo(".gallery");
   });

/* ------------------ */
let i = 0;
function nextSlide() {
   i++;

   //i의 숫자가 슬라이드 이미지가 가진 숫자보다 커지면
   if (i >= $('.slideWrapper .slidItem').length) {
      i = 0; //다시 인덱스 번호 0으로 돌아와 처음 이미지가 보이게
   }

}
$('#nextBtn').on('click', nextSlide);



/* prevSlide */
function prevSlide() {
   i--;
   if (i < 0) {
      i = $('.slideWrapper .slidItem').length - 1;
   }

}
$('#prevBtn').on('click', prevSlide);






setInterval(nextSlide, 3000);




/* ------------------ */