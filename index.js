const { Client, GatewayIntentBits } = require("discord.js");



const dotenv = require("dotenv");
dotenv.config({
    path: './.env'
})


//const { configDotenv } = require("dotenv");
const client = new Client({
    intents:
        [
            GatewayIntentBits.Guilds,
            GatewayIntentBits.GuildMessages,
            GatewayIntentBits.MessageContent,
        ],
});




client.on('messageCreate', (message) => {
    //console.log(message.content);
    if(message.author.bot) return;
    message.reply({
        content:"hiiiiii loner",
    });
    
        //content:"hi from bot"
    //)
});

client.on('interactionCreate', async interaction => {
    //if (!interaction.isChatInputCommand()) return;
  
    if (interaction.commandName === 'ping') {
      await interaction.reply('Pong!');
    }
  });



client.login(
    `${process.env.ACCESS_TOKEN}`
);

