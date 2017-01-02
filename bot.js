console.log('The bot is starting');

var Twit = require('twit');
var config = require('./config');
var exec = require('child_process').exec;
var fs = require('fs');

var T = new Twit(config);
var stream = T.stream('user');

stream.on('follow', followed);

// When someone follow you, this funtion is called
function followed(eventMsg) {

  var cmd = 'random_image/random_image'
  exec(cmd, generatedImage); // Generation of the image
  var screenName = eventMsg.source.screen_name ; // Get the name of the personn that followed you

  // When the image is generated, this function is called
  function generatedImage() {
    var b64content = fs.readFileSync('random_image/output.png', { encoding: 'base64' })
    console.log('Image generation finished');

    T.post('media/upload', { media_data: b64content }, uploaded); //Upload of the image to Twitter, the tweet is not yet send.

    // When the image is uploaded, this function is called
    function uploaded(err, data, response) {
      var id = data.media_id_string;
      var tweet = {
        status: '@' + screenName + ' Thank you for following! \n Here is a priceless unique image!',
        media_ids: [id]
      }
      T.post('statuses/update', tweet, tweeted); //The tweet is posted.
    }
    function tweeted(err, data, response) {
      if (err) {
        console.log('Something went wrong!');
      } else {
        console.log('Tweet sent!\n');
      }
    }
  }
  console.log('@' + screenName + ' followed the bot');
}
