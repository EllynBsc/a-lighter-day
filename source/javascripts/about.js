

  $(document).ready(function() {
    $(window).on('scroll', function() {
        var st = $(this).scrollTop();

        $('#box-one').css({
            'transform': 'translateY('+ (st/2) +'px)'
        });
    });
});

