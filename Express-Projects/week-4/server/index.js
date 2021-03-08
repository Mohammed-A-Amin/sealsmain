require('dotenv').config();
const express = require('express');
const cors = require('cors');
const superagent = require('superagent');

// Port number
const port = process.env.PORT;
// Base url
const baseUrl = process.env.BASE_URL;

// declare our server
const app = express();
// Set middleware 
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());

// Endpoint
app.get('/', (req, res) => {
    // Status codes: 404, 500, 200
    res.status(200).send({
        status: 200,
        message: 'Express server is OK.'
    });
});

// Endpoint for api movies
app.get('/get-movies', (req, res) => {
    const url = `${baseUrl}/films`;
    superagent.get(url).end((error, resp) => {
        if (error) {
            res.status(400).send({
                status: 400,
                message: 'Unable to get Movies.'
            })
        }
        res.status(200).send(resp.body);
    })
});

// Endpoint to Get one film using post
app.post('/get-one-movie', (req, res) => {
    const incomingData = req.body;
    const url = `${baseUrl}/films/${incomingData.id}`;
    superagent.get(url).end((error, resp) => {
        if (error) {
            res.status(400).send({
                status: 400,
                message: 'Movie not foun with that ID.'
            })
        }
        res.status(200).send(resp.body);
    })
});
app.post('/get-one-movie-title', (req, res) => {
    const incomingData = req.body;
    const url = `${baseUrl}/films/${incomingData.id}`;
    superagent.get(url).end((error, resp) => {
        if (error) {
            res.status(400).send({
                status: 400,
                message: 'Movie not foun with that ID.'
            })
        }
        res.status(200).send(resp.body);
    })
});

app.listen(port, () => {
    console.log(`Listening on port: ${port}`)
});