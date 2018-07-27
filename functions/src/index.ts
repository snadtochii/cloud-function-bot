import * as functions from 'firebase-functions';
import { Telegram } from 'telegraf';

const bot = new Telegram(functions.config().bot.token, {});

export const helloWorld = functions.https.onRequest((req, res) => {
  res.end();
  return bot.sendMessage(functions.config().bot.chat, messageHandler(req.body));
});

function messageHandler(body) {
  return `Did you said ${body.message.text}?`;
}
