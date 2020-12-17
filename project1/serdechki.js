'use strict';

const box = document.getElementById('box'),
      buttons = document.getElementsByTagName('button'),
      circles = document.getElementsByClassName('circle'),
      hearts = document.querySelectorAll('.heart'),
      oneHeart = document.querySelector('.heart'),
      wrapper = document.querySelector('.wrapper');

//box.style.backgroundColor = 'blue';
//box.style.width = '500px';

box.style.cssText = 'background-color: blue; width: 1000px';

buttons[1].style.borderRadius = '100%';
circles[0].style.backgroundColor = 'red';

//for (let i = 0; i < hearts.length; i++) {
//    hearts[i].style.backgroundColor = 'blue';
//}


hearts.forEach(item => {
    item.style.backgroundColor = 'blue';
});

const div = document.createElement('div');

div.classList.add('black');

circles[1].before(div);

div.innerHTML = "<h1>da dela</h1>";

div.insertAdjacentHTML('afterend', '<h2>hello</h2>');