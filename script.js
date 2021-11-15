let heroSwiper = new Swiper('.heroSwiper', {
    slidesPerView: 1,
    spaceBetween: 0,
    breakpoints: {
        // when window width is <= 499px
        768: {
            slidesPerView: 1,
            spaceBetweenSlides: 30
        },
        // when window width is <= 999px
        1200: {
            slidesPerView: 2,
            spaceBetweenSlides: 40
        }
    },
    autoplay: {
      delay: 2500,
      disableOnInteraction: true,
    },
    loop: true,
    pagination: {
      el: ".pagination",
      clickable: true,
    }
  });

  






  jQuery(document).ready(function ($) {

    $('#checkbox').change(function(){
      setInterval(function () {
          moveRight();
      }, 3000);
    });
    
    var slideCount = $('#slider ul li').length;
    var slideWidth = $('#slider ul li').width();
    var slideHeight = $('#slider ul li').height();
    var sliderUlWidth = slideCount * slideWidth;
    
    $('#slider').css({ width: slideWidth, height: slideHeight });
    
    $('#slider ul').css({ width: sliderUlWidth, marginLeft: - slideWidth });
    
      $('#slider ul li:last-child').prependTo('#slider ul');
  
      function moveLeft() {
          $('#slider ul').animate({
              left: + slideWidth
          }, 200, function () {
              $('#slider ul li:last-child').prependTo('#slider ul');
              $('#slider ul').css('left', '');
          });
      };
  
      function moveRight() {
          $('#slider ul').animate({
              left: - slideWidth
          }, 200, function () {
              $('#slider ul li:first-child').appendTo('#slider ul');
              $('#slider ul').css('left', '');
          });
      };
  
      $('a.control_prev').click(function () {
          moveLeft();
      });
  
      $('a.control_next').click(function () {
          moveRight();
      });
  
  });    
  
