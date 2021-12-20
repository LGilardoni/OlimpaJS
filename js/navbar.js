// Scruikk dek navbar
$(function () {
    $(window).on('scroll', function () {
        if ($(window).scrollTop() >= 560) {
            $('.navbar').addClass('active');
        } 
        else if ($(window).scrollTop() > 560 ) {
            $('.navbar').addClass('active');
        } else {
            $('.navbar').removeClass('active');
        }
    });
});
