$( document ).ready(function() {
  $(".wrap-fade").hover(
    function () {
      $(this).find("img").addClass("fading");
    },
    function () {
      $(this).find("img").removeClass("fading");
    }
  );
});


var yourNavigation = $("#navbar");
    yourHeader = $('.upperHeader').height();

$(window).scroll(function() {
  if( $(this).scrollTop() > yourHeader ) {
    yourNavigation.addClass('sticky');
    $('#logoSm').fadeIn("slow");
  } else {
    yourNavigation.removeClass('sticky');
    $('#logoSm').fadeOut();
  }
});
