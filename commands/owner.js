const path = require('path');
// process.cwd() hamesha project ke main (root) folder ka path nikalta hai
const settings = require(path.join(process.cwd(), 'settings.js')); 

async function ownerCommand(sock, from, msg) {
    const ownerText = `👤 *BOT OWNER:* ${settings.ownerName}\n` +
                    `📱 *923042264448:* +${settings.ownerNumber}\n` +
                    `🔗 *OFFICIAL WHATSAPP CHANNEL:*\n` +
                    `> *https://whatsapp.com/channel/0029Va9vZPV4CrfgE5QJjp0p*`;
    await sock.sendMessage(from, { text: ownerText }, { quoted: msg });
}

module.exports = ownerCommand;
