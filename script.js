let fda1 = document.querySelector('#fda-1');
let fda2 = document.querySelector('#fda-2');
let fda3 = document.querySelector('#fda-3');
let fda4 = document.querySelector('#fda-4');


let fashion1 = document.querySelector('#fda1');
let fashion2 = document.querySelector("#fda2");
let fashion3 = document.querySelector("#fda3");
let fashion4 = document.querySelector("#fda4");
let fashion5 = document.querySelector("#fda5");
let fashion6 = document.querySelector("#fda6");
let fashion7 = document.querySelector("#fda7");
let fashion8 = document.querySelector("#fda8");
let fashion9 = document.querySelector("#fda9");
let fashion10 = document.querySelector("#fda10");
let fashion11 = document.querySelector("#fda11");
let fashion12 = document.querySelector("#fda12");


fda1.addEventListener('mouseover', function () {

let fashArr = [fashion1, fashion2, fashion3, fashion4, fashion5, fashion6, fashion7, fashion8, fashion9, fashion10, fashion11, fashion12];
let fashVal = ["More in Men's Top Wear", "All", "Men's T-Shirts", "Men's Casual T-Shirts", "Men's Formal T-Shirts", "Men's Kurtas", "Men's Ethinc Sets", "Men's Blazers", "Men's Raincoat", "Men's Windcheaters", "Men's Siut", "Men's Fabric"];
for(let i=0; i<=fashVal.length; i++){
    fashArr[i].innerHTML = fashVal[i];
}

})

fda2.addEventListener('mouseover', function () {

let fashArr = [fashion1, fashion2, fashion3, fashion4, fashion5, fashion6, fashion7, fashion8, fashion9, fashion10, fashion11, fashion12];
let fashVal = ["More in Men's Bottom Wear", "All", "Men's Jeans", "Men's Trousers", "Men's Shorts", "Men's Cargos", "Men's Threefourths", "Men's Pyaamas and Loungepants", "Men's Dhoti", "Men's Ethnic Pyjamas", " ", " "];
for(let i=0; i<=fashVal.length; i++){
    fashArr[i].innerHTML = fashVal[i];
}

})

fda3.addEventListener('mouseover', function () {

let fashArr = [fashion1, fashion2, fashion3, fashion4, fashion5, fashion6, fashion7, fashion8, fashion9, fashion10, fashion11, fashion12];
let fashVal = ["More in Women Ethnic", "All", "Women Sarees", "Women Kurtas & Kurtis", "Women Dresses", "Women Dress Material", "Women Gowns", "Women Lehnga Cholis", "Women Leggings & Patialas", "Women Palazzos & Shararas", "Women Blouse", "Women Dupatta"];
for(let i=0; i<=fashVal.length; i++){
    fashArr[i].innerHTML = fashVal[i];
}

})

fda4.addEventListener('mouseover', function () {

let fashArr = [fashion1, fashion2, fashion3, fashion4, fashion5, fashion6, fashion7, fashion8, fashion9, fashion10, fashion11, fashion12];
let fashVal = ["More in Men footwear", "All", "Men's Sport Shoes", "Men's Casual Shoes", "Men's Sendals & Floaters", "Men's Slipper & flip Flops", "Men's Formal Shoes", "Men's Ethnic Shoes", "Shoe Care", "", "", ""];
for(let i=0; i<=fashVal.length; i++){
fashArr[i].innerHTML = fashVal[i];
}
})