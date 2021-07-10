$(function() {
    $('.booklink').on('click', function(e) {
        e.preventDefault();
        window.open($(this).attr("href"), "_blank");
    });

    var $content = $('.dropdown-content');
    $('.dropdown').on('click', function() {
        if ($content.css('display') == 'none') {
            $content.css('display', 'block');
        } else {
            $content.hide();
        }
    })
    console.log($content);
});