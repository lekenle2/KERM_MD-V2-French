//#ENJOY BRO😍
const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });
global.audio = "";
global.video = "";
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "Kermd237@gmail.com";
global.location = "Douala, Cameroun";
global.mongodb = process.env.MONGODB_URL || "mongodb+srv://Rayan:<Emmanuel237>@cluster0.8twd0.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
global.allowJids = process.env.ALLOW_JID || "null";
global.blockJids = process.env.BLOCK_JID || "null";
global.DATABASE_URL = process.env.DATABASE_URL || "";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "Africa/Douala";
global.github = process.env.GITHUB || "https://github.com/Kgtech-cmr/KERM_MD-V2-French";
global.gurl = process.env.GURL || "https://whatsapp.com/channel/0029Vafn6hc7DAX3fzsKtn45";
global.website = process.env.GURL || "https://whatsapp.com/channel/0029Vafn6hc7DAX3fzsKtn45";
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/file/40ffc2a288542560c887c.jpg";
global.devs = "https://wa.me/237650564445 , https://wa.me/237656520674";
global.sudo = process.env.SUDO || "526641866111";
global.owner = process.env.OWNER_NUMBER || "526641866111";
global.style = process.env.STYLE || "3";
global.gdbye = process.env.GOODBYE || "false";
global.wlcm = process.env.WELCOME || "false";
global.warncount = process.env.WARN_COUNT || 3;
global.disablepm = process.env.DISABLE_PM || "false";
global.disablegroup = process.env.DISABLE_GROUPS || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG || "false";
global.userImages = process.env.USER_IMAGES || "https://files.catbox.moe/kbc224.mp4,https://files.catbox.moe/dhii42.mp4,https://files.catbox.moe/lgj91g.mp4,https://files.catbox.moe/hvjoe6.mp4,https://files.catbox.moe/4ogeum.mp4,https://files.catbox.moe/0cmaxl.jpg";
global.waPresence = process.env.WAPRESENCE || "recording";
global.readcmds = process.env.READ_COMMAND || "true";
global.readmessage = process.env.READ_MESSAGE || "false";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "";
global.read_status = process.env.AUTO_READ_STATUS || "true";
global.save_status = process.env.AUTO_SAVE_STATUS || "false";
global.save_status_from = process.env.SAVE_STATUS_FROM || "";
global.read_status_from = process.env.READ_STATUS_FROM || "";

global.api_smd = "https://api-smd-1.vercel.app";
global.scan = "https://kgtech-v2-session.onrender.com";

global.SESSION_ID =
  process.env.SESSION_ID ||
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiRU9mWEtsbU9ZVkdubnI4Q3REay9pZmFKQlV4SXZjVUpCUTJ3RnRWWUVGST0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiZ3pldkZKeC9aM3VJZVpNeS9MSE44TVlZRjN0K0s3azVHc3lENTNna2NsWT0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJ1SkNLYjd4YjRkZlNOWHZ2a3grYVNsZDBkeG9QR1hwMENXcHQ0UmJWV25jPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJkUVlEdGdaVzFmUkJOTUZZU21ZRE9pZVIwTU81TkkwcGtIR3p1UlFYUHpzPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkNPT3lzTlZ1WUlMM2FON1U3aDdYTHZobTh0RmpmYmozeUtpTGdzVTlLMjA9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImU4VnBNMUZTb1lkZk1hemdhcW5FcUFzbUVYSTJSZkgrTEFzb2pVdXJVVEU9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiaU40S3I2Lzk4Y1RLVzM3YnUxQUFIcWxWWVNIdEZHanhSOFplVG40VVUyST0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoianFMS1Jwd2xiZ2d5ODVSaDdlbjFXdm9OZ1k2T0JyN0pmRE9VbkFGcUgyOD0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IllFY24vendIOGcxclRuL2wrZTdGaVl4L08wUldtOUd1a1d0Z3JzQ2ZKS2dVRnRTSUltOTd2R01lL0xqazRIOFhoS2F6U2NqZEs5bk1Zbk9HOGM4NkRRPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6OTUsImFkdlNlY3JldEtleSI6Im5lZUc5cnp5WDFkd2dqWkU0Ri9aSHgxTnBOcGtWVXRRaEtTc09NSWxTVXM9IiwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzIjpbeyJrZXkiOnsicmVtb3RlSmlkIjoiNTA5NTU0NzYzMzlAcy53aGF0c2FwcC5uZXQiLCJmcm9tTWUiOnRydWUsImlkIjoiQUJGOEEwOTBFODBEMEQzN0ZDQzYzNTM1Qjc0RTBFRTMifSwibWVzc2FnZVRpbWVzdGFtcCI6MTczMzE2NjcyNX0seyJrZXkiOnsicmVtb3RlSmlkIjoiNTA5NTU0NzYzMzlAcy53aGF0c2FwcC5uZXQiLCJmcm9tTWUiOnRydWUsImlkIjoiOEUyRjJCNkJFQjBGQjk5NUM0QUJGQUE4NjRGNTc5NEIifSwibWVzc2FnZVRpbWVzdGFtcCI6MTczMzE2NjcyNn1dLCJuZXh0UHJlS2V5SWQiOjMxLCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZCI6MzEsImFjY291bnRTeW5jQ291bnRlciI6MSwiYWNjb3VudFNldHRpbmdzIjp7InVuYXJjaGl2ZUNoYXRzIjpmYWxzZX0sImRldmljZUlkIjoiNlBhWllFLU5SWDYxMjdmc0FoalFqQSIsInBob25lSWQiOiJkZDZmNjBjOS05MGY5LTQyNTMtOGJmMi1lZTY2MmFiMTQ3ZjMiLCJpZGVudGl0eUlkIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiOHRCd3dDYmZ1MkY2NFVFWjFFV1grM0xINTYwPSJ9LCJyZWdpc3RlcmVkIjp0cnVlLCJiYWNrdXBUb2tlbiI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjJXYmZTT2tzZjFOMjhhVXZXK2NxWUE1WWNrbz0ifSwicmVnaXN0cmF0aW9uIjp7fSwicGFpcmluZ0NvZGUiOiJNM1FZSzhWVyIsIm1lIjp7ImlkIjoiNTA5NTU0NzYzMzk6MjRAcy53aGF0c2FwcC5uZXQiLCJuYW1lIjoi4ayK4a2E8J2Rrtud8J2ShSDwnZaL8J2WkfCdlorwnZaG8J2WmvCdlp0g8J2Rutud8J2WmvCdlpDwnZaa8J2Wk/CdloYifSwiYWNjb3VudCI6eyJkZXRhaWxzIjoiQ1B2Q3BsNFE5NHk0dWdZWUFTQUFLQUE9IiwiYWNjb3VudFNpZ25hdHVyZUtleSI6ImQxOW84MDdxSG93aVE4aXJ2aTZLRllVQmpLbzNCOGdwcXg3bHAyK1QxVm89IiwiYWNjb3VudFNpZ25hdHVyZSI6IklWTDZTdkc1K0RzakNSbzAyQ250VUFnYS85TTZxY2l6YXlscDdUdEhkVndPcW0wdGVlSFpmS3RaRFdSZGZxbTcySG5iOTFFcjV0MnZNMlBoSHIwckRBPT0iLCJkZXZpY2VTaWduYXR1cmUiOiJjcnYzK05CK1k1UW4yRDBZQitZTnBCTHlpRkQ2NWNpVHpMYklKUStJZk9tZ3prZFg0THhQYVp3WVk0UW00eXpERG9rQ0psRmZMc0VoRkt2aDFrSUhDQT09In0sInNpZ25hbElkZW50aXRpZXMiOlt7ImlkZW50aWZpZXIiOnsibmFtZSI6IjUwOTU1NDc2MzM5OjI0QHMud2hhdHNhcHAubmV0IiwiZGV2aWNlSWQiOjB9LCJpZGVudGlmaWVyS2V5Ijp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQlhkZmFQTk82aDZNSWtQSXE3NHVpaFdGQVl5cU53ZklLYXNlNWFkdms5VmEifX1dLCJwbGF0Zm9ybSI6ImFuZHJvaWQiLCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXAiOjE3MzMxNjY3MjMsIm15QXBwU3RhdGVLZXlJZCI6IkFBQUFBQnJ0In0="
module.exports = {
  menu: process.env.MENU || "1",
  HANDLERS: process.env.PREFIX || ".",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || "`𝕽𝖞𝖚𝖟𝖆𝖐𝖎 (𝕷)`",
  author: process.env.PACK_AUTHER || "𝕽𝖞𝖚𝖟𝖆𝖐𝖎 (𝕷)",
  packname: process.env.PACK_NAME || "𝕽𝖞𝖚𝖟𝖆𝖐𝖎 (𝕷)",
  botname: process.env.BOT_NAME || "𝕽𝖞𝖚𝖟𝖆𝖐𝖎 (𝕷)
  ownername: process.env.OWNER_NAME || "☞⌜𝕽𝖞𝖚𝖟𝖆𝖐𝖎 (𝕷)
  errorChat: process.env.ERROR_CHAT || "",
  KOYEB_API: process.env.KOYEB_API || "false",
  REMOVE_BG_KEY: process.env.REMOVE_BG_KEY || "tCxobE1FqJgfbDZgsYQNHBFB",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "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",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || "",
  antilink_values: process.env.ANTILINK_VALUES || "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,
  aitts_Voice_Id: process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "...d336",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "public",
  LANG: (process.env.THEME || "KERM").toUpperCase(),
};
global.rank = "updated";
global.isMongodb = false;
let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(`Update'${__filename}'`);
  delete require.cache[file];
  require(file);
});
