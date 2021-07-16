var counter = 0;
var x = document.querySelector('.count');

function mycounter(value) {
    if(value=="increase"){
        counter++;
        x.innerHTML = counter;
    } else if(value=="decrease") {
        counter--;
        x.innerHTML = counter;
    } else {
        counter = 0;
        x.innerHTML = counter;
    }
};