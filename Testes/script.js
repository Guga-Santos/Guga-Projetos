const one = document.querySelector('.one');
const oneBtn = document.querySelector('#one');
const two = document.querySelector('.two');
const twoBtn = document.querySelector('#two');
const three = document.querySelector('.three');
const threeBtn = document.querySelector('#three');
const four = document.querySelector('.four');
const fourBtn = document.querySelector('#four');

oneBtn.addEventListener('click', () => {
    one.style.zIndex = 1
    two.style.zIndex = 0
    three.style.zIndex = 0
    four.style.zIndex = 0
})

twoBtn.addEventListener('click', () => {
    one.style.zIndex = 0
    two.style.zIndex = 1
    three.style.zIndex = 0
    four.style.zIndex = 0
})

threeBtn.addEventListener('click', () => {
    one.style.zIndex = 0
    two.style.zIndex = 0
    three.style.zIndex = 1
    four.style.zIndex = 0
})

fourBtn.addEventListener('click', () => {
    one.style.zIndex = 0
    two.style.zIndex = 0
    three.style.zIndex = 0
    four.style.zIndex = 1
})