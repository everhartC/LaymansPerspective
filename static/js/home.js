$(function() {
    var $sec = $('section');

    $sec.css('transform', 'translateY(-100%');
    $sec.animate({transform: '+=transformY(100%)'});
});
