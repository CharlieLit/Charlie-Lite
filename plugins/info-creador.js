let handler = async (m, { conn, usedPrefix }) => {
var doc = ['pdf','zip','vnd.openxmlformats-officedocument.presentationml.presentation','vnd.openxmlformats-officedocument.spreadsheetml.sheet','vnd.openxmlformats-officedocument.wordprocessingml.document']
var document = doc[Math.floor(Math.random() * doc.length)]    
let text = `╭─「➻❥ *Creador de CharlieLite* ➻❥」
│➯ 𝙲𝙷𝙰𝚁𝙻𝙸𝙴-𝙻𝙸𝚃𝙴
│➯Wa.me/519941560047 (CREADOR)
│➯Wa.me/51994156047 (CREADOR) 
│➯Wa.me/51994156047 (CREADOR)
│➯Wa.me/51994156047 (CREADOR)
╰───────────────╯`.trim()   
let buttonMessage= {
'document': { url: `https://github.com/CharlieLit/Charlie-Lite` },
'mimetype': `application/${document}`,
'fileName': `𝙲𝙷𝙰𝚁𝙻𝙸𝙴-𝙻𝙸𝚃𝙴`,
'fileLength': 99999999999999,
'pageCount': 200,
'contextInfo': {
'forwardingScore': 200,
'isForwarded': true,
'externalAdReply': {
'mediaUrl': 'https://github.com/CharlieLit/Charlie-Lite',
'mediaType': 2,
'previewType': 'pdf',
'title': 'ᴇʟ ᴍᴇᴊᴏʀ ʙᴏᴛ ᴅᴇ ᴡʜᴀᴛsᴀᴘᴘ⁩',
'body': wm,
'thumbnail': imagen1,
'sourceUrl': 'https://youtu.be/4eA5nDxPjAE' }},
'caption': text,
'footer': wm,
//'buttons':[
//{buttonId: `${usedPrefix}menu`, buttonText: {displayText: '𝙼𝙴𝙽𝚄'}, type: 1}, 
//{buttonId: `${usedPrefix}donar`, buttonText: {displayText: '𝙳𝙾𝙽𝙰𝚁'}, type: 1}],
'headerType': 6 }
conn.sendMessage(m.chat, buttonMessage, { quoted: m })
}
handler.help = ['owner', 'creator']
handler.tags = ['info']
handler.command = /^(owner|creator|creador|propietario)$/i
handler.register = true
export default handler
