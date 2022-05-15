//SSSpencer413

const discord = require("./discord/index.js");
discord.run();

const guilded = require("./guilded/index.js");
guilded.run();

const express = require("express");
const app = express(); 

app.get('/', (req, res) => {
    res.sendStatus(200);
})

app.listen(3000, () => {
    console.log('Listening!');
})