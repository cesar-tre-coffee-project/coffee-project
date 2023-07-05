"use strict";
console.log(`hello from moreCoffee.js`);

// =================================================================================================
// Event listener for search bar

const searchBar = document.getElementById('search');

function updatedSearch1 () {
    let currentSearch = searchBar.value;
    console.log(currentSearch, currentSearch.length, typeof currentSearch);

    let fastSearchResults = [];

    coffees.forEach(coffee => {
            if (coffee.name.toLowerCase().includes(currentSearch.toLowerCase())) {
                fastSearchResults.push(coffee);
            }
    });
    console.log(fastSearchResults);
    coffeeCards.innerHTML = renderCoffees(fastSearchResults);
}

searchBar.addEventListener('input', updatedSearch1);

/*
Remember, this event listener only fires up once there is input.
 */
// =================================================================================================

