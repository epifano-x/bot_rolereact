const Discord = require("discord.js"); //baixar a lib
const client = new Discord.Client(); 
const config = require("./config.json"); 
const { Client, RichEmbed } = require('discord.js');


client.on("ready", () => {
  console.log('BOT LIGADO')
  let status = [
    {name:`${client.users.size} pessoas!`, type: 'LISTENING'},
    {name:`tw.tv`, type: 'STREAMING', url:'https://twitch.tv/epifanovz'},
]
function setStatus(){ //Função para o BOT mudar de Status aleatoriamente
    let randomStatus = status[Math.floor(Math.random()*status.length)]
    client.user.setPresence({game: randomStatus})
}
setStatus();
setInterval(() => setStatus(),4000)
})



// react de colect por async


client.on('raw', async dados => {
  if(dados.t !== "MESSAGE_REACTION_ADD" && dados.t !== "MESSAGE_REACTION_REMOVE") return
  if(dados.d.message_id != "675427555024699394") return// id da mensagem aonde a reaçao ocorera

  let servidor = client.guilds.get("640691876894212107")// id do servidor 
  let membro = servidor.members.get(dados.d.user_id)

  let cargo1 = servidor.roles.get('640703601303617566')// id do cargo designado
  let cargo2 = servidor.roles.get('672803069670588438')// id do cargopara remover 

  if(dados.t === "MESSAGE_REACTION_ADD"){
      if(dados.d.emoji.id === "672801464355258421"){//id do emoji utilizado
          membro.addRole(cargo1)
          membro.removeRole(cargo2)
      }
  }
})



//client.on('raw', console.log)

client.login(config.token);
