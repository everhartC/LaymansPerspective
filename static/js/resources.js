$(function() {
    $('.accordion').on('click', '.button', function(e) {
        e.preventDefault();
        $(this)
            .next().children()
            .not(':animated')
            .slideToggle();
    });
});