"use strict";

console.log("Let's get this party started!");

const API_KEY = 'MhAodEJIJxQMxW9XqxKjyXfNYdLoOIym';
const searchTerm = $('#giphy-search').val();
console.log(searchTerm)
axios.get('http://api.giphy.com/v1/gifs/', {params: {'q': searchTerm, 'api_key': API_KEY}});

async function getGiphy(event){
    event.preventDefault();
    //const searchTerm = $('#giphy-search').val();
    console.log('click')
    let response = await axios.get(`http://api.giphy.com/v1/gifs/search?q=${searchTerm}&api_key=${API_KEY}`);

    console.log('getGiphy resp=', response);
    $('#giphy').html(response.data);
}

$('#search-button').on('click', getGiphy);