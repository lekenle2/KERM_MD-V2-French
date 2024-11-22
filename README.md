#        Ҝ乇尺爪 爪ᗪ ᐯ2

   <a>
                                      <a href="https://git.io/typing-svg"><img src="https://readme-typing-svg.demolab.com?font=Jersey+20+Charted&size=30&pause=1000&color=F71515&width=435&lines=BOT+100%25+CAMEROUNAIS" alt="Typing SVG" /></a>   
            
<p align="center"> 
<up Un simple bot utilisateur WhatsApp codé par Rayan et Giffareno</u>
</p>
<p align="center">
<img src="https://telegra.ph/file/6368ad7db15fce6a4dfdb.jpg"/>       
<p align="center">
  <a href="https://git.io/typing-svg"><img src="https://readme-typing-svg.demolab.com?font=EB+Garamond&weight=800&size=25&duration=4000&pause=1000&random=false&width=435&lines=+•__J'SUIS+KERM-+MD_•;MULTI-DEVICE+WHATSAPP+BOT;DEVELLOPER+PAR+RAYAN+ET;GIFFARENO;DATE+CRÉATION+07%2F7%2F2024."                               alt="Typing SVG" /></a>
</p> 
<p align="center">
<a href="#"><img title="Creator" src="https://img.shields.io/badge/Creator-KG_TECH-red.svg?style=for-the-badge&logo=github"></a>
</a>
</p>
<p align="center">
<a href="https://github.com/Kgtech-cmr"><img title="Author" src="https://img.shields.io/badge/KGTECH-black?style=for-the-badge&logo=Github"></a> <a href="https://chat.whatsapp.com/FpxvVBFOozA6IhNxIWhwFw"><img title="Author" src="https://img.shields.io/badge/CHANNEL-black?style=for-the-badge&logo=whatsapp"></a> <a href="https://wa.me/237656520674?text=Hi+Kerm😊"><img title="Author" src="https://img.shields.io/badge/CHAT US-black?style=for-the-badge&logo=whatsapp">
<p/>

 <p align="center">
  <a href="https://kg-site-support.vercel.app/">
    <img src="https://img.shields.io/badge/KG WEBSITE-000?style=for-the-badge&logo=vercel&logoColor=white" alt="Generate Session ID"/>
  </a>
   
<p align="center">
<a href="https://github.com/Kgtech-cmr/KERM_MD-V2-French/stargazers/"><img title="Stars" src="https://img.shields.io/github/stars/Kgtech-cmr/KERM_MD-V2-French?color=white&style=flat-square"></a>
<a href="https://github.com/Kgtech-cmr/KERM_MD-V2-French/network/members"><img title="Forks" src="https://img.shields.io/github/forks/Kgtech-cmr/KERM_MD-V2-French?color=yellow&style=flat-square"></a>
<a href="https://github.com/Kgtech-cmr/KERM_MD-V2-French/watchers"><img title="Watching" src="https://img.shields.io/github/watchers/Kgtech-cmr/KERM_MD-V2-French?label=Watchers&color=red&style=flat-square"></a>
<a href="https://github.com/Janithsadanuwan/Queen-Nilu-Md/"><img title="Size" src="https://img.shields.io/github/repo-size/AlipBot/Api-Alpis?style=flat-square&color=darkred"></a>
<a href="https://hits.seeyoufarm.com"><img src="https://hits.seeyoufarm.com/api/count/incr/badge.svg?url=https://github.com/Janithsadanuwan/Queen-Nilu-Md/%2Fhit-counter&count_bg=%2379C83D&title_bg=%23555555&icon=probot.svg&icon_color=%2304FF00&title=hits&edge_flat=false"/></a>
        <a href = ""><img alt="KermHack Tools" src="https://img.shields.io/youtube/channel/subscribers/UCjDKRYcwd5ZIpGICcVVL96Q" target="_blank" /></a>

### 1. FORK CE RÉFÉRENTIEL

<a href='https://github.com/Kgtech-cmr/KERM_MD-V2-French/fork' target="_blank"><img alt='Fork repo' src='https://img.shields.io/badge/FORK CE RÉFÉRENTIEL-black?style=for-the-badge&logo=git&logoColor=white'/></a>
<p align="center">

#### INSTALLATION


1. OBTENIR L'ID DE SESSION DU SERVEUR

<a href="https://kgtech-v2-session.onrender.com/pair"><img src="https://img.shields.io/badge/PAIR_CODE-blue" alt="Click Here to Get Pair-Code" width="110"></a>   

<a href="https://kgtech-v2-session.onrender.com/wasiqr"><img src="https://img.shields.io/badge/QR CODE-green" alt="Click Here to Get QR-Code" width="90"></a> 

## Comment déployer sur Github.
* [![YOUTUBE](https://img.shields.io/badge/HOW_TO_DEPLOY-red?style=for-the-badge&logo=youtube&logoColor=white)](https://youtu.be/T77rQM7Nk5k?si=gg-LJxS6vC6kBEpJ)

• Créer un nouveau fichier [`.github/workflows/deploye.yml`] Après avoir créé, copiez ce code👇🏽et collez-le dans le nouveau fichier
```yml
name: Node.js CI

on:
  push:
    branches:
      - main
  pull_request:
    branches:
      - main
  schedule:
    - cron: '0 */6 * * *'  # Relance toutes les 6 heures

jobs:
  build:

    runs-on: ubuntu-latest

    strategy:
      matrix:
        node-version: [20.x]

    steps:
    - name: Checkout repository
      uses: actions/checkout@v3

    - name: Set up Node.js
      uses: actions/setup-node@v3
      with:
        node-version: ${{ matrix.node-version }}

    - name: Install dependencies
      run: npm install

    - name: Install FFmpeg
      run: sudo apt-get install -y ffmpeg

    - name: Start application with timeout
      run: |
        timeout 21590s npm start  # Limite l'exécution à 5h 59m 50s

    - name: Save state (Optional)
      run: |
        ./save_state.sh
```
#### DÉPLOYER SUR HEROKU

1. Si vous n'avez pas de compte sur Heroku. Créez un compte.
    <br>
<a href='https://heroku.com' target="_blank"><img alt='Replit' src='https://img.shields.io/badge/-Create-black?style=for-the-badge&logo=heroku'/></a>
   <br>
2. Maintenant déployez
    <br>
<a href='https://heroku.com/deploy?template=https://github.com/Kgtech-cmr/KERM_MD-V2-French' target="_blank"><img alt='DEPLOY' src='https://img.shields.io/badge/-DEPLOY-black?style=for-the-badge&logo=heroku'/></a>

#### DÉPLOYER SUR KOYEB 

1. Si vous n'avez pas de compte sur koyeb. Créez un compte.
    <br>
<a href='https://app.koyeb.com/auth/signup' target="_blank"><img alt='koyeb' src='https://img.shields.io/badge/-Create-black?style=for-the-badge&logo=koyeb'/></a>

2. Obtenir [Koyeb api key](https://app.koyeb.com/account/api)

4. Maintenant déployez 
    <br>
<a href='https://app.koyeb.com/services/deploy?type=git&repository=https://github.com/Kgtech-cmr/KERM_MD-V2-French&branch=main&name=xbotmd&builder=dockerfile&env[SESSION_ID]=%20&env[WORK_TYPE]=private&env[HANDLER]=.&env[BOT_INFO]=KERM_MD-V2;ASWIN%20SPARKY;https://i.imgur.com/QH7T7u9.jpeg&env[SUDO]=237656520674,237650564445&env[STICKER_DATA]=KG TECH&env[DATABASE_URL]' target="_blank"><img alt='DEPLOY' src='https://img.shields.io/badge/-DEPLOY-black?style=for-the-badge&logo=koyeb'/></a>

#### DÉPLOYEZ SUR RAILWAY

1. Si vous n'avez pas de compte Railway. Créez un compte.
    <br>
<a href='https://railway.app' target="_blank"><img alt='Replit' src='https://img.shields.io/badge/-Create-black?style=for-the-badge&logo=railway'/>
2. Maintenant Déployez
    <br>
<a href='https://railway.app' target="_blank"><img alt='DEPLOY' src='https://img.shields.io/badge/-DEPLOY-black?style=for-the-badge&logo=railway'/></a>

#### DÉPLOYEZ SUR MOGENIUS

1. Si vous n'avez pas de compte Mogenius. Créez un compte.
    <br>
<a href='https://mogenius.com' target="_blank"><img alt='Replit' src='https://img.shields.io/badge/-Create-black?style=for-the-badge&logo=genius'/></a>
2. Maintenant Déployez
    <br>
<a href='https://mogenius.com' target="_blank"><img alt='DEPLOY' src='https://img.shields.io/badge/-DEPLOY-black?style=for-the-badge&logo=genius'/></a>

  **N'oubliez pas de donner une étoile ⭐️ s'il vous plaît**

### Un merci spécial à

<details close>
<summary>En savoir plus</summary>

<br>

* [`ARTHUR SASAKI`](https://github.com/Alp24ni)
* ## Contact Dev of KERM🤪
* [`RAYAN`](https://wa.me/237656520674?text=Salut+Bro+Rayan+Je+Suis+Un+Fan😍)
* [`GIFFARENO`](https://wa.me/237650564445?text=Salut+Bro+Giffareno+Je+Suis+Un+Fan😍)
 </details>
 
