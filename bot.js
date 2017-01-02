console.log('The bot is starting');

var Twit = require('twit');
var config = require('./config');
var exec = require('child_process').exec;
var fs = require('fs');

var T = new Twit(config);
var stream = T.stream('user');

stream.on('follow', followed);

function followed(eventMsg) {
  //Local command
  //var cmd = 'processing-java --sketch=`pwd`/random_image --run'

  //Cloud command
  var cmd = 'random_image/random_image' 
  exec(cmd, generatedImage);
  var screenName = eventMsg.source.screen_name ;

  function generatedImage() {
    var b64content = fs.readFileSync('random_image/output.png', { encoding: 'base64' })
    console.log('Image generation finished');

    T.post('media/upload', { media_data: b64content }, uploaded);

    function uploaded(err, data, response) {
      var id = data.media_id_string;
      var tweet = {
        status: '@' + screenName + ' Thank you for following! \n Here is a priceless unique image!',
        media_ids: [id]
      }
      T.post('statuses/update', tweet, tweeted);
    }
    function tweeted(err, data, response) {
      if (err) {
        console.log('Something went wrong!');
      } else {
        console.log('Tweet sent!');
      }
    }
  }
  console.log('@' + screenName + ' followed the bot');
}
//var text = 'Here is a random number ' + Math.floor(Math.random()*100);

//setInterval(tweetIt, 1000*20);



// var params = {
//   q: '#monpremiertweet',
//   count: 2
// } ;
//
// T.get('search/tweets', params, gotData);
//
// function gotData(err, data, response) {
//   var tweets = data.statuses ;
//   for (var i = 0; i < tweets.length; i++) {
//     console.log(tweets[i].text);
//   }
// }
