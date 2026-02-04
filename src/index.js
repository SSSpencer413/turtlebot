//SSSpencer413

require('dotenv').config();


const discord = require("./discord/index");
discord.run();

const express = require("express");
const app = express(); 

app.get('/', (req, res) => {
    res.sendStatus(200);
})

app.get('/redirect', (req, res) => {
    res.redirect('https://ssspencer413.github.io/turtlebot/');
})

app.get('/discord', (req, res) => {
    res.status(200).send(discord.stats());
})

app.listen(3000, () => {
    console.log('Listening!');
})
