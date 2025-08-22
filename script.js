window.onload = function () {

let who = ['The dog', 'My grandma', 'The mailman', 'My bird'];
let action = ['ate', 'peed', 'crushed', 'broke'];
let what = ['my homework', 'my phone', 'the car'];
let when = ['before the class', 'when I was sleeping', 'while I was exercising', 'during my lunch', 'while I was praying'];

function getRandomElement(array){
    return array[Math.floor(Math.random() * array.length)];
}

let excuse = 
    getRandomElement(who) + " " +
    getRandomElement(action) + " " +
    getRandomElement(what) + " " + 
    getRandomElement(when) + "." ;
console.log(excuse);

document.getElementById("excuse").innerHTML = excuse;
};
