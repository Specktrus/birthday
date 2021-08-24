/*
countdown script
*/

var update = setInterval(function(){
    var today = new Date();
    var birthday = new Date(today.getFullYear(), 1, 14);

    if(today.getTime() > birthday.getTime()) { 
        birthday.setFullYear(today.getFullYear() + 1);
    }

    var time = birthday.getTime() - today.getTime();    // miliseconds
    var days = Math.floor(time / (1000 * 60 * 60 * 24));
    var hours = Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((time % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((time % (1000 * 60)) / 1000);

    // update values
    document.getElementById("days").textContent = fixTime(days);
    document.getElementById("hours").textContent = fixTime(hours);
    document.getElementById("mins").textContent = fixTime(minutes);
    document.getElementById("secs").textContent = fixTime(seconds);
}, 1000);

const fixTime = (time) => time < 10 ? '0' + time : time;   
