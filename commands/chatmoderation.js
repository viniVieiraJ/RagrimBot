module.exports = {
    name: 'chat moderation',
    description: 'Modera o chat automaticamente',
    execute(msg, client){
    var linkPatterns = ["www.", "https:/", ".com", ".br", ".net", ".org", ".co", ".gov"];

    var messageOk = true;

    var messageAuthor = msg.author.id;
    var midiaMessageCount;

    const conversasChatID = 712277864711716875n;
    const midiaChatID = 714619143298613278n;
    const linkChatID = 712342460063547492n;
    const registrosChatID = 792796274608177182n;

    if(msg.attachments.size > 0)
    {
      if(msg.channel.id != midiaChatID && msg.channel.id != registrosChatID)
      {
      msg.channel.send("<@" + messageAuthor + ">, opa amigão, tenho certeza que você quis enviar esta mensagem aqui:\n<#" + midiaChatID + ">")
      .then(msgReply => {
            setTimeout(() => msgReply.delete(), 10000);}
            );;
      msg.delete();

      messageOk = false;
      }
    }

    for(let i = 0; i <= linkPatterns.length; i++)
    {
      if(msg.content.includes(linkPatterns[i]))
      {
        if(msg.channel.id != linkChatID && !msg.content.includes("gif"))
        {
          msg.channel.send("<@" + messageAuthor + ">, opa amigão, tenho certeza que você quis enviar esta mensagem aqui:\n<#" + linkChatID + ">")
          .then(msgReply => {
                setTimeout(() => msgReply.delete(), 10000);}
                );;
          msg.delete();

          messageOk = false;
          break;
        }
      }
    }

    return messageOk;
 }
}