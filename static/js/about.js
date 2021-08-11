$(function() {
    var $html = $('html');
    $html.attr('id', 'aboutHtml');

    $('.hero').offset({top: $('.navbar').innerHeight(), left: 0});
    console.log($('.hero').position());
    console.log($('.hero').offset());
})