// Scruikk dek navbar
$(function () {
    $(window).on('scroll', function () {
        if (($(window).scrollTop() >= 560 ) && (localStorage.getItem("dark-mode") === "false")) {
            $('.navbar').addClass('active');
            $('.navbar').removeClass('nav-dark');
        } 
        else if (($(window).scrollTop() > 560 ) && (localStorage.getItem("dark-mode") === "true")) {
            $('.navbar').addClass('active');
        } else {
            $('.navbar').removeClass('active');
        }
    });
});
