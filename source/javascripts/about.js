$(document).ready(function() {
  $(window).on('scroll', function() {
      var st = $(this).scrollTop();
      // if (st <= 800) {
        $('#box-one').css({
            'transform': 'translateY('+ (st/2) +'px)'
        });
      // }
      // if (st >= 800) {
        // $('#box-three').css({
        //   'transform': 'translateY('+ (st/2) +'px)'
        // });
      // }
  });
});

