function countDown8( secs, ele){
    var timer = 0;
    var element = document.getElementById(ele);
    // element.innerHTML = "Remaning: "+secs;
    $(element).css('visibility', 'hidden');
    secs--;

    timer = setTimeout('countDown8('+secs+', "'  +ele+'")', 1000);
    if(secs < 1){
        window.clearTimeout(timer);
        $(element).css('visibility', 'visible');
        timer = 0;
        sec = 0;
    }
}



// var counter = 0;
// var timeleft = 60 * 60;

// function convertSeconds(s){
//     var min = floor(s / 60);
//     var sec = s % 60;
//     return nf(min, 2)+':'+nf(sec, 2);
// }

// function setup(){
//     noCanvas();

//     var timer = select("#timer")
//     timer.html(convertSeconds(timeleft - counter));

//     function timeIt(){
//         counter++;
//         timer.html(convertSeconds(timeleft - counter));
//     }

//     setInterval(timeIt, 1000);
// }
