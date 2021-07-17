//declaring available colors as an Array
const colors = ['Red', 'Orange', 'Yellow', 'Green', 'Blue', 'Indigo', 'Violet'];

//
const color = document.querySelector('.color');
const btn = document.querySelector('#btn');


btn.addEventListener('click', (e) => {
    const randomColor = getRandomColor();
    document.querySelector('.main-body').style.backgroundColor = colors[randomColor];
    color.textContent = colors[randomColor];
    color.style.color = colors[randomColor];
})

function getRandomColor() {
    return Math.floor(Math.random() * colors.length)
}

console.log(colors[randomColor])