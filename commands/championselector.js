module.exports = {
    name: 'champion selector',
    description: 'selects a random champion or comp',
    execute(msg, msgLowerCase){
        var leagueChampions = ["Aatrox","Ahri","Akali","Alistar","Amumu","Anivia","Annie","Aphelios","Ashe","Aurelion Sol","Azir","Bardo","Blitzcrank","Brand","Braum","Caitlyn","Camille","Cassiopeia","Cho'Gath","Corki","Darius","Diana","Dr. Mundo","Draven","Ekko","Elise","Evelynn","Ezreal","Fiddlesticks","Fiora","Fizz","Galio","Gangplank","Garen","Gnar","Gragas","Graves","Gwe","Hecarim","Heimerdinger","Illaoi","Irelia","Ivern","Janna","Jarvan IV","Jax","Jayce","Jhin","Jinx","Kai'Sa","Kalista","Karma","Karthus","Kassadin","Katarina","Kayle","Kayn","Kennen","Kha'Zix","Kindred","Kled","Kog'Maw","LeBlanc","Lee Sin","Leona","Lillia","Lissandra","Lucian","Lulu","Lux","Malphite","Malzahar","Maokai","Master Yi","Miss Fortune","Mordekaiser","Morgana","Nami","Nasus","Nautilus","Neeko","Nidalee","Nocturne","Nunu and Willump","Olaf","Orianna","Ornn","Pantheon","Poppy","Pyke","Qiyana","Quinn","Rakan","Rammus","Rek'Sai","Rell","Renekton","Rengar","Riven","Rumble","Ryze","Samira","Sejuani","Senna","Seraphine","Sett","Shaco","Shen","Shyvana","Singed","Sion","Sivir","Skarner","Sona","Soraka","Swain","Sylas","Syndra","Tahm Kench","Taliyah","Talon","Taric","Teemo","Thresh","Tristana","Trundle","Tryndamere","Twisted Fate","Twitch","Udyr","Urgot","Varus","Vayne","Veigar","Vel'Koz","Vi","Viego","Viktor","Vladimir","Volibear","Warwick","Wukong","Xayah","Xerath","Xin Zhao","Yasuo","Yone","Yorick","Yuumi","Zac","Zed","Ziggs","Zilean","Zoe","Zyra"];
        var leagueToplaners = ["Aatrox","Akali","Aurelion Sol","Camille","Cho'Gath","Darius","Dr. Mundo","Fiora","Gangplank","Garen","Gnar","Gragas","Gwen","Heimerdinger","Illaoi","Irelia","Jax","Jayce","Karma","Katarina","Kayle","Kennen","Kled","Lee Sin","Lucian","Lulu","Malphite","Maokai","Mordekaiser","Nasus","Nocturne","Ornn","Pantheon","Poppy","Quinn","Renekton","Rengar","Riven","Rumble","Ryze","Sett","Shaco","Shen","Singed","Sion","Swain","Sylas","Tahm Kench","Teemo","Trundle","Tryndamere","Urgot","Vayne","Viego","Vladimir","Volibear","Wukong","Warwick","Yasuo","Yone","Yorick"];
        var toplaneNames = ["top", "a parte de cima", "rota mais alta"];
        var leagueJunglers = ["Amumu","Brand","Darius","Diana","Ekko","Elise","Evelynn","Fiddlesticks","Gragas","Graves","Gwen","Hecarim","Ivern","Jarvan IV","Jax","Karthus","Kayn","Kha'Zix","Kindred","Lee Sin","Lillia","Master Yi","Mordekaiser","Morgana","Nidalee","Nocturne","Nunu and Willump","Olaf","Rammus","Rek'Sai","Rengar","Rumble","Sejuani","Shaco","Shyvana","Skarner","Taliyah","Trundle","Udyr","Vayne","Vi","Viego","Volibear","Warwick","Xin Zhao","Zac"];
        var jungleNames = ["jg", "jungle", "jungler", "selva", "caçador", "selvagem", "indio", "lane do mato", "pve", "desbravador", "indio"];
        var leagueMidlaners = ["Aatrox","Ahri","Akali","Anivia","Annie","Aurelion Sol","Azir","Brand","Camille","Cassiopeia","Cho'Gath","Corki","Diana","Ekko","Fizz","Galio","Gwen","Heimerdinger","Irelia","Ivern","Karma","Karthus","Kassadin","Katarina","Kayle","Kennen","LeBlanc","Lissandra","Lucian","Lulu","Lux","Malphite","Malzahar","Mordekaiser","Morgana","Neeko","Nocturne","Orianna","Pantheon","Qiyana","Ryze","Seraphine","Sett","Swain","Sylas","Syndra","Taliyah","Talon","Teemo","Tristana","Twisted Fate","Urgot","Varus","Veigar","Vel'Koz","Viego","Viktor","Vladimir","Xerath","Yasuo","Yone","Zed","Ziggs","Zilean","Zoe","Zyra"];
        var midNames = ["mid", "midlane", "midlaner", "meio", "centro", "midzinho", "midzera", "midzao"];
        var leagueADCarrys = ["Aphelios","Ashe","Caitlyn","Draven","Ezreal","Jhin","Jinx","Kai'Sa","Kalista","Kindred","Kog'Maw","Lucian","Lux","Miss Fortune","Samira","Senna","Sivir","Swain","Teemo","Tristana","Twitch","Varus","Vayne","Veigar","Xayah","Yasuo"];
        var adcNames = ["adc", "adcarry", "atirador", "squishy"];
        var leagueSupports = ["Alistar","Anivia","Annie","Ashe","Bardo","Blitzcrank","Brand","Braum","Fiddlesticks","Galio","Gragas","Janna","Karma","Leona","Lulu","Lux","Maokai","Morgana","Nami","Nautilus","Pantheon","Poppy","Pyke","Rakan","Rell","Senna","Seraphine","Sett","Shaco","Shen","Sona","Soraka","Swain","Sylas","Tahm Kench","Taric","Teemo","Thresh","Veigar","Xerath","Yuumi","Zilean","Zoe","Zyra"];
        var leagueRoles = ["Toplane", "Jungle", "Midlane", "ADCarry", "Support"];
        var supportNames = ["sup", "ajudante", "inutil", "rouba kill"];
        var initialSentences = ["vai de ", "tu não era o brabo de ", "acho que rola tu ir de ", "duvido tu pegar ", "quero que tu vá de ", "manda ", "te fode vai de ", "mete "];
        var inspiringSentences = [", é win na certa!", ", tu não é muito bom mas acho que dá", ", seu merda", ", esse é brabo", ", é meta né mano!"];
        
        var emojiTopID = "<:top:837484454830145577>";
        var emojiJungleID = "<:jg:837484455002243072>";
        var emojiMidID = "<:mid:837484455203438622>";
        var emojiADCarryID = "<:bot:837484692839858206>";
        var emojiSupportID = "<:sup:837484454984417350>";

        for (let i = 0; i < 20; i++) 
        {
            if(msgLowerCase.includes(toplaneNames[i]))
            {
                msg.reply(RandomIndex(initialSentences) + RandomIndex(leagueToplaners) + RandomIndex(inspiringSentences));
                break;
            }else
            if(msgLowerCase.includes(jungleNames[i]))
            {
                msg.reply(RandomIndex(initialSentences) + RandomIndex(leagueJunglers) + RandomIndex(inspiringSentences));
                break;
            }else
            if(msgLowerCase.includes(midNames[i]))
            {
                msg.reply(RandomIndex(initialSentences) + RandomIndex(leagueMidlaners) + RandomIndex(inspiringSentences));
                break;
            }else
            if(msgLowerCase.includes(adcNames[i]))
            {
                msg.reply(RandomIndex(initialSentences) + RandomIndex(leagueADCarrys) + RandomIndex(inspiringSentences));
                break;
            }else
            if(msgLowerCase.includes(supportNames[i]))
            {
                msg.reply(RandomIndex(initialSentences) + RandomIndex(leagueSupports) + RandomIndex(inspiringSentences));
                break;
            }
        }
            if (msgLowerCase.includes("comp") && msgLowerCase.includes("aleatoria"))
            {
                msg.reply(
                    "Boa sorte!\n\n" + emojiTopID + RandomIndex(leagueChampions) +
                    "\n " + emojiJungleID + RandomIndex(leagueChampions) +
                    "\n  " + emojiMidID + RandomIndex(leagueChampions) +
                    "\n " + emojiADCarryID + RandomIndex(leagueChampions) +
                    "\n" + emojiSupportID + RandomIndex(leagueChampions));
            }else            
            if (msgLowerCase.includes("comp"))
            {
                msg.reply(
                    "Tá na mão meu compatriota!\n\n" + emojiTopID + RandomIndex(leagueToplaners) +
                    "\n " + emojiJungleID + RandomIndex(leagueJunglers) +
                    "\n  " + emojiMidID + RandomIndex(leagueMidlaners) +
                    "\n " + emojiADCarryID + RandomIndex(leagueADCarrys) +
                    "\n" + emojiSupportID + RandomIndex(leagueSupports));
            }else
            if(msgLowerCase.includes("role"))
            {
                msg.reply(RandomIndex(leagueRoles));
            }

        function RandomIndex(array) 
        {
            var randomIndex = Math.floor(Math.random() * array.length);
            
            return array[randomIndex];
        }
    }
 }