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
    $('.container').height($window.height()/1.15);

    $('.hero-body').height($('.container').height()+20);

    $('.button a').on('click', function(e) {
        e.preventDefault();
        var $url = $(this).attr('href');
        window.open($url, '_blank');
    });

    $('.accordion').on('click', '#mailButtID', function(e) {
        e.preventDefault();
        let $form = $('.emaillist-form');
        $form.slideToggle();
    });

    // $('#post-form').submit(function(e){
    //     e.preventDefault();
    //     console.log('posted');
    // })

    // $('#post-form').submit(function(e){
    //     $.post('/addEmail/',
    //     $(this).serialize(), function(data){
    //         $('.add-email').html(data.message);
    //     });
    //     e.preventDefault();
    // });

    // function create_post() {
    //     console.log('create post is working')
    //     console.log($('#post-text').text())
    // };

    // This function gets cookie with a given name
    // function getCookie(name) {
    //     var cookieValue = null;
    //     if (document.cookie && document.cookie != '') {
    //         var cookies = document.cookie.split(';');
    //         for (var i = 0; i < cookies.length; i++) {
    //             var cookie = jQuery.trim(cookies[i]);
    //             // Does this cookie string begin with the name we want?
    //             if (cookie.substring(0, name.length + 1) == (name + '=')) {
    //                 cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
    //                 break;
    //             }
    //         }
    //     }
    //     return cookieValue;
    // }
    // var csrftoken = getCookie('csrftoken');

    // /*
    // The functions below will create a header with csrftoken
    // */

    // function csrfSafeMethod(method) {
    //     // these HTTP methods do not require CSRF protection
    //     return (/^(GET|HEAD|OPTIONS|TRACE)$/.test(method));
    // }
    // function sameOrigin(url) {
    //     // test that a given url is a same-origin URL
    //     // url could be relative or scheme relative or absolute
    //     var host = document.location.host; // host + port
    //     var protocol = document.location.protocol;
    //     var sr_origin = '//' + host;
    //     var origin = protocol + sr_origin;
    //     // Allow absolute or scheme relative URLs to same origin
    //     return (url == origin || url.slice(0, origin.length + 1) == origin + '/') ||
    //         (url == sr_origin || url.slice(0, sr_origin.length + 1) == sr_origin + '/') ||
    //         // or any other URL that isn't scheme relative or absolute i.e relative.
    //         !(/^(\/\/|http:|https:).*/.test(url));
    // }

    // $.ajaxSetup({
    //     beforeSend: function(xhr, settings) {
    //         if (!csrfSafeMethod(settings.type) && sameOrigin(settings.url)) {
    //             // Send the token to same-origin, relative URLs only.
    //             // Send the token only if the method warrants CSRF protection
    //             // Using the CSRFToken value acquired earlier
    //             xhr.setRequestHeader("X-CSRFToken", csrftoken);
    //         }
    //     }
    // });
});
