const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID || "FAIZAN-MD~eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiNExVb3o2KzhxWEd1RFhmOTYrMHFYTXh5cHhHQkp0akdQNUpZakNobS9Hcz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiL1Q1MjVnd09pRFpOMmc3YmJGdzRDOGRnM3ZJS0wxV2NFTGVBRXBXNnRSYz0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJpS0x2SHRTNllVNzBIQzdNYW5lU1lieW9BdWlqL3NTeVZBRUh0d2hJemx3PSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJxY00wZXlReDdMbXdXNmE2REJ5aTRhMUFUTDlBTWI4NEFRS3dqbUovSDBFPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkdGczVLSTNzd09NU3ZhaXRqaE9yMDNZcTk5TXNWUFJsM2RsTjhPczNkV2s9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IllkdVFNVXdaZmNDZ3h6SGs2K1JFalg2bFlxRFBGMlhuZHZ4L2kxaXJLR2c9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiZUVXYTJVK3J2ZU1rSFk1eWRnR0JYTXNZVlJZdzJZdW1oVGdxNXFJQlVIVT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiZXQ1Q2M1U09obTJSa0UzVTNFZUFOL2xUbktuRVRNbjErejgrdit5dWxVVT0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjJHeTFLZ3p2c2ljUlBJanFRbUowTjFkSGE0Z3pvRzdmNEVkWVBvVHRFZ2dZdFMxWHY5WVY5UWdHQkdld0VSRGVmNDhDdk0xbjNWZFVQMzROT1ZteUF3PT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MjUxLCJhZHZTZWNyZXRLZXkiOiJFQWNIREZiSE1lbDgwcmd4cUR6TGNlbEJYV3VmYXFXTk05emNnN1NZNHhVPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W3sia2V5Ijp7InJlbW90ZUppZCI6Ijg4MDE4NjMyMjkyMjRAcy53aGF0c2FwcC5uZXQiLCJmcm9tTWUiOmZhbHNlLCJpZCI6IkE1Njk5MDg1NEE1QTkyQzFDMzQyNkFGOTQ5OENCOUU4IiwicGFydGljaXBhbnQiOiIiLCJhZGRyZXNzaW5nTW9kZSI6InBuIn0sIm1lc3NhZ2VUaW1lc3RhbXAiOjE3NzU2MzY5MjB9XSwibmV4dFByZUtleUlkIjo4MTMsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjo4MTMsImFjY291bnRTeW5jQ291bnRlciI6MCwiYWNjb3VudFNldHRpbmdzIjp7InVuYXJjaGl2ZUNoYXRzIjpmYWxzZX0sInJlZ2lzdGVyZWQiOnRydWUsInBhaXJpbmdDb2RlIjoiUUQ0QllCWloiLCJtZSI6eyJpZCI6Ijg4MDE4NjMyMjkyMjQ6MTNAcy53aGF0c2FwcC5uZXQiLCJuYW1lIjoi4oOd4oOk8J2QmfCdkIDwnZCH8J2QiPCdkIMiLCJsaWQiOiI3MTY3NTA1MTgxMDk2MDoxM0BsaWQifSwiYWNjb3VudCI6eyJkZXRhaWxzIjoiQ1BpZHh2OEdFS3VqMk00R0dBRWdBQ2dBIiwiYWNjb3VudFNpZ25hdHVyZUtleSI6IjdaWCtpbG1CTzQ5YzdCQWF4TGVtQ1ZSbmJaNTVMRU5WNnFYeTdVdk5xZzg9IiwiYWNjb3VudFNpZ25hdHVyZSI6IkF3Tm1hTWJZb1pCN2VJamFSaFF2K0ZpU3VnbHIrZW9nUXQ1Tk4xQU9oUlE3WU1vRTBuaUVwUXd5OThWNTF4WGlDQkEvTzNzZnFNbTU5ckpsOGd0ZUJ3PT0iLCJkZXZpY2VTaWduYXR1cmUiOiJlRmVSK3MxSTk4MUJEb1h4aVR2NWxMbW4wakU4bERXRG9PUmRKQ09SdVpGbC9raG55TUlyWTZ1ZUd4UUFnY3VJU1c0Zlc4UHlyamNnMENITkNFSCtCUT09In0sInNpZ25hbElkZW50aXRpZXMiOlt7ImlkZW50aWZpZXIiOnsibmFtZSI6IjcxNjc1MDUxODEwOTYwOjEzQGxpZCIsImRldmljZUlkIjowfSwiaWRlbnRpZmllcktleSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJlMlYvb3BaZ1R1UFhPd1FHc1MzcGdsVVoyMmVlU3hEVmVxbDh1MUx6YW9QIn19XSwicGxhdGZvcm0iOiJzbWJhIiwicm91dGluZ0luZm8iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJDQklJRFFnRiJ9LCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXAiOjE3NzU2MzY5MTQsImxhc3RQcm9wSGFzaCI6IjNtbDFqUyIsIm15QXBwU3RhdGVLZXlJZCI6IkFBQUFBQzJFIn0=",
// add your Session Id 
AUTO_STATUS_SEEN: process.env.AUTO_STATUS_SEEN || "true",
// make true or false status auto seen
AUTO_STATUS_REPLY: process.env.AUTO_STATUS_REPLY || "false",
// make true if you want auto reply on status 
AUTO_STATUS_REACT: process.env.AUTO_STATUS_REACT || "true",
// make true if you want auto reply on status 
AUTO_STATUS_MSG: process.env.AUTO_STATUS_MSG || "*SEEN YOUR STATUS BY ZAHID-BOT*",
// set the auto reply massage on status reply  
ANTI_DELETE: process.env.ANTI_DELETE || "true",
// set true false for anti delete     
ANTI_DEL_PATH: process.env.ANTI_DEL_PATH || "inbox", 
// change it to 'same' if you want to resend deleted message in same chat     
WELCOME: process.env.WELCOME || "false",
// true if want welcome and goodbye msg in groups    
ADMIN_EVENTS: process.env.ADMIN_EVENTS || "false",
// make true to know who dismiss or promoted a member in group
ANTI_LINK: process.env.ANTI_LINK || "true",
// make anti link true,false for groups 
MENTION_REPLY: process.env.MENTION_REPLY || "false",
// make true if want auto voice reply if someone menetion you 
MENU_IMAGE_URL: process.env.MENU_IMAGE_URL || "https://files.catbox.moe/ejufwa.jpg",
// add custom menu and mention reply image url
PREFIX: process.env.PREFIX || ".",
// add your prifix for bot   
BOT_NAME: process.env.BOT_NAME || "ZAHID-BOT⁸⁷³_",
// add bot name here for menu
AUTO_STATUS_REACT: process.env.AUTO_STATUS_REACT || "true",
// true to get auto status react
STICKER_NAME: process.env.STICKER_NAME || "ZAHID-BOT",
// type sticker pack name 
CUSTOM_REACT: process.env.CUSTOM_REACT || "false",
// make this true for custum emoji react    
CUSTOM_REACT_EMOJIS: process.env.CUSTOM_REACT_EMOJIS || "🪄,💖,💗,❤️‍🩹,🫀,🧡,💛,💚,💙,💜,🤎,🖤,🤍",
// chose custom react emojis by yourself 
DELETE_LINKS: process.env.DELETE_LINKS || "false",
// automatic delete links witho remove member 
OWNER_NUMBER: process.env.OWNER_NUMBER || "923266105873",
// add your bot owner number
OWNER_NAME: process.env.OWNER_NAME || "ZAHID-BOT",
// add bot owner name
DESCRIPTION: process.env.DESCRIPTION || "*©ᴘᴏᴡᴇʀᴇᴅ ʙʏ ZAHID-BOT*",
// add bot owner name    
ALIVE_IMG: process.env.ALIVE_IMG || "https://files.catbox.moe/ejufwa.jpg",
// add img for alive msg
LIVE_MSG: process.env.LIVE_MSG || "> I'm alive*ZAHID-BOT*🇵🇰",
// add alive msg here 
READ_MESSAGE: process.env.READ_MESSAGE || "false",
// Turn true or false for automatic read msgs
AUTO_REACT: process.env.AUTO_REACT || "false",
// make this true or false for auto react on all msgs
ANTI_BAD: process.env.ANTI_BAD || "true",
// false or true for anti bad words  
MODE: process.env.MODE || "public",
// make bot public-private-inbox-group 
ANTI_LINK_KICK: process.env.ANTI_LINK_KICK || "false",
// make anti link true,false for groups 
AUTO_STICKER: process.env.AUTO_STICKER || "false",
// make true for automatic stickers 
AUTO_REPLY: process.env.AUTO_REPLY || "false",
// make true or false automatic text reply 
ALWAYS_ONLINE: process.env.ALWAYS_ONLINE || "false",
// maks true for always online 
PUBLIC_MODE: process.env.PUBLIC_MODE || "true",
// make false if want private mod
AUTO_TYPING: process.env.AUTO_TYPING || "false",
// true for automatic show typing   
READ_CMD: process.env.READ_CMD || "false",
// true if want mark commands as read 
DEV: process.env.DEV || "923266105873",
//replace with your whatsapp number        
ANTI_VV: process.env.ANTI_VV || "true",
// true for anti once view 
AUTO_RECORDING: process.env.AUTO_RECORDING || "false"
// make it true for auto recoding 
};
