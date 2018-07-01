const Discord = require('discord.js');
const bot = new Discord.Client();
const request = require('request');
const client = require('discord-rich-presence')('328514801124900866');
 

var prefix = ("fnt ");

bot.on('ready', () => {
	bot.user.setGame("Pour vous servir !");
	bot.user.setUsername("FortniteTrade 🇫🇷");
	client.updatePresence({
  state: 'slithering',
  details: '🐍',
  startTimestamp: Date.now(),
  endTimestamp: Date.now() + 1337,
  largeImageKey: 'snek_large',
  smallImageKey: 'snek_small',
  instance: true,
});
});


//EMOJIS
const knuckles = bot.emojis.get("432968588383748116");
const lolidragon = bot.emojis.get("433289550375419904");
const dab = bot.emojis.get("432915228947120129");

bot.login(process.env.TOKEN);

bot.on('message', message => {
	
    if(message.author.bot) return;
	
    let msg = message.content.toUpperCase();
    let sender = message.author;
    let cont = message.content.slice(prefix.length).split(" ");
    let args = cont.slice(1);
	

    
	
	if (message.content.startsWith(prefix + "fnbr shop")) {
	message.delete();
		var embedX = new Discord.RichEmbed()
	    .setImage("http://orcz.com/images/c/cc/FortniteBattleRoyaleItemShopScreen.jpg")
            .setColor("0xF4D14F")
	    .setFooter("pour " + message.author.username , message.author.avatarURL)
    
            message.channel.sendEmbed(embedX);
		
	}
	
    if (message.content.startsWith(prefix + "sondage")) {
	    

	    if (!message.member.hasPermission("MANAGE_MESSAGES")) {
                return;
            }
	message.delete();
	    
        let args = message.content.split(" ").slice(1);
        let thingToEcho = args.join(" ");
        var embedS = new Discord.RichEmbed()
            .setTitle("SONDAGE")
	    .setDescription("Question de "+ message.author)
	    .setThumbnail("https://qph.fs.quoracdn.net/main-qimg-49b8b38b8301a67c52f18ab79d927827.webp")
            .addField(thingToEcho + " ", "Répondre avec :white_check_mark: ou :x:\n ", false)
            .setColor("0xB40404")
            .setTimestamp();
        message.channel.sendEmbed(embedS)
        .then(function (message) {
        message.react("✅");
        message.react("❌");
     });
     }

    if (msg.startsWith(prefix + 'SUPPR')) {

        async function purge() {
            message.delete();

            if (!message.member.hasPermission("MANAGE_MESSAGES")) {
                return;
            }

            if (isNaN(args[0])) {

                message.channel.send("Merci d'utiliser un nombre !\n ```\n " + prefix + "suppr <nombre de messages à supprimer>\n```");
		    return;
	        }

            const fetched = await message.channel.fetchMessages({limit: args[0]});
            console.log(fetched.size + " messages found, deleting...");

            message.channel.bulkDelete(fetched)
                .catch(error => message.channel.send(`Erreur: ${error}`));

        }

        purge();

    }
    
    if (message.content === prefix + "aide"){
        var embed2 = new Discord.RichEmbed()
		.setThumbnail("http://i.imgur.com/9eIhQvf.gif")
		.setTitle("AIDE")
		.setDescription("COMMANDES")
		.addField("UTILES", "`*INFO` (pour voir les informations du serveurs)\n`*aide` (bah... pour l'aide quoi.)\n`*SONDAGE <question>` (pour faire un sondage)")
		.addField("FORTNITE", "\`*DUO / *SQUAD\` (Pour faire une recherche de joueurs)\n`*TRADE`")
		.setColor("0xF4D14F")
		.setFooter("BOT CRÉÉ PAR MISTIGRIX")
        message.channel.sendEmbed(embed2);
    }
	
	
    if (msg.startsWith(prefix + "DUO")) {
	
	
	var multi = bot.emojis.get("434047602602803200");
	    
	message.delete();
	    
        let args = message.content.split(" ").slice(1);
        let thingToEcho = args.join(" ");
        var embed = new Discord.RichEmbed()
            .setTitle("RECHERCHE D'UN JOUEUR POUR DUO")
	    .setDescription("Recherche par "+ message.author)
	    .setThumbnail("https://images.emojiterra.com/emojione/v2/128px/1f579.png")
            .addField(`Réagissez avec ${multi} si vous êtes intéressé(e)`, false)
            .setColor("0xB40404")
            .setTimestamp();
        message.channel.sendEmbed(embed)
        .then(function (message) {
        message.react(multi);
     });
     }

  if (msg.startsWith(prefix + "SQUAD")) {
	
	
	var multi = bot.emojis.get("434047602602803200");
	    
	message.delete();
	    
        let args = message.content.split(" ").slice(1);
        let thingToEcho = args.join(" ");
        var embed = new Discord.RichEmbed()
            .setTitle("RECHERCHE DE JOUEURS POUR SQUAD")
	    .setDescription("Recherche par "+ message.author)
	    .setThumbnail("https://images.emojiterra.com/emojione/v2/128px/1f579.png")
            .addField(`Réagissez avec ${multi} si vous êtes intéressé(e)`, false)
            .setColor("0xB40404")
            .setTimestamp();
        message.channel.sendEmbed(embed)
        .then(function (message) {
        message.react(multi);
     });
     }

   //  if (msg.startsWith(prefix + "CHAT")) {
              //message.delete();

              //var options = {
                //method: "GET",
                //url: `http://aws.random.cat/meow`,
              //};
            //  
          //    request.get(options, (error, response, body) => {
        //            var file = JSON.parse(body);
          //          message.channel.sendFile(file.file);
      //        });
    // }
	if (message.content.includes("TG") || message.content.includes("FTG") || message.content.includes("NTM") || message.content.includes("FDP") || message.content.includes("PUTE") || message.content.includes("SALOPE") || message.content.includes("CONNARD") || message.content.includes("SALOP") || message.content.includes("PUTAIN") || message.content.includes("TA GUEULE") || message.content.includes("BITE") || message.content.includes("CUL") || message.content.includes("tg") || message.content.includes("ftg") || message.content.includes("ntm") || message.content.includes("fdp") || message.content.includes("pute") || message.content.includes("salope") || message.content.includes("connard") || message.content.includes("salop") || message.content.includes("putain") || message.content.includes("ta gueule") || message.content.includes("bite") || message.content.includes("cul")){
        	if (message.channel.nsfw === false) {
		message.react(bot.emojis.get("433316429044121601"));
	}
	}
	
    if (message.content.startsWith(prefix + "supersondage")) {
	
	if (!message.member.hasPermission("MANAGE_MESSAGES")) {
                return;
	}
            
	message.delete();
	    
        let args = message.content.split(" ").slice(1);
        let thingToEcho = args.join(" ");
        var embed = new Discord.RichEmbed()
            .setTitle("SUPER SONDAGE")
	    .setDescription("Question de " + message.author + " pour @everyone")
	    .setThumbnail("https://qph.fs.quoracdn.net/main-qimg-49b8b38b8301a67c52f18ab79d927827.webp")
            .addField(thingToEcho + " ", "Répondre avec :white_check_mark: ou :x:\n ", false)
            .setColor("0xB40404")
            .setTimestamp();
        message.channel.sendEmbed(embed)
        .then(function (message) {
        message.react("✅");
        message.react("❌");
     });
     }
	
if (message.content.startsWith(prefix + "annonce")){
	 
	let args = message.content.split(" ").slice(1);
        let thingToEcho = args.join(" ");
	 
	if (!message.member.hasPermission("MANAGE_MESSAGES")) {
                return;
	}
	 
        var embed2 = new Discord.RichEmbed()
		.setThumbnail("https://image.noelshack.com/fichiers/2018/16/6/1524330497-annonce.png")
		.setTitle(thingToEcho)
		.setDescription("@everyone")
		.setTimestamp()
		.setColor("cc55ee")
        message.channel.sendEmbed(embed2);
    }
 	if (msg.startsWith("GG ")){
		var nam = message.mentions.members.first();
		if (message.content == "GG " + nam){
		message.delete();
        	var embed = new Discord.RichEmbed()
			.setAuthor(" ", message.author.avatarURL)
			.setThumbnail("http://image.noelshack.com/fichiers/2017/19/1494546676-tumblr-nm6cjahjur1upa971o1-400.gif")
			.setTitle("Bien ouèj !")
			.setDescription(message.author + " félicite " + message.mentions.members.first() + "!")
			.setColor("0xF4D14F")
       		message.channel.sendEmbed(embed);
		}
		if (message.content == "gg " + nam){
		message.delete();
        	var embed = new Discord.RichEmbed()
			.setAuthor(" ", message.author.avatarURL)
			.setThumbnail("http://image.noelshack.com/fichiers/2017/19/1494546676-tumblr-nm6cjahjur1upa971o1-400.gif")
			.setTitle("Bien ouèj !")
			.setDescription(message.author + " félicite " + message.mentions.members.first() + "!")
			.setColor("0xF4D14F")
       		message.channel.sendEmbed(embed);
		}
    

    }

	if (msg.startsWith("GL ")){
		var nam = message.mentions.members.first();
		if (message.content == "gl " + nam){
		message.delete();
        	var embed = new Discord.RichEmbed()
			.setAuthor(" ", message.author.avatarURL)
			.setThumbnail("https://orig00.deviantart.net/a222/f/2013/044/1/8/random_by_volteon999-d5utv80.gif")
			.setTitle("Bonne chance !")
			.setDescription(message.author + " souhaite bonne chance à " + message.mentions.members.first() + " !")
			.setColor("417b3e")
       		message.channel.sendEmbed(embed);
		}
		if (message.content == "GL " + nam){
		message.delete();
        	var embed = new Discord.RichEmbed()
			.setAuthor(" ", message.author.avatarURL)
			.setThumbnail("https://orig00.deviantart.net/a222/f/2013/044/1/8/random_by_volteon999-d5utv80.gif")
			.setTitle("Bonne chance !")
			.setDescription(message.author + " souhaite bonne chance à " + message.mentions.members.first() + " !")
			.setColor("417b3e")
       		message.channel.sendEmbed(embed);
		}

    }

	
	if (message.content.startsWith(prefix + "fnbr pass")) {
	message.delete();
		var embedX = new Discord.RichEmbed()
	    .setTitle("FORTNITE | PASSE DE COMBAT")
	    .setDescription("SAISON 4")
	    .setImage("https://drive.google.com/file/d/1-J_txaZgXC0FckxmjjUcL9G6pTCSpDK_/view?usp=sharing")
            .setColor("0xF4D14F")
	    .setFooter("pour " + message.author.username , message.author.avatarURL)
    
            message.channel.sendEmbed(embedX);
		
	}
	
});

bot.on('messageReactionAdd', (reaction, user) => {
	
var multi = bot.emojis.get("434047602602803200");
	
    if(reaction.emoji.identifier === "434047602602803200") {
	var author = reaction.message.mentions.members.first();
	var reactor = reaction.user
	author.sendMessage( "Quelqu'un est partant pour faire une partie avec toi !");
    }
});
