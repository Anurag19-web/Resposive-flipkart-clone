document.querySelector('#mobile-box').addEventListener('mouseover', ()=> {
    // none to fashion
    document.querySelector("#fashion-dropdown-1").style.display = 'none';
    document.querySelector("#fashion-dropdown-2").style.display = 'none';
})


document.querySelector("#fashion-box").addEventListener("mouseover", ()=> {
    document.querySelector("#fashion-dropdown-1").style.display = 'block';
    document.querySelector("#fashion-dropdown-2").style.display = 'block';

    // none to electronic
    document.querySelector("#electronic-dropdown-1").style.display = 'none';
    document.querySelector("#electronic-dropdown-2").style.display = 'none';
})

document.querySelector('#electronic-box').addEventListener('mouseover', ()=> {
    document.querySelector("#electronic-dropdown-1").style.display = 'block';
    document.querySelector("#electronic-dropdown-2").style.display = 'block';

    // none to fashion
    document.querySelector("#fashion-dropdown-1").style.display = 'none';
    document.querySelector("#fashion-dropdown-2").style.display = 'none';

    // none to home-furniture
    document.querySelector("#home-furniture-dropdown-1").style.display = 'none';
    document.querySelector("#home-furniture-dropdown-2").style.display = 'none';
})

document.querySelector('#home-furniture-box').addEventListener('mouseover', ()=> {
    document.querySelector("#home-furniture-dropdown-1").style.display = 'block';
    document.querySelector("#home-furniture-dropdown-2").style.display = 'block';

    // none to electronic
    document.querySelector("#electronic-dropdown-1").style.display = 'none';
    document.querySelector("#electronic-dropdown-2").style.display = 'none';
})

document.querySelector('#appliences-box').addEventListener('mouseover', ()=> {
    // none to home-furniture
    document.querySelector("#home-furniture-dropdown-1").style.display = 'none';
    document.querySelector("#home-furniture-dropdown-2").style.display = 'none';
})

document.querySelector('#travel-box').addEventListener('mouseover', ()=> {
    //none to beauty-toy & more
    document.querySelector("#beauty-toy-dropdown-1").style.display = 'none';
    document.querySelector("#beauty-toy-dropdown-2").style.display = 'none';
})

document.querySelector('#beauty-toy-box').addEventListener('mouseover', ()=> {
    document.querySelector("#beauty-toy-dropdown-1").style.display = 'block';
    document.querySelector("#beauty-toy-dropdown-2").style.display = 'block';

    //none to two-wheeler
    document.querySelector('#two-wheeler-dropdown').style.display = 'none';
})

document.querySelector('#two-wheeler-box').addEventListener('mouseover', ()=> {
    //none to beauty-toy & more
    document.querySelector("#beauty-toy-dropdown-1").style.display = 'none';
    document.querySelector("#beauty-toy-dropdown-2").style.display = 'none';
})

document.querySelector('#two-wheeler-box').addEventListener('mouseover', ()=> {
    document.querySelector('#two-wheeler-dropdown').style.display = 'block';
})

let leftBtn = document.querySelector('#btn-left')
let rightBtn = document.querySelector('#btn-right');

leftBtn.addEventListener('click', ()=> {
    leftBtn.style.display = 'none';
    rightBtn.style.display = 'block'
})

rightBtn.addEventListener('click', ()=> {
    leftBtn.style.display = 'block';
    rightBtn.style.display = 'none';
})


// for beauty 

let leftBtnB = document.querySelector('#btn-left-beauty')
let rightBtnB = document.querySelector('#btn-right-beauty');

leftBtnB.addEventListener('click', ()=> {
    leftBtnB.style.display = 'none';
    rightBtnB.style.display = 'block'
})

rightBtnB.addEventListener('click', ()=> {
    leftBtnB.style.display = 'block';
    rightBtnB.style.display = 'none';
})


window.addEventListener('resize', () => {
    let screensize = window.innerWidth;
    if(screensize <= '750'){
    // console.log('mobile');
    document.querySelector('#fashion-dropdown').style.display = 'none';
    document.querySelector('#electronic-dropdown').style.display = 'none';
    document.querySelector('#home-furniture-dropdown').style.display = 'none';
    document.querySelector('#beauty-toy-dropdown').style.display = 'none';
}else{
    document.querySelector('#fashion-dropdown').style.display = 'flex';
    document.querySelector('#electronic-dropdown').style.display = 'flex';
    document.querySelector('#home-furniture-dropdown').style.display = 'flex';
    document.querySelector('#beauty-toy-dropdown').style.display = 'flex';
}
})

// nav
document.querySelector('.navbar').addEventListener('mouseover', ()=> {
    // none to fashion
    document.querySelector("#fashion-dropdown-1").style.display = 'none';
    document.querySelector("#fashion-dropdown-2").style.display = 'none';

    // none to electronic
    document.querySelector("#electronic-dropdown-1").style.display = 'none';
    document.querySelector("#electronic-dropdown-2").style.display = 'none';

    // none to home-furniture
    document.querySelector("#home-furniture-dropdown-1").style.display = 'none';
    document.querySelector("#home-furniture-dropdown-2").style.display = 'none';

    //none to beauty-toy & more
    document.querySelector("#beauty-toy-dropdown-1").style.display = 'none';
    document.querySelector("#beauty-toy-dropdown-2").style.display = 'none';

    //none to two-wheeler
    document.querySelector('#two-wheeler-dropdown').style.display = 'none';
})

// slide 

document.querySelector('#slide').addEventListener('mouseover', ()=> {
    // none to fashion
    document.querySelector("#fashion-dropdown-1").style.display = 'none';
    document.querySelector("#fashion-dropdown-2").style.display = 'none';

    // none to electronic
    document.querySelector("#electronic-dropdown-1").style.display = 'none';
    document.querySelector("#electronic-dropdown-2").style.display = 'none';

    // none to home-furniture
    document.querySelector("#home-furniture-dropdown-1").style.display = 'none';
    document.querySelector("#home-furniture-dropdown-2").style.display = 'none';

    //none to beauty-toy & more
    document.querySelector("#beauty-toy-dropdown-1").style.display = 'none';
    document.querySelector("#beauty-toy-dropdown-2").style.display = 'none';

    //none to two-wheeler
    document.querySelector('#two-wheeler-dropdown').style.display = 'none';

})

// product 
document.querySelector('#best-of-ele-main').addEventListener('mouseover', ()=> {
    // none to fashion
    document.querySelector("#fashion-dropdown-1").style.display = 'none';
    document.querySelector("#fashion-dropdown-2").style.display = 'none';

    // none to electronic
    document.querySelector("#electronic-dropdown-1").style.display = 'none';
    document.querySelector("#electronic-dropdown-2").style.display = 'none';

    // none to home-furniture
    document.querySelector("#home-furniture-dropdown-1").style.display = 'none';
    document.querySelector("#home-furniture-dropdown-2").style.display = 'none';

    //none to beauty-toy & more
    document.querySelector("#beauty-toy-dropdown-1").style.display = 'none';
    document.querySelector("#beauty-toy-dropdown-2").style.display = 'none';

    //none to two-wheeler
    document.querySelector('#two-wheeler-dropdown').style.display = 'none';

})

// ele-pro-slide 

let btn = document.querySelector('#btn-right');
let Lbtn = document.querySelector('#btn-left');
let ele = document.querySelector('#best-of-ele');


btn.addEventListener('click', ()=> {
    ele.style.right = '1%';
})

Lbtn.addEventListener('click', ()=> {
    ele.style.right = '-28%';
})

// 2nd 

let btn1 = document.querySelector('#btn-right-beauty');
let Lbtn2 = document.querySelector('#btn-left-beauty');

btn1.addEventListener('click', ()=> {
    console.log('hello');
    ele.style.right = '1%';
})