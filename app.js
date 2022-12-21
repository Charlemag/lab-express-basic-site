//Require Express
const express = require('express');

// Express server handling requests and responses
const app = express();

// Make everything inside of public/ available
app.use(express.static('public'));

// our Home-Page Route:
app.get('/home', (request, response, next) => response.sendFile(__dirname + '/views/home-page.html'));

// About-Page:
app.get('/about', (request, response, next) => response.sendFile(__dirname + '/views/about-page.html'));

// Works-Page
app.get('/works', (request, response, next) => response.sendFile(__dirname + '/views/works-page.html'));

// Photos-Page
app.get('/photos', (request, response, next) => response.sendFile(__dirname + '/views/photos-page.html'));

//Server Started

app.listen(3000, () => { console.log('Yoooo')});