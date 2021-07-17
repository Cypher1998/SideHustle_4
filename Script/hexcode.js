const color = document.querySelector('.color');
const btn = document.querySelector('#btn');


const numbers = "0123456789";
const alphabets = "abcdef";


function getRandomNumber() {
    return numbers[Math.floor(Math.random() * numbers.length)]
}
    //console.log(getRandomNumber()) -- 

function getRandomAlphabet() {
    return alphabets[Math.floor(Math.random() * alphabets.length)]
}
    //console.log(getRandomAlphabet())

function getRandom() {
    let arr = [];
    arr.push(getRandomNumber());
    arr.push(getRandomAlphabet());
    return arr[Math.floor(Math.random() * arr.length)]
}

btn.addEventListener('click', (e) =>{
    let hex = "#";
    for(let i=0; i<6; i++) {
    hex += getRandom();
    }
        //console.log(hex)
    document.querySelector('.main-body').style.backgroundColor = hex;
    color.textContent = hex;
    color.style.color = hex;
})
