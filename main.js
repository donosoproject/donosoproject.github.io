
(function ($) {
  "use strict";

  var objeto = {
    m: function (e) {
      objeto.d();
      objeto.methods();
    },

    d: function (e) {
      (this._window = $(window)),
        (this._document = $(document)),
        (this._body = $("body")),
        (this._html = $("html"));
    },

    methods: function (e) {

       objeto.swiperJs();
       objeto.stickyHeader();
       objeto.odoMeter();

    },


    swiperJs: function () {
      $(document).ready(function () {
        var swiper = new Swiper(".testimonial-swiper", {
          // slidesPerView: 2,
          spaceBetween: 50,
          loop: true,
          navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
          },
          breakpoints: {
            0: {
              slidesPerView: 1,
            },
            800: {
              slidesPerView: 2,
            },
          },
        });
      });
      $(document).ready(function () {
        var swiper = new Swiper(".testimonial-swiper-v2", {
          slidesPerView: 2.5,
          grabCursor: true,
          spaceBetween: 30,
          centeredSlides: true,
          loop: true,
          pagination: {
            el: ".tmp-swiper-pagination",
            clickable: true,
          },
          autoplay: {
            delay: 2500,
            disableOnInteraction: false,
          },
          breakpoints: {
            0: {
              slidesPerView: 1,
              centeredSlides: true, 
            },
            767: {
              slidesPerView: 2,
              centeredSlides: true,
            },
          },
        });
      });

      $(document).ready(function () {
        var swiper = new Swiper(".project-details-swiper", {
          slidesPerView: 2,
          spaceBetween: 30,
          loop: true,
          navigation: {
            nextEl: ".project-swiper-button-next",
            prevEl: ".project-swiper-button-prev",
          },
          breakpoints: {
            0: {
              slidesPerView: 1,
            },
            500: {
              slidesPerView: 2,
            },
          },
        });
      });
      $(document).ready(function () {
        var swiper = new Swiper(".swiper-testimonials-2", {
          slidesPerView: 2,
          spaceBetween: 30,
          navigation: {
            nextEl: ".project-swiper-button-next",
            prevEl: ".project-swiper-button-prev",
          },
          loop: true,
          autoplay: {
            delay: 2500,
            disableOnInteraction: false,
          },
          breakpoints: {
            0: {
              slidesPerView: 1,
            },
            500: {
              slidesPerView: 2,
            },
          },
        });
      });
    },

    stickyHeader: function (e) {
      $(window).scroll(function () {
        if ($(this).scrollTop() > 150) {
          $(".header--sticky").addClass("sticky");
        } else {
          $(".header--sticky").removeClass("sticky");
        }
      });
    },

    odoMeter: function () {

      $(document).ready(function () {
        function isInViewport(element) {
          const rect = element.getBoundingClientRect();
          return (
            rect.top >= 0 &&
            rect.bottom <= (window.innerHeight || document.documentElement.clientHeight)
          );
        }

        function triggerOdometer(element) {
          const $element = $(element);
          if (!$element.hasClass('odometer-triggered')) {
            const countNumber = $element.attr('data-count');
            $element.html(countNumber);
            $element.addClass('odometer-triggered'); // Add a class to prevent re-triggering
          }
        }

        function handleOdometer() {
          $('.odometer').each(function () {
            if (isInViewport(this)) {
              triggerOdometer(this);
            }
          });
        }

        // Check on page load
        handleOdometer();

        // Check on scroll
        $(window).on('scroll', function () {
          handleOdometer();
        });

      });


    },



  };

  objeto.m();
})(jQuery, window);


// Back To Top style here
function updateDimensions() {
  windowHeight = window.innerHeight;
  documentHeight = document.documentElement.scrollHeight - windowHeight;
}

// Initialize dimensions
updateDimensions();

// Add resize event listener to update dimensions
window.addEventListener('resize', updateDimensions);




