require('dotenv').config();
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
// Models
const Journal = require('./Models/journal');

const port = process.env.PORT;
const mongoUri = process.env.URI;
const server = express();

server.use(cors());
server.use(express.json());
server.use(express.urlencoded({extended: true}));

//Connecting to mongoDB
mongoose.connect(mongoUri,{ useNewUrlParser: true, 
    useUnifiedTopology: true});

const db = mongoose.connection;

db.on('error',console.error.bind(
    console, 'Could not connect to MongoDB...'));
db.once('open', () =>{
    console.log('Connection established with MongoDB');
});

// basic endpoint
server.get('/', ()=> {
    console.log('Server OK');
});

// create journal entry
server.post('/add-journal', (req,res)=>{
    const incomingData = req.body;
    const newJournal = new Journal(incomingData);
    newJournal.save((err, doc) => {
        if (err) {
            res.status(500).send({
                err: err,
                message: "Server Error Occred"
            });
        } 
        res.status(200).send({
            message: 'Journal Created',
            document: doc
        });
    });
});

//good for populating database quickly
server.post('/add-many-journals', (req,res) => {
    const incomingData = req.body.journals;
    Journal.insertMany(incomingData, (err, doc) => {
        if (err) {
            res.status(500).send({
                err: err,
                message: "Could Not Add Journals"
            });
        }
        res.status(200).send({
            message: "All Journals Created",
            document: doc
        });
    });
});

// fetch all journals 
server.get('/get-all-journals', (req,res) => {
    Journal.find({},(err, doc) => {
        if (err) {
            res.status(500).send({
                err: err,
                status: 500,
                message: "No Journals Found"
            });
        }
        res.status(200).send(doc);
    });
});

//remove a journal
server.post('/remove-journal', (req,res) => {
    const incomingData = req.body.title;
    Journal.findOneAndRemove({title: incomingData}, (err) =>{
        if (err) {
            res.status(500).send({
               err: err, 
               status: 500,
               message: `Could Not Remove Journal With Title Of ${incomingData}`
            });
        }
        res.status(200).send({
            status: 200,
            message: `Removed Journal with Title Of ${incomingData}`
        });
    });
});

//update a journal
server.post('/update-journal', (req,res) => {
    const incomingData = req.body;
    Journal.findOneAndUpdate({title: incomingData.title}, 
        {title: incomingData.updatedTitle, 
         author: incomingData.updatedAuthor,
         content: incomingData.updatedContent },{new: true}, (err, doc) => {
             if (err) {
                res.status(500).send({
                    err: err, 
                    status: 500,
                    message: `Could Not Update Journal With Title Of ${incomingData.title}`
                 });   
             }
             res.status(200).send({
                status: 200,
                message: `Updated Journal with Title Of ${incomingData.title}`,
                document: doc
            });
        });
});

server.listen(port, () => {
    console.log(`Listening on port ${port} ...`);
});