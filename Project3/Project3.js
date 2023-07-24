// 화살버튼클릭
  //왼쪽 버튼, 이전버튼
  $('.btn_group li:first-child').on('click', () => {
    $('.gallery li').last().prependTo('.gallery ');
 });

 //오른쪽 버튼, 다음버튼
 $('.btn_group li').last().on('click', () => {
    $('.gallery li').first().appendTo('.gallery');
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



let mainSlide = setInterval(autoSlide, 3000);

$('.info_right').hover(function () {
   clearInterval(mainSlide);
}, function () {
   mainSlide = setInterval(autoSlide, 3000);
});