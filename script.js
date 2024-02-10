$(document).ready(function () {
    // Mouse events
    $('.container').on({
        mouseenter: function () {
            $('.card').stop().animate({
                top: '-90px'
            }, 'slow');
        },
        mouseleave: function () {
            $('.card').stop().animate({
                top: 0
            }, 'slow');
        }
    });

    // Touch events
    $('.container').on({
        touchstart: function () {
            $('.card').stop().animate({
                top: '-90px'
            }, 'slow');
        },
        touchend: function () {
            $('.card').stop().animate({
                top: 0
            }, 'slow');
        }
    });

    // Show love letter div when button is clicked
    $("#loveLetterButton").click(function(){
        $("#loveLetterDiv").fadeIn();
    });

    // Hide love letter div when close button is clicked
    $("#closeLoveLetterButton").click(function(){
        $("#loveLetterDiv").fadeOut();
    });
});
