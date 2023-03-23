let text = document.querySelector('#text');
let left1 = document.querySelector('.left1');
let right1 = document.querySelector('.right1');
let grass = document.querySelector('.gress');
let left2 = document.querySelector('left2');
let right2 = document.querySelector('right2');

window.addEventListener('scroll', () => {

    let value = window.scrollY;

    text.style.marginTop = value * 2.5 + 'px'
    left1.style.left = value * -1 + 'px';
    right1.style.left = value * 1 + 'px';
    left2.style.left = value * 0.5 + 'px';
    right2.style.left = value * -0.5 + 'px';
});