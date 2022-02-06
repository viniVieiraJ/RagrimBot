var maedoluizActivationWords = ["mae d", "mãe d"];
var greetingsActivationWords = ["bom", "boa", "buenos", "buenas", "good", "⠼⠃⠕⠍","⠼⠃⠕⠼⠁"];
var ragrimCompliment = ["mandou bem", "boa", "obrigado", "obg", "nice", "top", "brigado", "quente", "nois", "brabo", "dale"];

var botUsername = 'Ragrim';
var botPrefix = "r! ";
var biggestArrayLenght = 10;
var voiceChannel;
var targetUsername = '';
var aguaChannelId = 921066186245021746n;

var targetMessagesEnabled = true;
var entranceMusicEnabled = false;
var botBusy = false;

console.log("running main.js");

const Discord = require('discord.js');
const { MessageEmbed } = require('discord.js')
const fs = require('fs');
const client = new Discord.Client();
client.commands = new Discord.Collection();
const keepAlive = require("./server");
const tigoId = 392773680184426507n;
const viniId = 434102987967823882n;
const dudaId = 579468801083572246n;
const mySecret = process.env['botTOKEN'];
require('discord-buttons')(client);


keepAlive();

const commandFiles = fs.readdirSync('./commands/').filter(file => file.endsWith('.js'));
for(const file of commandFiles)
{
    const command = require(`./commands/${file}`);

    client.commands.set(command.name, command);
}

client.login(mySecret);

client.on('ready', botOn);

function botOn() 
{
    console.log('Bot is on!');
    client.user.setActivity('r! help', { type: 'PLAYING' }); // Set activity
    sendDMtoDEV("[STATUS: ONLINE :green_circle:]", viniId);
}

client.on('message', gotMessage);

function gotMessage(message)
{

if(message.author.username != botUsername)
{
  if(client.commands.get('chat moderation').execute(message, client))
  {
    var messageContent = message.content.toLowerCase();

    if(message.author.username == targetUsername && targetMessagesEnabled == true) // Targeted Messages
    {
      client.commands.get('death messages').execute(message);
    }

    if(messageContent.startsWith(botPrefix)) // W/Prefix Messages Handler
    {
        var postPrefix = message.content.replace(botPrefix, '');

        if(postPrefix == "help") // Help command
        {
            message.reply("\nComandos do Ragrim :sunglasses: :thumbsup: \n\n-mae do [usuario]\n-Ragrim, me da um [role/comp/compAleatoria]!\n-Ragrim, invade?\n-Ragrim, Entra ai!\n-Ragrim, Vaza!\n-Ragrim, Obrigado!\n-Ragrim, bom [dia/tarde/noite]!\n-Ragrim, o Cunha pode ir de yasuo?\n\nObs: Os comandos acima são apenas uma base, você está livre pra falar comigo do jeito que quiser!")
            .then(msgReply => {
                setTimeout(() => msgReply.delete(), 30000);
                });
              setTimeout(() => message.delete(), 30000);
        }else
        if((message.author.id == tigoId || message.author.id == viniId) && message.channel.type === "dm")
        {
          if(postPrefix.includes("switchtm")) // Switch the target of Targeted Messages
          {
            targetUsername = postPrefix.replace("switchtm ", '');
            message.reply("targetUsername: " + targetUsername);
          }
          switch(postPrefix){
              case 'tm':
                  switch(targetMessagesEnabled){ // switchs between can or cant activate target messages
                      case true:
                      targetMessagesEnabled = false;
                      message.reply("targetMessages: " + targetMessagesEnabled);
                      break;

                      case false:
                      targetMessagesEnabled = true;
                      message.reply("targetMessages: " + targetMessagesEnabled);
                      break;                        
                  }
                  break;
              case 'entranceMusic':
                  switch(entranceMusicEnabled){
                      case true:
                      entranceMusicEnabled = false;
                      message.reply("entranceMusic: " + entranceMusicEnabled);
                      break;

                      case false:
                      entranceMusicEnabled = true;
                      message.reply("entranceMusic: " + entranceMusicEnabled);
                      break; 
                  }
                  break;
          }                  
        }else
        {
          if(message.channel.type !== "dm")
          {
            message.reply("Estes comandos só podem ser executados em minha conversa privada!");
          }else
          if(message.author.id != tigoId)
          {
            message.reply("Silêncio plebe, você não tem as permissões necessárias para alterar minhas configurações!");
          }
        }       
    }

    if(messageContent.includes("ragrim")) // W/Ragrim Messages Handler
    {
        for(let i = 0; i < biggestArrayLenght; i++)
        {
            if(messageContent.includes(ragrimCompliment[i])) // Accepts compliments
            {
                message.reply(":sunglasses::rose:");
                break;
            }else
            if(messageContent.includes("niet")) // Make bot log into VoiceChannel and play nieT audio
            {

              if(message.member.voice.channel != null)
              {
                message.reply("ALGUEM DISSE NIET?");

                voiceChannel = message.member.voice.channel;
                voiceChannel.join().then(connection =>{
                    const dispatcher = connection.play('./sfx/niet.mp3');
                    dispatcher.on('finish', () => {
                        voiceChannel.leave();
                    });
                });
                break;
              }else
              {
                message.reply("VOCE DISSE NIET? ♪ Ive been wearing a lot of masks on the last past days x4");
                break;
              }
            }else
            if(messageContent.includes("vaz")) // Make bot leave
            {
                voiceChannel.leave();
            }else
            if(messageContent.includes("invade"))
            {
                client.commands.get('invade by chance').execute(message); // Says if you should invade 
                break;
            }else
            if(messageContent.includes("cunha") && messageContent.includes("yasuo"))
            {
                client.commands.get('yasuo by chance').execute(message); // Says if cunha should go with yasuo 
                break;
            }else
            if(messageContent.includes("manda") || messageContent.includes("da") || messageContent.includes("jogo") || messageContent.includes("jogar") || messageContent.includes("lança") || messageContent.includes("ve") || messageContent.includes("passa"))
            {
                client.commands.get('champion selector').execute(message, messageContent); // Sends a comp or a random champion per role
                break;
            }else
            if(messageContent.includes("ta ai?")) // verify if bot is on
            {
                message.reply("to aqui sim amigo!");
                break;
            }else
            if(messageContent.includes("peça") || messageContent.includes("pede") || messageContent.includes("se"))
            {
              if(messageContent.includes("desculp"))
              message.channel.send("<@" + tigoId + "> e <@" + dudaId + ">, eu gostaria de pedir desculpas pelo inconveniente causado e peço que me perdoem pois não ocorrerá novamente");
              break;
            }
        }
    }

    for(let i = 0; i < biggestArrayLenght; i++) // Looks for simpler commands first
    {
        if(messageContent.includes(maedoluizActivationWords[i])) // Talks about someones mother
        {
            client.commands.get('rubis our treasure').execute(message);
            break;
        }else
        if(messageContent.includes(greetingsActivationWords[i])) // Greets users
        {
            client.commands.get('greetings').execute(message, messageContent);
            break;
        }
    }

    function RandomIndex(array) 
    {
        var randomIndex = Math.floor(Math.random() * array.length);

        return array[randomIndex];
    }
}
}
client.on('voiceStateUpdate', (oldState, newState) => 
{
    if(newState.channelID !== null)
    {
      voiceChannel = newState.channel;

      if(newState.channel.id == aguaChannelId)  // Drowning voice channel activation
      {
        voiceChannel.join().then(connection =>
        {
          playSong();
            function playSong()
            {
            const dispatcher = connection.play('./sfx/oldphonesong.mp3');
            dispatcher.on('finish', () => 
            {
              if(voiceChannel.members.array().length > 0)
              {
                playSong();
                console.log(voiceChannel.members.array().length); // 'voiceChannel' is a constant not a variable.
              }else{
                voiceChannel.leave();
              }
            });
            }
        });
        
      }else if(oldState.channel !== null)
      {
        if(newState.member.id == tigoId && newState.channel.id !== oldState.channel.id && entranceMusicEnabled) // Tigo is on!
        {
        newState.member.voice.channel.members.forEach(member => 
        {
          if(member.id != tigoId)
          {
            member.voice.setMute(true);
          }
        });

        voiceChannel.join().then(connection =>
        {
            const dispatcher = connection.play('./sfx/Girei.mp3');
            dispatcher.on('finish', () => 
            {
                voiceChannel.leave();
                newState.member.voice.channel.members.forEach(member =>
                {
                  member.voice.setMute(false);
                });
            });
        });
      }}
}});
}
client.on('presenceUpdate', (oldPresence, newPresence) => {
    let member = newPresence.member;
    let text = "";

    if (member.id === '579468801083572246' && newPresence.guild.id == '712277864250343497') {
      if(oldPresence != undefined)
      {
        if(oldPresence.status !== newPresence.status) {
        if (newPresence.status === "online") {
          text = "oppai comunista#7910 [STATUS: ONLINE :green_circle:]";
        } else if (newPresence.status === "offline") {
          text = "oppai comunista#7910 [STATUS: OFFLINE :red_circle:]";
        }
      }
      }else {
        if (newPresence.status === "online") {
          text = "oppai comunista#7910 [STATUS: ONLINE :green_circle:]";
        } else if (newPresence.status === "offline") {
          text = "oppai comunista#7910 [STATUS: OFFLINE :red_circle:]";
        }
      }
        sendDMtoDEV(text, tigoId);
    }
});

function sendDMtoDEV(text, receiverID)
{
  if(text)
  {
  client.users.fetch(receiverID, false).then((user) => {
  user.send(text);
  });
  }
}