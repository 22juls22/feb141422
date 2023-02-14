const tl = new TimelineLite();
const block1 = document.querySelector('.block1');
const block2 = document.querySelector('.block2');
const shape = document.querySelector('.shape');
const header = document.querySelector('.header');
const flower = document.querySelector('.container');

tl.from(flower, 0.8, {
    autoAlpha:0,
    rotate: '120deg'
})

tl.from(block1, 0.9, {
    backgroundColor: "#999",
    y: '-100vh'
})
tl.from(block2, 0.6, {
    backgroundColor: "#999",
    y: '-100vh'
})

tl.from(shape, 1, {
    autoAlpha: 0,
    x: 500,
    rotate: () => {
        return Math.random()*200
    }
})

tl.from(header, 0.6, {
    autoAlpha:0,
    y: -20
})

const heart1 = document.querySelector('.heart1');
const heart2 = document.querySelector('.heart2');
const heart3 = document.querySelector('.heart3');
const heart4 = document.querySelector('.heart4');
const heart5 = document.querySelector('.heart5');

const item1 = document.querySelector('.item1');
const item2 = document.querySelector('.item2');
const item3 = document.querySelector('.item3');
const item4 = document.querySelector('.item4');
const item5 = document.querySelector('.item5');

const text1 = document.querySelector('.text1');
const text2 = document.querySelector('.text2');
const text3 = document.querySelector('.text3');
const text4 = document.querySelector('.text4');
const text5 = document.querySelector('.text5');

heart1.onclick = () =>{
    heart1.classList.toggle('is-active');
    item1.classList.toggle('is-active');
    text1.classList.toggle('is-active')
}
heart2.onclick = () =>{
    heart2.classList.toggle('is-active');
    item2.classList.toggle('is-active');
    text2.classList.toggle('is-active')
}
heart5.onclick = () =>{
    heart5.classList.toggle('is-active');
    item3.classList.toggle('is-active');
    text3.classList.toggle('is-active')
}
heart4.onclick = () =>{
    heart4.classList.toggle('is-active');
    item4.classList.toggle('is-active');
    text4.classList.toggle('is-active')
}
heart3.onclick = () =>{
    heart3.classList.toggle('is-active');
    item5.classList.toggle('is-active');
    text5.classList.toggle('is-active')
}