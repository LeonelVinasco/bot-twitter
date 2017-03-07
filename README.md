# bot-twitter

Twitter bot made with node.js, twit and processing.  
Currently, the bot is running with this account : [@TheBotLyon](https://twitter.com/TheBotLyon)

## Functionality
* When someone follow the bot, the bot replies with a thank you note and an "unique" image.  

![alt tag](https://pbs.twimg.com/media/C17CsfOXAAEnLQC.jpg)

## Getting Started

### Prerequisites

Make sure you have node and java installed on your machine.
If not, please visit the [Node JS](https://nodejs.org/en/) and [Java website](http://java.com/en/) to install them.
  
To make the bot working, you will need a twitter account with these informations :
* consumer_key
* consumer_secret
* access_token
* access_token_secret  

For more information, please see : [dev.twitter.com](https://dev.twitter.com/oauth/overview/application-owner-access-tokens)

### Installing

One you have clone / downloaded the repository, you have to install the twit package which will interract with the Twitter API.  

```
$ npm install
```

Now, open the config.js file and enter the 4 keys / tokens that Twitter has genereted for you.  
* consumer_key
* consumer_secret
* access_token
* access_token_secret

You should be ready to start the bot.
```
$ node bot.js
$ The bot is starting
```
  
When someone follows you, you should see this in the command line. 
```
$ @SomeOne followed the bot
$ Image generation finished
$ Tweet sent!
```
## Built With

* [Node JS](https://nodejs.org/en/) - The server
* [Processing](http://processing.org/) - For generating the image
* [Twit Package](https://github.com/ttezel/twit) - Node Package to easily interact with the Twitter API
* [Tutorial from Daniel Shiffman](https://www.youtube.com/watch?v=RF5_MPSNAtU) - Full twitter bot tutorial that I followed. 

Thanks to Daniel Shiffman for his great tutorial!  
Visit Daniel Shiffman [Youtube channel](https://www.youtube.com/channel/UCvjgXvBlbQiydffZU7m1_aw) to see more project.
