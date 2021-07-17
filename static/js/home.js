$(function() {
    const text = document.querySelector("#fancy");
    // console.log(text);
    const strText = text.textContent;
    const splitText = strText.split("");
    console.log(splitText);
    splitText[4] = "  ";
    console.log(splitText);
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
















    // const text = $(".fancy");
    // const strText = text.text();
    // const re = /\s*(?:;\r\n|\r|\n|$)\s*/;
    // const splitText = strText.split(re);
    // const newStr = shiftPop(splitText);
    // const strArr = newStr.split('');
    // text.text("");
    // console.log(splitText);
    // console.log(newStr);
    // console.log(strArr);
    // console.log(splitText);


    // $.each(splitText, function(i, val) {
    //     $('#'+i).append("<span>" + val + "</span>");
    // });
    // console.log(splitText.length);
    
    // let char = 0;
    // let timer = setInterval(onTick, 50);
    // const span;


    // function onTick(){
    //     const span = $('.fancy').find('span')[char];
    //     console.log(span);

    //     span.addClass('fade');
    //     // return console.log(span);
    //     // span.classList.add('fade');
    //     char++;
    //     if(char === splitText.length){
    //         complete();
    //         return;
    //     };
    // };
    
    // function complete() {
    //     clearInterval(timer);
    //     timer = null;
    // }
    
    

    
});
