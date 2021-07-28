$(function() {
    var $fname = $("#fname");
    var $lname = $("#lname");

    let timer = setInterval(onTick, 50);

    function onTick() {
        $fname.addClass('fade');
        $lname.addClass('fade');
        complete();
        return;
    }

    function complete() {
        clearInterval(timer);
        timer=null;
    }

    var $html = $('html');
    $html.attr('id', 'homeHtml');

    var $body = $('body');
    $body.attr('id', 'htmlBody');

    $('#reviewCol .card:gt(0)').hide();
    setInterval(function() {
        $('#reviewCol .card:first')
        .fadeOut(2000)
        .next()
        .fadeIn(2000)
        .end()
        .appendTo('#reviewCol');
    }, 15000);

    var $window = $(window);
    
    // if ($window.height() < 700){
    //     $('.container').height("850px");
    // } else if ($window.height() < 900) {
    //     $('.container').height("850px");
    // } else if ($window.height() > 900) {
    //     $('.container').height("900px");
    // };
    $('.container').height($window.height()/1.1);

    console.log($window.height());

    $('.button a').on('click', function(e) {
        e.preventDefault();
        var $url = $(this).attr('href');
        window.open($url, '_blank');
    });

});
