module.exports = {
    name: 'death messages',
    description: 'Targeted messages',
    execute(msg){
        var imagemAviso = "https://cdn.discordapp.com/attachments/836248372653981716/836734392273338378/unknown.png";
        var DeathMessages = ["isso é um aviso:", "se esse cara falar de novo, eu vou expulsar", "cala boca mano", "ninguem liga", "CARALHO SO FALA MERDA KKKKKKK", "se tivessem te abortado nao ia estar aqui enchendo o saco KKKKKKKKKKK", "nao sei por que nao te baniram ainda", "por essas merdas que a gente come a tua mae aquela safada gostosa", "mec mec", "KKKKKKKKKKKKKKKKKKKKKKKK CALA BOCA POR FAVOR MEU DEUS DO CEU EU NAO AGUENTO MAIS", "puta que pariu que cara chato", "vai se fuder retardado", "FUJA RAGRIM!", "ESTRUME DO KRL", "puta vesga cala boca", "CARALHO TA PARECENDO O JOAO AQUELE BOSTA", "o vitor teria vergonha de voce", "VOCE ESTA ENFRENTANDO UM DEUS!", "SE DIZ MACHO MAS ADORA SER CHAMADO DE PUTINHA GOSTOSA", "calado tu é poeta", "TU AINDA TA FALANDO?", "CARALHO MORRE PORRA ninguem gosta de ti", "PORRA MENEZES", "vou te imitar ó: oinc oinc", "PORCO RIDICULO", "SAI DA MINHA SOLOQ", "É SÉRIO MSM?", "MALDITO RUIM DO KRL", "porra cara se continuar falando vou botar meu pinto na tua boca vadia", "pqp parece o cara que acha que camille é counter de pantheon", "CARALHO SÓ FALA MERDA TA PIOR QUE O VALENTIN O BARBICHA DE PENTELHO"];
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