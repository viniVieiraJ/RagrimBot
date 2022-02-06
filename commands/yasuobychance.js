module.exports = {
    name: 'yasuo by chance',
    description: 'Says if cunha should go with yasuo',
    execute(msg){
 
        var yasuoChance = Math.floor(Math.random() * 101);

        if(yasuoChance >= 0 && yasuoChance <= 75)
        {
            msg.reply("Jamais, ele é HORRIVEL!");
            console.log(yasuoChance);
        }else
        {
            msg.reply("Acho que até dá pra ir, ele vai ser carregado!");
            console.log(yasuoChance);
        }
    }
 }