require('dotenv').config();
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
// Models
const Journal = require('./Models/journal');

const port = process.env.PORT;
const mongoUri = process.env.URI;
const server = express();

// Middleware
server.use(cors());
server.use(express.json());
server.use(express.urlencoded({ extended: true }));

// Connecting to mongodb
mongoose.connect(mongoUri, { useNewUrlParser: true, useUnifiedTopology: true });

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'Could not connect to Mongo.'));
db.once('open', () => {
    console.log('Connection to Mongo Established!');
})

server.get('/', () => {
    console.log('server ok');
})

// create journal entry
server.post('/add-journal', (req, res) => {
    const incomingData = req.body;
    const newJournal = new Journal(incomingData);

    newJournal.save((err, doc) => {
        if (err) {
            res.status(500).send({
                err: err,
                message: 'Error Occured.'
            })
        }

        res.status(200).send({
            message: 'Journal Created.',
            document: doc
        })
    })
});

server.listen(port, () => {
    console.log(`Listening on Port ${port}`);
})