"use strict"
console.log(`hello from main.js`);
// from http://www.ncausa.org/About-Coffee/Coffee-Roasts-Guide
var coffees = [
    {id: 1, name: 'Light City', roast: 'light'},
    {id: 2, name: 'Half City', roast: 'light'},
    {id: 3, name: 'Cinnamon', roast: 'light'},
    {id: 4, name: 'City', roast: 'medium'},
    {id: 5, name: 'American', roast: 'medium'},
    {id: 6, name: 'Breakfast', roast: 'medium'},
    {id: 7, name: 'High', roast: 'dark'},
    {id: 8, name: 'Continental', roast: 'dark'},
    {id: 9, name: 'New Orleans', roast: 'dark'},
    {id: 10, name: 'European', roast: 'dark'},
    {id: 11, name: 'Espresso', roast: 'dark'},
    {id: 12, name: 'Viennese', roast: 'dark'},
    {id: 13, name: 'Italian', roast: 'dark'},
    {id: 14, name: 'French', roast: 'dark'},
];


// local storage =================================
(() => {
    let local = localStorage.getItem("latestCoffee");
    let obj = JSON.parse(local);
    if(obj){
        coffees.push(obj);

    }
})()
// ================================================


let coffeeCards = document.querySelector('#coffees');
const searchBar = document.getElementById('search');
let roastSelection = document.querySelector('#roast-selection');
const submitCoffee = document.querySelector('#addSubmit');
const addBar = document.getElementById('addCoffee');
let addRoast = document.querySelector('#roast-addition');



function renderCoffee(coffee) {
    let roastImage;
   if (coffee.roast === 'light') {
       roastImage = '../img/light-roast.jpeg'
   }
   if (coffee.roast === 'medium') {
       roastImage = '../img/medium-roast.jpeg'
   }
   if (coffee.roast === 'dark') {
       roastImage = '../img/dark-roast.jpeg'
   }

    let html = `
        <div class="coffee-card">
        <div class="row cesar justify-center">
            <h2 class="coffee-name">${coffee.name}</h2>
            <p class="coffee-paragraph">${coffee.roast}</p>
        </div>
            <img class="image-timer" src="${roastImage}" alt="coffee">
            <p class="coffee-paragraph-detail">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dicta doloremque esse veritatis.</p>
        </div>
    `;
    return html;
}

function renderCoffees(coffees) {
    var html = '';
    for(let i = 0; i < coffees.length; i++) {
        html += renderCoffee(coffees[i]);
    }
    return html;
}

function updateCoffees(e) {
    e.preventDefault(); // don't submit the form, we just want to update the data
    let selectedRoast = roastSelection.value.toLowerCase();
    let searchInput = searchBar.value;

    let filteredCoffees = coffees;

    if (selectedRoast !== 'all') {
        filteredCoffees = filteredCoffees.filter(function(coffee){
            return coffee.roast.toLowerCase() === selectedRoast;
        })
    }
    if (searchInput !== '') {
        filteredCoffees = filteredCoffees.filter(function(coffee){
            return coffee.name.toLowerCase().includes(searchInput);
        })
    }
    if (filteredCoffees.length === 0) {
        coffeeCards.innerHTML = `
            <h3>No coffees were found</h3>
        `;

    } else {
        coffeeCards.innerHTML = renderCoffees(filteredCoffees);
    }

}



coffeeCards.innerHTML = renderCoffees(coffees);

roastSelection.addEventListener('change', updateCoffees);
searchBar.addEventListener('input', updateCoffees);

// ====================================================================================

function addCoffee (e) {
    e.preventDefault();
    let newCoffee = {id: coffees.length + 1, name: addBar.value, roast: addRoast.value};
    coffees.push(newCoffee);

    // local storage =================================
    const coffeePlus = JSON.stringify(newCoffee);
    localStorage.setItem("latestCoffee", coffeePlus);
    // ================================================

    coffeeCards.innerHTML = renderCoffees(coffees);

}
submitCoffee.addEventListener('click', addCoffee);
