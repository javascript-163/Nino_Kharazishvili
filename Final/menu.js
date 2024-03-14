const apiKey = 'e487bf99cab14278be1a86a25d85d3e4';
const baseUrl = 'https://api.spoonacular.com/';
const endpoint = 'food/menuItems/search';

const number = 10;
let query;

let coffeeBtn = document.getElementById("coffee_btn");
let sandwichBtn = document.getElementById("sandwich_btn");
let empanadaBtn = document.getElementById("empanada_btn");
let dessertBtn = document.getElementById("dessert_btn");
let menuTypeTitle = document.getElementById("menu_item_type");


async function fetchMenuItems(query) {
    const url = `${baseUrl}${endpoint}?apiKey=${apiKey}&query=${query}&number=${number}`;
    try {
        const response = await fetch(url);
        const data = await response.json();
        data.menuItems.forEach((item, index) => {
            let menuItem = document.getElementById(`menu_item${index}`);
            menuItem.innerHTML = `${item.title}`;
        });
    } catch (error) {
        console.error('Error fetching data:', error);
    }
}


function loadMenuItems(query) {
    menuTypeTitle.innerHTML = `${query.toUpperCase()}`;
    fetchMenuItems(query);
}

window.onload = function () {
    loadMenuItems("coffee");
};

coffeeBtn.addEventListener("click", () => {
    loadMenuItems("coffee");
});

sandwichBtn.addEventListener("click", () => {
    loadMenuItems("sandwich");
});

empanadaBtn.addEventListener("click", () => {
    loadMenuItems("empanada");
});

dessertBtn.addEventListener("click", () => {
    loadMenuItems("dessert");
});