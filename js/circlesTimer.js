"use strict";
console.log(`hello from circlesTimer.js`);

const coffeeImages = document.getElementsByClassName('image-timer');
console.log(coffeeImages);

// handler function:
let counter = 0;
function coffeeImg() {
    for (let i = 0; i < coffeeImages.length; i++) {
        if (counter % 5 === 0) {
            coffeeImages[i].style['border-radius'] = '40%';
        }
    }
    counter ++;
}
let intervalId = setInterval(coffeeImg, 1000);
