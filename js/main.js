jQuery(document).ready(function ($) {

   "use strict";

   /* -- Open Button -- */
   $('.open-btn').on('click', function () {
      $('.open-btn').addClass('hide');
      $('.fixed_menu').addClass('show');
   })

   /* -- Close Button -- */
   $('.close-btn').on('click', function () {
      $('.open-btn').removeClass('hide');
      $('.fixed_menu').removeClass('show');
   })

   /* -- Affix Toggle -- */
   var toggleAffix = function (affixElement, scrollElement, wrapper) {

      var height = affixElement.outerHeight(),
         top = wrapper.offset().top;

      if (scrollElement.scrollTop() >= 100) {
         wrapper.height(height);
         affixElement.addClass("affix");
      } else {
         affixElement.removeClass("affix");
         wrapper.height('auto');
      }

   };
   $('[data-toggle="affix"]').each(function () {
      var ele = $(this),
         wrapper = $('<div></div>');

      ele.before(wrapper);
      $(window).on('scroll resize', function () {
         toggleAffix(ele, $(this), wrapper);
      });

      // init
      toggleAffix(ele, $(window), wrapper);
   });

   /* -- Contact Form -- */
   if ($('#contact-form').length > 0) {
      $('#contact-form').submit(function () {

         var $form = $(this),
            $error = $form.find('.error-container'),
            action = $form.attr('action');

         $error.slideUp(750, function () {
            $error.hide();

            var $name = $form.find('.form-name'),
               $phone = $form.find('.form-phone'),
               $email = $form.find('.form-email'),
               $url = $form.find('.form-website'),
               $message = $form.find('.form-message');

            $.post(action, {
                  name: $name.val(),
                  phone: $phone.val(),
                  email: $email.val(),
                  url: $url.val(),
                  message: $message.val()
               },
               function (data) {
                  $error.html(data);
                  $error.slideDown('slow');

                  if (data.match('success') != null) {
                     $name.val('');
                     $phone.val('');
                     $email.val('');
                     $url.val('');
                     $message.val('');
                  }
               }
            );

         });
         return false;
      });
   }

   /* -- Testimonial Carousel -- */
   if ($('.testimonial-carousel').length > 0) {
      $('.testimonial-carousel').owlCarousel({
         items: 1,
         loop: true,
         nav: false,
         dots: true,
         smartSpeed: 900,
         autoplay: true,
      });
   }

   /* -- Home Slider Carousel -- */
   if ($('.home-slider-carousel').length > 0) {
      $('.home-slider-carousel').owlCarousel({
         items: 1,
         loop: true,
         nav: false,
         dots: true,
         animateOut: 'fadeOut',
         animateIn: 'fadeIn',
         mouseDrag: false,
         autoplay: true,
      });
   }

});