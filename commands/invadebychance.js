module.exports = {
    name: 'invade by chance',
    description: 'Says if u should invade or not',
    execute(msg){
 
        var invadeChance = Math.floor(Math.random() * 101);
        if(invadeChance >= 0 && invadeChance <= 75)
        {
            msg.reply("Invade porra!");
            console.log(invadeChance);
        }else
        {
            msg.reply("Ih, perigoso isso dai, melhor não!");
            console.log(invadeChance);
        }
    }
 }