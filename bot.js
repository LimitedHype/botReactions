const Discord = require("discord.js");
const client = new Discord.Client();
const config = require("./config.json")



const prefix = "!";
client.on("message", message => {
    const args = message.content.slice(prefix.length).trim().split(/ +/g);
    const command = args.shift().toLowerCase();



    // AIO Bots & Shopify
    const cyber = client.emojis.get("");
    const dashe = client.emojis.get("");
    const eve = client.emojis.get("");
    const sole = client.emojis.get("");
    const tks = client.emojis.get("");
    const prism = client.emojis.get("");
    const pd = client.emojis.get("");
    const nsb = client.emojis.get("");
    const kodai = client.emojis.get("");
    const balko = client.emojis.get("");
    const whatBot = client.emojis.get("");
    const samurai = client.emojis.get("");
    const aiomoji = client.emojis.get("");
    const oculus = client.emojis.get("");
    const anb = client.emojis.get("");
    const proton = client.emojis.get("");



    // Supreme Bots 
    const sieu = client.emojis.get("");
    const f3 = client.emojis.get("");
    const hastey = client.emojis.get("");
    const trick = client.emojis.get("");
    const adept = client.emojis.get("");
    const h2o = client.emojis.get("");
    const chefAdar = client.emojis.get("");
    const candypreme = client.emojis.get("");
    const mekPreme = client.emojis.get("");
    const hytech = client.emojis.get("");
    const supreach = client.emojis.get("");
    const dotbot = client.emojis.get("");



    // Supreme Mobile bots
    const plugged = client.emojis.get("");
    const taskbot = client.emojis.get("");
    const supbot = client.emojis.get("");
    const copGod = client.emojis.get("");
    const quickCop = client.emojis.get("");
    const SwiftPreme = client.emojis.get("");
    const swayyper = client.emojis.get("");
    const motion = client.emojis.get("");
    const swiftSole = client.emojis.get("");




    // SNRKRS Bots
    const ghost = client.emojis.get("");
    const bnb = client.emojis.get("");
    const mobile = client.emojis.get("");
    const pc = client.emojis.get("");


    // Adidas Bots 

    const adisplash = client.emojis.get("");
    const latch = client.emojis.get("");
    const yCopp = client.emojis.get("");
    const splashForce = client.emojis.get("");
    const rocket = client.emojis.get("");
    const phantom = client.emojis.get("");




    // Misc 
    const takeTheL = client.emojis.get("");



    // Supreme Bots
    if (command === "recap" && (message.author.id === "285950162243813377")) {

        message.channel.send({
            embed: {

                color: 0x00d00d,
                description: "Please react with the bot you had success with",
                author: {
                    name: client.user.username,
                    icon_url: client.user.avatarURL,

                },
                fields: [{
                    name: sieu + "    **Sieupreme**",
                    value: "\u200b",
                },
                {
                    name: f3 + "    **F3**",
                    value: "\u200b",
                },
                {
                    name: hastey + "    **Hastey**",
                    value: "\u200b",
                },
                {
                    name: trick + '    **Trick**',
                    value: "\u200b"
                },
                {
                    name: adept + '    **Adept**',
                    value: "\u200b"
                },
                {
                    name: h2o + "    **H2O**",
                    value: "\u200b"
                },
                {
                    name: chefAdar + "    **Chef Adar**",
                    value: "\u200b"
                },
                {
                    name: candypreme + "    **Candypreme**",
                    value: "\u200b"
                },
                {
                    name: mekPreme + "    **Mekpreme**",
                    value: "\u200b"
                },
                {
                    name: hytech + "    **hytech**",
                    value: "\u200b"
                },
                {
                    name: supreach + "    **Supreach**",
                    value: "\u200b"
                },
                {
                    name: dotbot + "    **Dot**",
                    value: "\u200b"
                },

                ],

                timestamp: new Date(),
                footer: {
                    icon_url: client.user.avatarURL,
                    text: "© Made by CharlieKicks " // at the foot of the embed


                }
            }
        }).then(embedMessage => {
            embedMessage.react(sieu);
            embedMessage.react(f3);
            embedMessage.react(hastey);
            embedMessage.react(trick);
            embedMessage.react(adept);
            embedMessage.react(h2o);
            embedMessage.react(chefAdar);
            embedMessage.react(candypreme);
            embedMessage.react(mekPreme);
            embedMessage.react(hytech);
            embedMessage.react(dotbot);

        })
    }
    // Supreme Mobile 
    if (command === "recapsmobile" && (message.author.id === "285950162243813377")) {

        message.channel.send({
            embed: {

                color: 0x00d00d,
                description: "Please react with the bot you had success with",
                author: {
                    name: client.user.username,
                    icon_url: client.user.avatarURL,

                },
                fields: [{
                    name: plugged + "    **Plugged IOS**",
                    value: "\u200b",

                },
                {
                    name: taskbot + "    **Taskbot IOS**",
                    value: "\u200b",
                },
                {
                    name: supbot + "    **Supbot IOS**",
                    value: "\u200b",
                },
                {
                    name: copGod + '    **Cop God IOS**',
                    value: "\u200b"
                },
                {
                    name: quickCop + '    **QuickCop IOS**',
                    value: "\u200b"
                },
                {
                    name: SwiftPreme + "    **Swiftpreme IOS**",
                    value: "\u200b"
                },
                {
                    name: swayyper + "    **Swayyper**",
                    value: "\u200b"
                },
                {
                    name: motion + "    **Motion IOS**",
                    value: "\u200b"
                },
                {
                    name: swiftSole + "    **SwiftSole IOS**",
                    value: "\u200b"
                },
                {
                    name: hytech + "    **Balko**",
                    value: "\u200b"
                },

                ],

                timestamp: new Date(),
                footer: {
                    icon_url: client.user.avatarURL,
                    text: "© Made by CharlieKicks " // at the foot of the embed


                }
            }
        }).then(embedMessage => {
            embedMessage.react(plugged);
            embedMessage.react(taskbot);
            embedMessage.react(supbot);
            embedMessage.react(copGod);
            embedMessage.react(quickCop);
            embedMessage.react(SwiftPreme);
            embedMessage.react(swayyper);
            embedMessage.react(motion);
            embedMessage.react(swiftSole);


        })
    }

    //  Nike SNKRS  
    if (command === "recapSNKRS" && (message.author.id === "285950162243813377")) {

        message.channel.send({
            embed: {

                color: 0x00d00d,
                description: "Please react with the bot you had success with",
                author: {
                    name: client.user.username,
                    icon_url: client.user.avatarURL,

                },
                fields: [{
                    name: anb + "    **ANB**",
                    value: "\u200b",
                },
                {
                    name: ghost + "    **Ghost**",
                    value: "\u200b",
                },
                {
                    name: bnb + "    **BNB**",
                    value: "\u200b",
                },
                {
                    name: mobile + '    **Mobile**',
                    value: "\u200b"
                },
                {
                    name: pc + '    **PC**',
                    value: "\u200b"
                },


                ],

                timestamp: new Date(),
                footer: {
                    icon_url: client.user.avatarURL,
                    text: "© Made by CharlieKicks " // at the foot of the embed


                }
            }
        }).then(embedMessage => {
            embedMessage.react(anb);
            embedMessage.react(ghost);
            embedMessage.react(bnb);
            embedMessage.react(mobile);



        })
    }
    // Shopify 
    if (command === "recaps" && (message.author.id === "285950162243813377")) {

        message.channel.send({
            embed: {

                color: 0x00d00d,
                description: "Please react with the bot you had success with ",
                author: {
                    name: client.user.username,
                    icon_url: client.user.avatarURL,

                },
                fields: [{
                    name: cyber + "    **Cyber**",
                    value: "\u200b",
                },
                {
                    name: dashe + "    **Dashe**",
                    value: "\u200b",
                },
                {
                    name: eve + "    **Eve AIO**",
                    value: "\u200b",
                },
                {
                    name: sole + '    **Sole AIO**',
                    value: "\u200b"
                },
                {
                    name: tks + '    **TheKickStation**',
                    value: "\u200b"
                },
                {
                    name: prism + "    **Prism**",
                    value: "\u200b"
                },
                {
                    name: pd + "    **Project Destroyer**",
                    value: "\u200b"
                },
                {
                    name: nsb + "    **NikeShoeBot**",
                    value: "\u200b"
                },
                {
                    name: kodai + "    **Kodai**",
                    value: "\u200b"
                },
                {
                    name: balko + "    **Balko**",
                    value: "\u200b"
                },
                {
                    name: whatBot + "    **Whatbot**",
                    value: "\u200b"
                },
                {
                    name: samurai + "    **Samurai Bypass**",
                    value: "\u200b"
                },
                {
                    name: aiomoji + "    **Aiomoji**",
                    value: "\u200b"
                },
                {
                    name: oculus + "    **Oculus AIO**",
                    value: "\u200b"
                },
                {
                    name: anb + "    **ANB AIO",
                    value: "\u200b"
                },
                {
                    name: proton + "    **Proton**",
                    value: "\u200b"
                },

                ],

                timestamp: new Date(),
                footer: {
                    icon_url: client.user.avatarURL,
                    text: "© Made by CharlieKicks " // at the foot of the embed


                }
            }
        }).then(embedMessage => {
            embedMessage.react(cyber);
            embedMessage.react(dashe);
            embedMessage.react(eve);
            embedMessage.react(sole);
            embedMessage.react(tks);
            embedMessage.react(prism);
            embedMessage.react(pd);
            embedMessage.react(nsb);
            embedMessage.react(kodai);
            embedMessage.react(balko);
            embedMessage.react(samurai);
            embedMessage.react(aiomoji);
            embedMessage.react(anb);
            embedMessage.react(proton);

        })
    }
    // Adidas 
    if (command === "recapadidas" && (message.author.id === "285950162243813377")) {

        message.channel.send({
            embed: {

                color: 0x00d00d,
                description: "Please react with the bot you had success with ",
                author: {
                    name: client.user.username,
                    icon_url: client.user.avatarURL,

                },
                fields: [{
                    name: adisplash + "    **Adisplash**",
                    value: "\u200b",
                },
                {
                    name: latch + "    **LatchKey**",
                    value: "\u200b",
                },
                {
                    name: yCopp + "    **yCopp**",
                    value: "\u200b",
                },
                {
                    name: sole + '    **Sole AIO**',
                    value: "\u200b"
                },
                {
                    name: pd + '    **Project Destroyer**',
                    value: "\u200b"
                },
                {
                    name: phantom + "    **Phantom**",
                    value: "\u200b"
                },
                {
                    name: anb + "    **ANB**",
                    value: "\u200b"
                },
                {
                    name: nsb + "    **NikeShoeBot**",
                    value: "\u200b"
                },
                {
                    name: kodai + "    **Kodai**",
                    value: "\u200b"
                },
                {
                    name: balko + "    **Balko**",
                    value: "\u200b"
                },
                {
                    name: splashForce + "    **SplashForce**",
                    value: "\u200b"
                },
                {
                    name: rocket + "    **RocketCop**",
                    value: "\u200b"
                },

                ],

                timestamp: new Date(),
                footer: {
                    icon_url: client.user.avatarURL,
                    text: "© Made by CharlieKicks " // at the foot of the embed


                }
            }
        }).then(embedMessage => {
            embedMessage.react(adisplash);
            embedMessage.react(latch);
            embedMessage.react(yCopp);
            embedMessage.react(sole);
            embedMessage.react(pd);
            embedMessage.react(phantom);
            embedMessage.react(anb);
            embedMessage.react(nsb);
            embedMessage.react(kodai);
            embedMessage.react(balko);
            embedMessage.react(splashForce);
            embedMessage.react(rocket);

        })
    }

    // Footsites 
    if (command === "recapfoot" && (message.author.id === "285950162243813377")) {

        message.channel.send({
            embed: {

                color: 0x00d00d,
                description: "Please react with the bot you had success with ",
                author: {
                    name: client.user.username,
                    icon_url: client.user.avatarURL,

                },
                fields: [{
                    name: cyber + "    **Cyber**",
                    value: "\u200b",
                },
                {
                    name: tks + "    **TheKickStation**",
                    value: "\u200b",
                },
                {
                    name: eve + "    **Eve AIO**",
                    value: "\u200b",
                },
                {
                    name: pd + '    **Project Destroyer**',
                    value: "\u200b"
                },
                {
                    name: nsb + '    **NikeShoeBot**',
                    value: "\u200b"
                },
                {
                    name: phantom + "    **Phantom**",
                    value: "\u200b"
                },
                {
                    name: anb + "    **ANB**",
                    value: "\u200b"
                },
                {
                    name: prism + "    **Prism**",
                    value: "\u200b"
                },

                ],

                timestamp: new Date(),
                footer: {
                    icon_url: client.user.avatarURL,
                    text: "© Made by CharlieKicks " // at the foot of the embed


                }
            }
        }).then(embedMessage => {
            embedMessage.react(cyber);
            embedMessage.react(tks);
            embedMessage.react(eve);
            embedMessage.react(pd);
            embedMessage.react(anb);
            embedMessage.react(phantom);
            embedMessage.react(prism);
            embedMessage.react(nsb);


        })
    }

    // Misc 
    if (command === "recapmisc" && (message.author.id === "285950162243813377")) {

        message.channel.send({
            embed: {

                color: 0x00d00d,
                description: "Please react according ",
                author: {
                    name: client.user.username,
                    icon_url: client.user.avatarURL,

                },
                fields: [{
                    name: "👋" + "    **Manual**",
                    value: "\u200b"
                },

                {
                    name: takeTheL + "    **took an L**",
                    value: "\u200b",
                },



                ],

                timestamp: new Date(),
                footer: {
                    icon_url: client.user.avatarURL,
                    text: "© Made by CharlieKicks " // at the foot of the embed


                }
            }
        }).then(embedMessage => {
            embedMessage.react("👋");
            embedMessage.react(takeTheL);


        })
    }

})

client.on('error', console.error);



client.login(config.token);
