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
document.querySelector('.best-of-ele-main').addEventListener('mouseover', ()=> {
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
let ele = document.querySelector('.best-of-ele'); 


btn.addEventListener('click', ()=> {
    ele.style.right = '1%';
})

Lbtn.addEventListener('click', ()=> {
    ele.style.right = '-25%';
})

// 2nd 

let btn1 = document.querySelector('#btn-right-beauty');
let Lbtn1 = document.querySelector('#btn-left-beauty');
let beauty = document.querySelector('.best-of-beauty');

btn1.addEventListener('click', ()=> {
    beauty.style.right = '1%';
})

Lbtn1.addEventListener('click', ()=> {
    beauty.style.right = '-25%';
})

// 3rd

let btn2 = document.querySelector('#btn-right-collection');
let Lbtn2 = document.querySelector('#btn-left-collection');
let collection = document.querySelector('.best-of-collection');

btn2.addEventListener('click', ()=> {
    collection.style.right = '1%';
    btn2.style.display = 'none';
    Lbtn2.style.display = 'block';
})

Lbtn2.addEventListener('click', ()=> {
    collection.style.right = '-25%';
    btn2.style.display = 'block';
    Lbtn2.style.display = 'none';
})

// 4 th 

let btn3 = document.querySelector('#btn-right-home');
let Lbtn3 = document.querySelector('#btn-left-home');
let home = document.querySelector('.best-of-home');

btn3.addEventListener('click', ()=> {
    home.style.right = '1%';
    btn3.style.display = 'none';
    Lbtn3.style.display = 'block';
})

Lbtn3.addEventListener('click', ()=> {
    home.style.right = '-25%';
    btn3.style.display = 'block';
    Lbtn3.style.display = 'none';
})

// 5 th 

let btn4 = document.querySelector('#btn-right-deals');
let Lbtn4 = document.querySelector('#btn-left-deals');
let deals = document.querySelector('.best-of-deals');

btn4.addEventListener('click', ()=> {
    deals.style.right = '1%';
    btn4.style.display = 'none';
    Lbtn4.style.display = 'block';
})

Lbtn4.addEventListener('click', ()=> {
    deals.style.right = '-25%';
    btn4.style.display = 'block';
    Lbtn4.style.display = 'none';
})

window.addEventListener('resize', ()=> {
    if(window.innerWidth <= '1200'){
        ele.style.right=(window.innerWidth-1580+'px');
        collection.style.right=(window.innerWidth-1580+'px');
        home.style.right=(window.innerWidth-1580+'px');
        deals.style.right=(window.innerWidth-1580+'px');
        beauty.style.right=(window.innerWidth-1580+'px');
    }else{
        ele.style.right = '-25%';
        beauty.style.right = '-25%';
        collection.style.right = '-25%';
        home.style.right = '-25%';
        deals.style.right = '-25%';
    }
})

window.onload = function () {
    if(window.innerWidth <= '1200'){
        ele.style.right=(window.innerWidth-1580+'px');
        collection.style.right=(window.innerWidth-1580+'px');
        home.style.right=(window.innerWidth-1580+'px');
        deals.style.right=(window.innerWidth-1580+'px');
        beauty.style.right=(window.innerWidth-1580+'px');
    }else{
        ele.style.right = '-25%';
        beauty.style.right = '-25%';
        collection.style.right = '-25%';
        home.style.right = '-25%';
        deals.style.right = '-25%';
    }
}

// feature-brands-1

let con = document.querySelector('#feature');
let exbtn = document.querySelector('#brand-right-btn');
let Lexbtn = document.querySelector('#brand-left-btn');

let arr = ['-204%','-113%', '-21%', '3%']
let i = 0;
exbtn.addEventListener('click', ()=> {
    i++;
        con.style.right = arr[i];
        if(i == 3){
            exbtn.style.display = 'none';
        }else if (i > 0){
            Lexbtn.style.display = 'block';
        }
})
Lexbtn.addEventListener('click', ()=> {
    i--;
    con.style.right = arr[i];
    if (i == 0) {
        Lexbtn.style.display = 'none';
    }else if (i == 2){
        exbtn.style.display = 'block';  
    }
})

// feature-brands-1

let con2 = document.querySelector('#feature-2');
let exbtn2 = document.querySelector('#brand-right-btn-2');
let Lexbtn2 = document.querySelector('#brand-left-btn-2');

let arr2 = ['-204%','-113%', '-21%', '3%']
let j = 0;
exbtn2.addEventListener('click', ()=> {
    j++;
        con2.style.right = arr2[j];
        if(j == 3){
            exbtn2.style.display = 'none';
        }else if (j > 0){
            Lexbtn2.style.display = 'block';
        }
})
Lexbtn2.addEventListener('click', ()=> {
    j--;
    con2.style.right = arr2[j];
    if (j == 0) {
        Lexbtn2.style.display = 'none';
    }else if (j == 2){
        exbtn2.style.display = 'block';
    }
})

document.querySelector('#hum-burger').addEventListener('click', ()=> {
    document.querySelector('#menu').style.display = 'block';
})

document.querySelector('#close-menu').addEventListener('click', ()=> {
    document.querySelector('#menu').style.display = 'none';
})