$(function() {
    $('.accordion').on('click', '.button', function(e) {
        e.preventDefault();
        $(this)
            .next().children()
            .not(':animated')
            .slideToggle();
    });

    var $html = $('html');
    $html.attr('id', 'resourcesHtml');

    $('.booklink').on('click', function(e) {
        e.preventDefault();
        var $url = $(this).attr('href');
        window.open($url, '_blank');
    });
});