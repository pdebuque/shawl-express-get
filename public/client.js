// const quoteList = require('../modules/quoteList');

$(document).ready(onReady);

function onReady() {
    // call a function with get request
    $('#get-quotes').on('click', getQuotes);
    $('#clear-quotes').on('click', clearQuotes);
}

// find quotes asynchronously
function getQuotes() {
    console.log('getting quotes from the server');

    // this function files the given HTTP request at the given url
    // asynchronously: waits until all the data has been gathered   
    // .then(): 'once you have gotten the data from this request, do the following. res is the data sent from the server
    // .catch(): error handling: do this if we get back a 400 or 500-level status code

    $.ajax({
        method: 'GET',
        url: '/quotes'
    }).then((res) => {
        console.log(res);
        render(res);
    }).catch((error) => {
        alert('request failed', error)
    })
};

function clearQuotes() {
    $('#output').empty();
}

function render(array) {
    $('#output').empty();
    for (let quote of array) {
        $('#output').append(`
            <li>
                "${quote.text}" -<span class='author'>${quote.author}</span>
            </li>
        `)
    }
}