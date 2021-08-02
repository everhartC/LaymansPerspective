$(function() {
    // Allow expandable burger on mobile
    $('.navbar-burger').on('click', function() {
        $('.navbar-burger').toggle('is-active');
        $('.navbar-menu').toggle('is-active');
        $('.navbar-burger').toggle('open');
    });

});

