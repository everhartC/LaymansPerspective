$(function() {
    var $html = $('html');
    $html.attr('id', 'resourcesHtml');

    $('.booklink').on('click', function(e) {
        e.preventDefault();
        var $url = $(this).attr('href');
        window.open($url, '_blank');
    });
});