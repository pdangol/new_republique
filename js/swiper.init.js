
//init Dots
let slider = document.querySelector('.swiper-container'),
   parentWrap = slider.parentNode,
   sliderDots = 'swiper-pagination',
   dotsContainer = document.createElement('div'),
   slides = document.querySelectorAll('.swiper-slide');

dotsContainer.className = sliderDots;
parentWrap.appendChild(dotsContainer);

//Init Swiper
var options = {
   direction: 'vertical',
   spaceBetween: 0,
   // dynamicBullets: true,
   // watchOverflow: true,
   parallax: true,
   speed: 700,
   // height: 1000,
   slidesPerView: 1,
   // autoplay: false,
   // sensitivity: 1,
   mousewheel: {
      invert: !0,
      releaseOnEdges: !0,
      forceToAxis: !0
   },
   allowTouchMove: false,
   // allowTouchMove: true,
   pagination: {
      el: '.' + sliderDots,
      clickable: !0,
   },
   on: {
      init: function () {
         animationStart();
      },
      transitionEnd: function () {
         animationStart();
      }
   },
}

function animationStart() {
   var othersChar = document.querySelectorAll('.swiper-slide .char');
   var otherWords = document.querySelectorAll('.swiper-slide .text span');
   var activeChar = document.querySelectorAll('.swiper-slide-active .char');
   var activeWord = document.querySelectorAll('.swiper-slide-active .text span');

   TweenMax.set(othersChar, {
      yPercent: +100,
      scaleY: 0
   });
   TweenMax.set(otherWords, {
      yPercent: -100
   });

   TweenMax.staggerTo(activeChar, 1.5, {
      yPercent: -100,
      scaleY: 1,
      ease: Power3.easeInOut
   }, 0.05);
   TweenMax.staggerTo(activeChar, 1.5, {
      scaleY: 1,
      delay: .3,
      ease: Power3.easeInOut
   }, 0.05);
   TweenMax.staggerTo(activeWord, 1.0, {
      delay: .5,
      yPercent: +100,
      ease: Power3.easeInOut
   });
}



Splitting();
var mySwiper = new Swiper(slider, options);