const express = require('express');
const app = express();
const port = 5000;
const quoteList = require('./modules/quoteList') // ONLY node modules don't need ./ before the file name

app.use(express.static('public'));

// '/quotes' is the url/route/path
// method (GET) is verb describing interaction with route
// CRUD: Create (POST) /Read (GET) /Update (PUT) /Delete (DELETE)
// req: request object - what the client sends to the server. by default, includes a route and a method
// res: response object - what the server sends to the client. includes a body with a status code

// status codes:
// 100s: processing
// 200s: sucess
// 300s: redirection needed
// 400s: client-side error
// 500s: server-side error

// API: APPLICATION PROGRAMMING INTERFACE - a way for programs to communicate with each other

// HTTP: hyper-text transfer protocol - routes and methods

app.get('/quotes', (req, res) => {
    console.log('request for /quotes made')
    res.send(quoteList.quotes);
});

app.listen(port, () => {
    console.log(`listening at port ${port}`)
});