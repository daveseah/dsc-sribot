/*///////////////////////////////// ABOUT \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\*\

  SRIBOT EXPLORATIONS
  https://discordjs.guide/creating-your-bot

\*\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\ * /////////////////////////////////////*/

/// CONSTANTS & DECLARATIONS //////////////////////////////////////////////////
/// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
import { Client } from 'discord.js';
import { prefix, token } from '../config/bot-secrets.js';

/// INITIALIZE DISCORD HANDLERS ///////////////////////////////////////////////
/// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
const client = new Client();

/// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
/** handle event on connection */
client.once('ready', () => {
  console.log('Ready!');
});

/// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
/** handle incoming messages */
client.on('message', message => {
  const { guild, content } = message;
  console.log(`${guild.name}: ${content}`);
  if (message.content === '!ping') {
    // send back "Pong." to the channel the message was sent in
    message.channel.send('Pong.');
  }
});

/// LOGIN TO DISCORD //////////////////////////////////////////////////////////
/// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
/// This lgos-in to all servers that have added this bot via the special
/// bot invite link generated on the discord.com/developer page
client.login(token);
