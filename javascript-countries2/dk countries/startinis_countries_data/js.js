import allCountries from './data.js';
console.log(allCountries);
// pasizymiu vieta i kuria js pagalba printinsiu elementus
const my_main_div = document.getElementById('main_div');


allCountries.map((country, index)=>{
    console.log(index +1); // numeracija
    console.log(country.name.common);
    // kuriu elementa i kuri irasysiu salies pavadinima
    const one_country_info = document.createElement('div'); // kiekviena salis turi savo div'a
    const my_country_name = document.createElement('h2');
    // const country_continent = document.createElement('h4')
    const my_img = document.createElement('img');
    //idedu teksta, reiksme, kintamaji i sukurta elementa
    my_country_name.innerText = country.name.common;
    // country_continent.innerText = country.name.continents;
    my_img.src = country.flags.png;
    //idedu i main div'a savo sukurta elementa su contentu
    my_main_div.appendChild(one_country_info); // i main div'a idedam kiekvienu saliu div'us
    one_country_info.appendChild(my_img);
    one_country_info.appendChild(my_country_name);
    // one_country_info.appendChild(country_continent);


const my_country_capital = document.createElement('h3'); // kintamasis sostinem
    if(Array.isArray(country.capital)){ // jei array spausdinam capital
        console.log(country.capital[0]);
        my_country_capital.innerText = country.capital[0]; // jei sostine yra spausdinam
    } else {
        console.log("info nerasta...")
        my_country_capital.innerText = "Info nerasta..."
    }
    console.log("________________")
    one_country_info.appendChild(my_country_capital);
    my_main_div.appendChild(one_country_info);

const my_country_continent = document.createElement('h4');
    if(Array.isArray(country.continents)){
        console.log(country.continents[0]);
        my_country_continent.innerText = country.continents[0];
    } else {
        console.log("info nerasta...")
        my_country_continent.innerText = "info nerasta..."
    }
    one_country_info.appendChild(my_country_continent);
    my_main_div.appendChild(one_country_info);

});

//mygtukai filtravimui
const continents_buttons = document.querySelector('header');

//meniu punktai filtravimui
const continents = ['all'];

allCountries.map(
    country => {
        //1. atrinkti unikalius continentus
        if(!continents.includes(country.continents[0])){
            continents.push(country.continents[0]);
            
        }
    }

)
console.log(continents);
continents.forEach(continent => {
    const myBtn = document.createElement('button');
    myBtn.innerText = continent;
    continents_buttons.appendChild(myBtn);
})

const my_buttons = document.getElementsByTagName('button');
const card_continents = document.getElementsByTagName('h4');

// console.log(my_buttons);
// console.log(card_continents);
//visiems mygtukams uzdeti event
for(let one_category of my_buttons){
    one_category.addEventListener('click', 
    () => {getCountries(one_category.innerText)})
    // console.log(one_category.innerText);
}
const getCountries = (continent) => {
    // console.log("funkcijos vidus");
    // console.log(continent);
for(let i of card_continents) {
    // console.log(i.innerText)
    // jei mygtuko info kontinentas lygus i.innerText rodyk korteles
    //continent yra tekstas is paspausto mygtuko
    // i.innerText yra tekstas is div'u kur spausdiname kontinentus kamputyje
    if(i.innerText === continent  ||  continent === "all"){
        i.parentElement.style.display = "block"
    } else{
        i.parentElement.style.display = "none"
    }
    }
}

// const div = document.getElementById("div");
// function highlight() {
//   const words = div.textContent.split(" ");
//   div.innerHTML = "";
//   words.forEach((word) => {
//     const span = div.appendChild(document.createElement('span'));
//     span.textContent = word + ' ';
//     if (word === 'good') span.classList.add('green');
//     if (word === 'bad') span.classList.add('red');
//   });
// };
// div.addEventListener("blur", highlight);
// highlight();
// div {
//   background-color: black;
//   box-sizing: border-box;
//   color: white;
//   height: 128px;
//   padding: 16px;
//   width: 100%;
// }
// .green {
//   background-color: green;
// }
// .red {
//   background-color: red;
// }
// <div id="div" contenteditable="true">good and bad colors</div>

//------------------------

// document.querySelectorAll('.item_status').forEach(i => {
//     i.textContent.indexOf("Sold") !== -1 ?
//       i.classList.add('red') :
//       i.innerText.indexOf("Offer") !== -1 ?
//       i.classList.add('green') :
//       null;
//   });
//   .red {
//     color: red
//   }
//   .green {
//     color: green;
//   }
     
//   <div class='post-inner'>
//   <span class='item_status'>Sold</span>
//   <span class='item_status'>Offer</span>
//   </div>

//----------------------------------

// var items = document.getElementsByClassName("item_status");

// for(let i = 0; i<items.length; i++){
//   if(items[i].innerHTML === "Sold"){
//     items[i].style.color = "red";
//   }
//   else{
//     items[i].style.color = "blue";
//   }
// }