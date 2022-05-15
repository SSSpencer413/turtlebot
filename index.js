//SSSpencer413

<<<<<<< HEAD
const discord = require("./discord/index.js");
discord.run();
=======
const { Client, Intents } = require('discord.js');
const client = new Client({ intents: [Intents.FLAGS.GUILD_MEMBERS, Intents.FLAGS.GUILD_MESSAGES, Intents.FLAGS.GUILDS]});
>>>>>>> 05b8b0243969474b517620b3f089b52112c57c92

const guilded = require("./guilded/index.js");
guilded.run();

