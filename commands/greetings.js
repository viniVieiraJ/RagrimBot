module.exports = {
    name: 'greetings',
    description: 'Greets someone',
    execute(msg, msgLowerCase){
        var morningVariations = ["dia", "morning", "⠼⠙⠼⠊⠼⠁"];
        var eveningVariations = ["tarde", "evening","⠞⠼⠁⠗⠼⠙⠼⠑"];
        var nightVariations = ["noite", "noche", "night", "⠝⠕⠼⠊⠞⠼⠑"];
        var compliments = ["gostosa", "delícia", "linda", "gatinha", "safadinha"];
        var emojiGozoNaCaraID = "<:gozonacara:725046046853693511>";
        var emojiApaixonadoID = "<:gostosaavista:725043957708488724>";

        function RandomIndex(array) 
        {
        var randomIndex = Math.floor(Math.random() * array.length);

        return array[randomIndex];
        }

        for (let i = 0; i < 6 ; i++) {
            if(msgLowerCase.includes("rapoze"))
            {
              msg.channel.send("Bom dia, rapoze", {files: ["./imgs/rapoze.png"]}); 
              break;
            }else
            if(msgLowerCase.includes(morningVariations[i]))
            {
              
              if(msg.member.id == '604437858249605120')
              {
                msg.reply("bom dia " + RandomIndex(compliments) + "! " + emojiGozoNaCaraID + " " +  emojiApaixonadoID);
                break;
              }else
              {
                msg.channel.send("Bom dia, <@" + msg.author.id + ">! :sunny::leaves:");
                break;
              }

            }else
            if(msgLowerCase.includes(eveningVariations[i]))
            {
              if(msg.member.id == '604437858249605120')
              {
                msg.reply("boa tarde " + RandomIndex(compliments) + "! " + emojiGozoNaCaraID + " " +  emojiApaixonadoID);
                break;
              }else
              {
                msg.channel.send("Boa tarde, <@" + msg.author.id + ">! :white_sun_cloud::herb:");
                break;
              }
            }else
            if(msgLowerCase.includes(nightVariations[i]))
            {
              if(msg.member.id == '604437858249605120')
              {
                msg.reply("boa noite " + RandomIndex(compliments) + "! " + emojiGozoNaCaraID + " " +  emojiApaixonadoID);
                break;
              }else
              {
                msg.channel.send("Boa noite, <@" + msg.author.id + ">! :sparkles::last_quarter_moon_with_face:");   
                break;
              }
            }

        }
    }
 }