"use strict";

console.log("Let's get this party started!");

const API_KEY = 'MhAodEJIJxQMxW9XqxKjyXfNYdLoOIym';
const searchTerm = $('#giphy-search');
const $giphyArea = $('#giphy-area')
axios.get('http://api.giphy.com/v1/gifs/search', {params: {q: searchTerm, api_key: API_KEY}});

async function getGiphy(event){
    event.preventDefault();
    //const searchTerm = $('#giphy-search').val();
    console.log('click')
    
    let searchValue = searchTerm.val();
    console.log('val', searchValue)
    let response = await axios.get(`http://api.giphy.com/v1/gifs/search?q=${searchValue}&api_key=${API_KEY}`);

    console.log('getGiphy resp=', response);

    let foundGiphies = response.data.data.map(image =>image.images.original.url);
    let giphy = searchForGiphy(foundGiphies);
    console.log('giphy',giphy);

    //$('#giphy').html(response.data.data.title);

    showGiphy(giphy);
}

function showGiphy(giphy) {
    const $newGiphyContainer = $('<div>');
    const $newGiphy = $('<img>', {
        'class': 'giphy',
        src: giphy,
    }).css({
        'width': '400px',
        'height': '400px'});

    ($newGiphyContainer).append($newGiphy);
    ($newGiphyContainer).appendTo($giphyArea);
}

function searchForGiphy(giphyList) {
 //get all the titles that include the search term and store in a new list
 //use a random number to return one of these titles
    let numberOfChoices = giphyList.length
    let giphyIndex = Math.round(Math.random() * numberOfChoices)
    return giphyList[giphyIndex]
}

function removeGiphy(event) {
    event.preventDefault();
    $giphyArea.empty('.giphy')
}

$('form').on('submit', getGiphy);
$('#remove').on('click', removeGiphy)