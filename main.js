const fetch = require('node-fetch');
const Discord = require('discord.js');
require('dotenv').config();
const client = new Discord.Client();

const fs = require('fs');

client.commands = new Discord.Collection();
client.events = new Discord.Collection();

['command_handler', 'event_handler'].forEach(handler =>{
    require(`./handlers/${handler}`)(client, Discord);
});

client.on('ready', () => {
    client.user.setPresence({
        status: 'available',     //sets status button to green   
        activity: {
            name: `Scary step sis sheck stuck under the garbage disposal slutty fan fic day anniversary`,    //This is the custom text  
            type: 'WATCHING'     //this is the type (duh). 'watching' would also be an option  
        }
        
    });
});

client.login(process.env.DISCORD_TOKEN);