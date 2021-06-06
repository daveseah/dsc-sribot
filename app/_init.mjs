/*///////////////////////////////// ABOUT \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\*\

  SRIBOT EXPLORATIONS
  https://discordjs.guide/creating-your-bot

\*\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\ * /////////////////////////////////////*/

/// CONSTANTS & DECLARATIONS //////////////////////////////////////////////////
/// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
import * as fs from 'fs';
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
client.on('message', async message => {
  const { guild, content } = message;
  console.log(`${guild.name}: ${content}`);
  if (message.content === '!ping') {
    // send back "Pong." to the channel the message was sent in
    if (message.member.voice.channel) {
      const connection = await message.member.voice.channel.join();

      // const dispatcher = connection.play('audio.mp3');
      // const file = './media/ogg/kenny-nl-preview.ogg';
      // const dispatcher = connection.play(fs.createReadStream(file), {
      //   type: 'ogg/opus'
      // });
      const file = './media/mp3/file-examples-com.mp3';
      const dispatcher = connection.play(file);

      dispatcher.on('start', () => {
        console.log(`${file} is now playing!`);
        message.channel.send(`**Playing:** ${file} (27 sec)...`);
      });

      dispatcher.on('finish', () => {
        console.log(`${file} has finished playing!`);
        message.channel.send(`**Finishing:** ${file}`);
      });

      // Always remember to handle errors appropriately!
      dispatcher.on('error', console.error);

      console.log(`voice channel detected - playing ${file}`);
    } else {
      message.channel.send('Pong.');
    }
  }
});

/// LOGIN TO DISCORD //////////////////////////////////////////////////////////
/// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
/// This lgos-in to all servers that have added this bot via the special
/// bot invite link generated on the discord.com/developer page
client.login(token);
