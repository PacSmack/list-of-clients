const mongoose = require('mongoose');
const routes = require('./controllers');

// require express
const express = require('express');

const app = express()
const PORT = process.env.PORT || 3001;5

app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(routes);


// Declare a route
app.get('/', async (req, res) => {
    return { hello: 'world' }
});

// Run the server
app.listen(PORT, () => {
    console.log(`API server now on port ${PORT}!`);
});

// connect to DB
mongoose.connect('mongodb://localhost/listofclients')
    .then(() => console.log('MongoDB connected...'))
    .catch(err => console.log(err));

