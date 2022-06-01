"use strict";

console.log("Let's get this party started!");

const API_KEY = 'MhAodEJIJxQMxW9XqxKjyXfNYdLoOIym';
const searchTerm = $('#giphy-search');

axios.get('http://api.giphy.com/v1/gifs/search', {params: {'q': searchTerm, 'api_key': API_KEY}});

async function getGiphy(event){
    event.preventDefault();
    //const searchTerm = $('#giphy-search').val();
    console.log('click')
    
    let searchValue = searchTerm.val();
    console.log('val', searchValue)
    let response = await axios.get(`http://api.giphy.com/v1/gifs/search?q=${searchValue}&api_key=${API_KEY}`);

    console.log('getGiphy resp=', response);
    $('#giphy').html(response.data.data.title);

    showGiphy();
}
async function showGiphy() {
    let giphyImage = $('<giphy-image>')
    ("giphy-image").appendTo('#giphy-area')
}


$('form').on('submit', getGiphy);