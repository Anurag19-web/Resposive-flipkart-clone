let fashionBox = document.querySelector("#fashion-box");
let drop1 = document.querySelector("#fashion-dropdown-1");
let drop2 = document.querySelector("#fashion-dropdown-2");

fashionBox.addEventListener("mouseover", ()=> {
    drop1.style.display = 'block';
    drop2.style.display = 'block';
})

document.querySelector('#electronic-box').addEventListener('mouseover', ()=> {
    document.querySelector("#electronic-dropdown-1").style.display = 'block';
    document.querySelector("#electronic-dropdown-2").style.display = 'block';
})

document.querySelector('#home-furniture-box').addEventListener('mouseover', ()=> {
    document.querySelector("#home-furniture-dropdown-1").style.display = 'block';
    document.querySelector("#home-furniture-dropdown-2").style.display = 'block';
})

document.querySelector('#beauty-toy-box').addEventListener('mouseover', ()=> {
    document.querySelector("#beauty-toy-dropdown-1").style.display = 'block';
    document.querySelector("#beauty-toy-dropdown-2").style.display = 'block';
})
