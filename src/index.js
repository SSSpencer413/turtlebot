//SSSpencer413

require('dotenv').config();


const discord = require("./discord/index");
discord.run();

const guilded = require("./guilded/index");
guilded.run();

const express = require("express");
const app = express(); 

app.get('/', (req, res) => {
    res.sendStatus(200);
})

app.get('/discord', (req, res) => {
    res.status(200).send(discord.stats());
})

app.get('/guilded', (req, res) => {
    res.status(200).send(guilded.stats());
})

app.listen(3000, () => {
    console.log('Listening!');
})