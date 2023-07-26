let current = 0;
let total = $(".slide_wrapper .slide_item").length;

const slide = (item, idx) => {
  //item:next,prev/idx:current
  let i = current;
  if (idx > total) {
    i = 0;
    current = 0;
  } else if (idx < 0) {
    i = total - 1;
  }

  $(".slide_wrapper .slide_item").removeClass("active");
  $(".slide_wrapper .slide_item").eq(i).addClass("active");
};

const autoSlide = () => {
  let next = current;
  current = current + 1;
  slide(next, current);
};

$("#nextBtn").on("click", autoSlide);

$("#prevBtn").on("click", () => {
  let prev = current;
  current = current - 1;
  slide(prev, current);
});

setInterval(autoSlide, 3000);
