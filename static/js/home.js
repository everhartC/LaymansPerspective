$(function() {
    const text = $(".fancy");
    const strText = text.text();
    const re = /\s*(?:;\r\n|\r|\n|$)\s*/;
    const splitText = strText.split(re);
    const newStr = shiftPop(splitText);
    const strArr = newStr.split('');
    text.text("");
    // console.log(splitText);
    // console.log(newStr);
    // console.log(strArr);
    // console.log(splitText);


    $.each(splitText, function(i, val) {
        $('#'+i).append("<span>" + val + "</span>");
    });
    console.log(splitText.length);
    
    let char = 0;
    let timer = setInterval(onTick, 50);
    // const span;


    // function onTick(){
    //     const span = $('.fancy').find('span')[char];
        // console.log(span);

        // span.addClass('fade');
        // // return console.log(span);
        // // span.classList.add('fade');
        // char++;
        // if(char === splitText.length){
        //     complete();
        //     return;
        // };
    // };
    
    // function complete() {
    //     clearInterval(timer);
    //     timer = null;
    // }














    function shiftPop(arr) {
        arr.shift();
        arr.pop();
        var newStr = arr.join('');
        newStr = newStr.split(' ');
        newStr = newStr.join('');
        return newStr;
    }
});
