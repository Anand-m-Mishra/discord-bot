const {REST,Routes} = require("discord.js");

const commands = [
    {
      name: 'ping',
      description: 'Replies with Pong!',
    },
  ];

const rest = new REST({ version: '10' }).setToken('MTI4ODEwNzkwMDM1NDQzMzEyNQ.GAiJJE.qu2WjthfUmo040crc32D4mhj3U-EFX4gAtABx4');
(async()=>{
try {
    console.log('Started refreshing application (/) commands.');
  
    await rest.put(Routes.applicationCommands('1288107900354433125'), { body: commands });
  
    console.log('Successfully reloaded application (/) commands.');
  } catch (error) {
    console.error(error);
  }
});