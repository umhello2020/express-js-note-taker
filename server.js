// imports the express, apiRoute, and htmlRoutes
const express = require('express');
const apiRoute = require('./routes/apiRoutes');
const htmlRoute = require('./routes/htmlRoutes');

const app = express();
const PORT = 3001;

// use the express middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));

// calling the routes
app.use('/api', apiRoute);
app.use('/', htmlRoute);

// starting the server
app.listen(PORT, () =>
    console.log(`App listening at http://localhost:${PORT}`)
);