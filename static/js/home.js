$(function() {
    const text = document.querySelector("#fancy");
    // console.log(text);
    const strText = text.textContent;
    const splitText = strText.split("");
    console.log(splitText);
    splitText[4] = " ";
    // console.log(splitText);
    text.textContent = "";
    for(let i = 0; i < splitText.length; i++){
        text.innerHTML += "<span>" + splitText[i] + "</span>"; 
    }

    let char = 0;
    let timer = setInterval(onTick, 50);

    function onTick() {
        const span = text.querySelectorAll('span')[char];
        span.classList.add('fade');
        char++;
        if(char === splitText.length) {
            complete();
            return;
        }
    }

    function complete() {
        clearInterval(timer);
        timer = null;
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
    }, 10000);

    $('.button a').on('click', function(e) {
        e.preventDefault();
        var $url = $(this).attr('href');
        window.open($url, '_blank');
    });

});
