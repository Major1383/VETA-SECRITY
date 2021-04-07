const Discord = require('discord.js');
const veta = new Discord.Client();
const { token,prefix } = require('./config.json');

veta.on('ready',()=>{
  console.log(`[READY] Logged in as ${veta.user.tag}! ID: ${veta.user.id}`);
 //join voice 
 const channel = veta.channels.cache.get("829068756331790346");
 if (!channel) return console.error("The channel does not exist!");
 channel.join().then(connection => {
   console.log("Successfully connected.");
   // Self Deafen
   connection.voice.setSelfDeaf(true);

 }).catch(e => {

   // Oh no, it errored! Let's log it to console :)
   console.error(e);
 });
  
});
 //auto react1 dep
 veta.on('message', async message => {
    if (message.channel.id === "829040985014796318") {
      try {
        await message.react('🖤');
      } catch(err) {
        console.error(err);
      }
    }
  });
 //auto react2 romantic
 veta.on('message', async message => {
    if (message.channel.id === "829040807729168444") {
      try {
        await message.react('💔');
        await message.react('❤');
      } catch(err) {
        console.error(err);
      }
    }
  });
  //auto react3 insta
 veta.on('message', async message => {
    if (message.channel.id === "829040687327477811") {
      try {
        await message.react('826882635015127131');
        
      } catch(err) {
        console.error(err);
      }
    }
    
  });
     //auto react3 birth day

veta.on('message', async message => {
  if (message.channel.id === "829041166187495434") {
    try {
      await message.react('🎂');
      
    } catch(err) {
      console.error(err);
    }
  }
  //auto react3 wallpaper
});veta.on('message', async message => {
  if (message.channel.id === "829041124957749319") {
    try {
      await message.react('✅');
      await message.react('❌');
    } catch(err) {
      console.error(err);
    }
  }
});
veta.login(token)
