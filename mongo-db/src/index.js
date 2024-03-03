// importing requirements
const connectToMongo = require('./connection/db');
const express = require('express');
const cors = require("cors");


// connecting with mongodb atlas server
connectToMongo();

// development environment specifications
const app = express();

// to use req.body, we have to use this middleware
app.use(express.json());
app.use(cors());

// availble routes for the API
app.use('/', require('./routes'));

// running the app
app.listen(3000, () => {
    console.log(`The App is listening on port http://localhost:${3000}`);
});