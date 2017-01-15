/**
 * @overview JC3MP Welcome Message
 * @author James Seden Smith
 * @copyright (c) James Seden Smith 2017
 * @license See LICENSE file
 */
'use strict';

var config = require('./config.json')

const chat = jcmp.events.Call('get_chat')[0]

console.log('Loaded Welcome Messages');

jcmp.events.Add('ClientConnected', client => {
  jcmp.players.forEach(player =>{
    if(player.client.name == client.name){
      chat.send(player, config.welcomeMessage, new RGB(255, 140, 0));
    }
  });
});
