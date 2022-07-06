module.exports = {
    name: 'death messages',
    description: 'Targeted messages',
    execute(msg){
        var imagemAviso = "https://cdn.discordapp.com/attachments/836248372653981716/836734392273338378/unknown.png";
        var DeathMessages = [""];
        var randomIndex = Math.floor(Math.random() * DeathMessages.length);

        if(randomIndex == 0)
        {
            msg.reply(DeathMessages[randomIndex], {files: [imagemAviso]});
        } else
        {
            msg.reply(DeathMessages[randomIndex]);
        }
            
    }
 }
