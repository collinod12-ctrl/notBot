<!-- Improved compatibility of back to top link: See: https://github.com/othneildrew/Best-README-Template/pull/73 -->
<a id="readme-top"></a>
<!--
*** Thanks for checking out the Best-README-Template. If you have a suggestion
*** that would make this better, please fork the repo and create a pull request
*** or simply open an issue with the tag "enhancement".
*** Don't forget to give the project a star!
*** Thanks again! Now go create something AMAZING! :D
-->



<!-- PROJECT SHIELDS -->
<!--
*** I'm using markdown "reference style" links for readability.
*** Reference links are enclosed in brackets [ ] instead of parentheses ( ).
*** See the bottom of this document for the declaration of the reference variables
*** for contributors-url, forks-url, etc. This is an optional, concise syntax you may use.
*** https://www.markdownguide.org/basic-syntax/#reference-style-links
-->
[![Forks][forks-shield]][forks-url]
[![Stargazers][stars-shield]][stars-url]
[![Issues][issues-shield]][issues-url]
[![MIT License][license-shield]][license-url] //TODO ADD LICENSE
[![LinkedIn][linkedin-shield]][linkedin-url]



<!-- PROJECT LOGO -->
<br />
<div align="center">
  <a href="https://github.com/collinod12-ctrl/notBot">
    <img src="https://ibb.co/zWGr9pQW" alt="Logo" width="80" height="80">
  </a>

  <h3 align="center">notBot the Discord Music Bot</h3>

  <p align="center">
    <br />
    <br />
    <a href="https://github.com/collinod12-ctrl/notBot/issues/new?labels=bug&template=bug-report---.md">Report Bug</a>
    &middot;
    <a href="https://github.com/collinod12-ctrl/notBot/issues/new?labels=enhancement&template=feature-request---.md">Request Feature</a>
  </p>
</div>



<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <li><a href="#roadmap">Roadmap</a></li>
    <li><a href="#license">License</a></li>
    <li><a href="#contact">Contact</a></li>
    <li><a href="#acknowledgments">Acknowledgments</a></li>
  </ol>
</details>



<!-- ABOUT THE PROJECT -->
## About The Project

[![notBotGithub][product-screenshot]](https://example.com)

There are many great README templates available on GitHub; however, I didn't find one that really suited my needs so I created this enhanced one. I want to create a README template so amazing that it'll be the last one you ever need -- I think this is it.

Here's why:
* Your time should be focused on creating something amazing. A project that solves a problem and helps others
* You shouldn't be doing the same tasks over and over like creating a README from scratch
* You should implement DRY principles to the rest of your life :smile:

Of course, no one template will serve all projects since your needs may be different. So I'll be adding more in the near future. You may also suggest changes by forking this repo and creating a pull request or opening an issue. Thanks to all the people who have contributed to expanding this template!

Use the `BLANK_README.md` to get started.

<p align="right">(<a href="#readme-top">back to top</a>)</p>



### Built With

This section should list any major frameworks/libraries used to bootstrap your project. Leave any add-ons/plugins for the acknowledgements section. Here are a few examples.

* [![Node][Node.js]][Nodejs-url]
* [![Discordjs][Discord.js]][Discordjs-url]

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- GETTING STARTED -->
## Getting Started

First of all, thank you for downloading my Discord Music Bot, notBot!
Follow the instructions below to properly set up and begin using the bot.

### Prerequisites

Download the latest LTS version of Node.js here [(https://nodejs.org)](https://nodejs.org/en/blog/release/v24.15.0)

Create a Discord Bot through the [Discord Developer Portal](https://discord.com/developers/home)
    
    Ensure that the bot receives Administrator priveleges, and the OAuth2 scopes include 'bot' and 'applications.commands'
    
    Invite your new bot to the servers you wish to include (or "guild" as it's defined by in the developer portal) via the generated link.

Enable Developer Mode in your Discord Client
    Go to 'User Settings'
    Navigate to 'Advanced'
    Toggle 'Developer Mode' on

### Installation

1. Clone (or download) the repo
   ```sh
   git clone https://github.com/collinod12-ctrl/notBot-Discord-Music-Bot
   ```
2. Install NPM packages using Terminal inside of project folder
   ```sh
   npm install
   ```
3. Create a designated text-channel for commands in your server

4. Enter your Guild, Bot, and Channel ID's in `config.json`
   ```js
    "token": "ENTER_DISCORD_BOT_TOKEN",
    "clientId": "ENTER_DISCORD_BOT_CLIENT_ID",
    "guildIds": ["ENTER_TARGET_GUILD_ID"],
    "targetChannelIds": ["ENTER_TARGET_CHANNEL_ID"]
   ```
5. Run deploy-commands.js to register commands via Terminal
    ```sh
    node deploy-commands.js
    ```
6. Run the bot
    ```sh
    .\notBot.exe
    ```

It is recommended to run the bot via terminal in order to see more info such as errors.

To find your token, navigate to the 'Bot' tab in your discord bot, and click 'Reset token'.

The clientId can be found in the 'General Information' tab as 'Application Id'.

To get the 'guildId', right-click on the server that the bot is in and click 'Copy Server Id' under 'Copy Server Info'

Get your 'channelId' by right-clicking the text-channel you would like to use for the commands for the bot. This is important because without it, the bot can send many notifications/pings and become annoying quickly. By creating a designated channel for the commands we are able to eliminate this problem before it begins by telling everyone to mute the bot command channel.

<p align="right">(<a href="#readme-top">back to top</a>)</p>


<!-- ROADMAP -->
## Roadmap
See the [open issues](https://github.com/collinod12-ctrl/notBot-Discord-Music-Bot/issues) for a full list of proposed features, suggestions and known issues.

Feel free to place your own suggestions in the issues section, as well.

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- LICENSE -->
## License

Distributed under the Unlicense License. See `LICENSE.txt` for more information.

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- CONTACT -->
## Contact

Your Name - [@ciownu_rl](https://x.com/ciownu_rl) - collinod12@gmail.com

Project Link: [https://github.com/collinod12-ctrl/notBot](https://github.com/collinod12-ctrl/notBot)

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- ACKNOWLEDGMENTS -->
## Acknowledgments

Use this space to list resources you find helpful and would like to give credit to. I've included a few of my favorites to kick things off!

* [othneildrew's Best-README-Template](https://github.com/othneildrew/Best-README-Template)
* [DiscordJS](https://discord.js.org/)

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->
[contributors-shield]: https://img.shields.io/github/contributors/othneildrew/Best-README-Template.svg?style=for-the-badge
[contributors-url]: https://github.com/collinod12-ctrl/notBot/graphs/contributors
[forks-shield]: https://img.shields.io/github/forks/othneildrew/Best-README-Template.svg?style=for-the-badge
[forks-url]: https://github.com/collinod12-ctrl/notBot/network/members
[stars-shield]: https://img.shields.io/github/stars/othneildrew/Best-README-Template.svg?style=for-the-badge
[stars-url]: https://github.com/collinod12-ctrl/notBot/stargazers
[issues-shield]: https://img.shields.io/github/issues/othneildrew/Best-README-Template.svg?style=for-the-badge
[issues-url]: https://github.com/collinod12-ctrl/notBot/issues
[license-shield]: https://img.shields.io/badge/license-MIT-red
[license-url]: https://github.com/collinod12-ctrl/notBot/blob/master/LICENSE.txt
[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=for-the-badge&logo=linkedin&colorB=555
[linkedin-url]: https://linkedin.com/in/othneildrew
[notBotGithub]: https://ibb.co/zWGr9pQW
[Node.js]: https://img.shields.io/badge/node.js-339933?style=for-the-badge&logo=Node.js&logoColor=white
[Nodejs-url]: https://nodejs.org/en
[Discord.js]: https://img.shields.io/badge/discord.js-javascript-blue?logo=javascript
[Discordjs-url]: https://discord.js.org/
