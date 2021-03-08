// the way you call data from our env file, you use a dotenv function
require('dotenv').config();
// we acces our env file by using .env and then call the port number with PORT
const port = process.env.PORT;
// you created a constant variable express, then you require to use express
const express = require('express');
const cors = require('cors');
const superagent = require('superagent');
const baseUrl = process.env.BASE_URL;

// declare our server
const app = express();
// Set middleware
app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.use(cors());
// Base URL



// how to create an endpoint
app.get('/', (req, res) => {
    //status codes examples: 404, 500, 200
    // instead of a simple string you could also use objects instead
    res.status(200).send({
        status: 200,
        message: 'Express server is ok'
    });
});

// Endpoint for API movies
app.get('/move', (req, res) => {
    const url = `${baseUrl}/move`;
    superagent.get(url).end((error, resp) =>{
        // Inside here we tell superagent what to do with the request
        if (error){
            res.status(400).send({
                status: 400,
                message: 'Unable to get moves.'
            });
        }
        res.status(200).send(resp.body);
    });
});
app.post('/move', (req, res) => {
    const incomingData = req.body;
    const url = `${baseUrl}/move/${incomingData.id}`;
    superagent.get(url).end((error, resp) =>{
        // Inside here we tell superagent what to do with the request
        if (error){
            res.status(400).send({
                status: 400,
                message: 'Move not found with that Id.'
            });
        }
        res.status(200).send(resp.body);
    });
});





//after declared it, start using it
app.listen(port, () => {
    console.log(`Listening on port: ${port}`)
})