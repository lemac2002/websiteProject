// Code: Main file for the website project
const express = require('express');
const expressLayout = require('express-ejs-layouts');

const app = express();
const port = process.env.PORT || 3000;
// dotenv config
require('dotenv').config();

// Middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));
app.use(expressLayout);

app.set('layout', './layouts/main');
app.set('view engine', 'ejs');

const routes = require('./server/routes/websiteRoute.js');
app.use('/', routes);

app.listen(port, () => console.log(`Server is running on port ${port}`));



