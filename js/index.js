// Your code goes here
const NavBar = document.querySelector('nav');


NavBar.addEventListener('mouseover', event => {
    event.target.style.color = 'red';
    setTimeout(function() {
        event.target.style.color = 'black';
    }, 700);
}, false);

const BodyAlert = document.querySelector('body');

BodyAlert.addEventListener('keydown', event => {
    event.target.style.backgroundColor = 'green';
    setTimeout(function() {
        event.target.style.color = 'red';
    }, 1000)
});

const weeee = document.querySelector('.Img1');
let scale = 1;
weeee.addEventListener('wheel', event => {
    event.preventDefault();
    scale += event.deltaY * -0.01;
    scale = Math.min(Math.max(.125, scale), 4);
    weeee.style.transform = `scale(${scale})`;
})

const Window = document.querySelector('.Img1');
Window.addEventListener('load', event => {
    alert('Webpage has loaded!')
})

const NavBar2 = document.querySelector('header');
NavBar2.addEventListener('focus', event => {
    event.target.textContent = 'MUHAHA';
}, true);

// const ResizeWindow = document.querySelector('window');
window.addEventListener('resize', event => {
    alert('OMG IT RESIZED!!!')
})


// const Scrolling = document.querySelector('p');
window.addEventListener('contextmenu', e => {
    e.preventDefault();
})

const Large = document.querySelector('.btn');
Large.addEventListener('dblclick', event => {
    event.target.textContent = 'FAKE!'
});