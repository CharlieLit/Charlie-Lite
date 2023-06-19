let handler = async (m, { conn, usedPrefix }) => {
var doc = ['pdf','zip','vnd.openxmlformats-officedocument.presentationml.presentation','vnd.openxmlformats-officedocument.spreadsheetml.sheet','vnd.openxmlformats-officedocument.wordprocessingml.document']
var document = doc[Math.floor(Math.random() * doc.length)]    
let text = `*https://github.com/CharlieLit/Charlie-Lite.git*`
let buttonMessage= {
'document': { url: `https://github.com/CharlieLit/Charlie-Lite.git` },
'mimetype': `application/${document}`,
'fileName': `「  𝑯𝒆𝒍𝒍𝒐 𝑾𝒐𝒓𝒍𝒅 」`,
'fileLength': 99999999999999,
'pageCount': 200,
'contextInfo': {
'forwardingScore': 200,
'isForwarded': true,
'externalAdReply': {
'mediaUrl': 'https://github.com/CharlieLit/Charlie-Lite.git',
'mediaType': 2,
'previewType': 'pdf',
'title': '𝙲𝙷𝙰𝚁𝙻𝙸𝙴-𝙻𝙸𝚃𝙴',
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
handler.command = ['sc','script']
handler.register = true
export default handler
