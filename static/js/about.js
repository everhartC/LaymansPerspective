$(function() {
    var $html = $('html');
    $html.attr('id', 'aboutHtml');

    var $body = $('body');
    $body.attr('id', 'aboutBody');
    $body.offset({top: $('.navbar').innerHeight()});

    // var $test = $('.test');
    // $test.height($('.navbar').innerHeight());

})