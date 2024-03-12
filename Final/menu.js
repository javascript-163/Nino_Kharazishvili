const apiKey = 'e487bf99cab14278be1a86a25d85d3e4';
const baseUrl = 'https://api.spoonacular.com/';

// Example endpoint: Get random recipes
const endpoint = 'food/menuItems/search';
const query = 'burger';

// Specify the number of results you want to retrieve
const number = 45;

// Construct the URL with parameters
const url = `${baseUrl}${endpoint}?apiKey=${apiKey}&query=${query}&number=${number}`;

// Make the API request
fetch(url)
    .then(response => response.json())
    .then(data => {
        // Handle the API response
        console.log(data);
    })
    .catch(error => {
        // Handle errors
        console.error('Error fetching data:', error);
    });