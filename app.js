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

// document.querySelector('body').addEventListener('mouseover', ()=> {
//     console.log('hello');
//     document.querySelector("#fashion-dropdown-1").style.display = 'none';
//     document.querySelector("#fashion-dropdown-2").style.display = 'none';
// })

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