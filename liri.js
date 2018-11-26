// Liri init

const axios = require('axios');

const Spotify = require('node-spotify-api');

const fs = require('fs');

const dotenv = require('dotenv');

const keys = dotenv.config()

if (keys.error) {
  throw result.error
}

// console.log(keys.parsed.SPOTIFY_ID);

const action = process.argv[2];
const arg = process.argv.slice(3).join(" ");

const spotify = new Spotify({
  id: keys.parsed.SPOTIFY_ID,
  secret: keys.parsed.SPOTIFY_SECRET
});

switch (action) {
case "spotify-this-song":
  spot();
  break;

case "concert-this":
  conc();
  break;

case "movie-this":
  mov();
  break;

case "do-what-it-says":
  doWhat();
  break;
}

console.log(arg);

function spot(){
  if (arg == '') {
    spotify.search({type: "track", query: 'Ace of Base The Sign', limit:1}, function(err, data){
      if (err) {
          return console.error(err);
      }
      for (var i = 0; i < data.tracks.items.length; i++) {
        console.log('Artist: ' + JSON.stringify(data.tracks.items[i].artists[0].name, null, 2));
        console.log('Album: ' + JSON.stringify(data.tracks.items[i].album.name, null, 2));
        console.log('Track Name: ' + JSON.stringify(data.tracks.items[i].name, null, 2));
        console.log('Preview: ' + JSON.stringify(data.tracks.items[i].preview_url, null, 2) + '\n');
      }
    });
  }else {
      spotify.search({type: "track", query: arg, limit:5}, function(err, data){
        if (err) {
            return console.error(err);
        }
        // console.log(JSON.stringify(data.tracks.items[0], null, 2));
        for (var i = 0; i < data.tracks.items.length; i++) {
          console.log('Artist: ' + JSON.stringify(data.tracks.items[i].artists[0].name, null, 2));
          console.log('Album: ' + JSON.stringify(data.tracks.items[i].album.name, null, 2));
          console.log('Track Name: ' + JSON.stringify(data.tracks.items[i].name, null, 2));
          console.log('Preview: ' + JSON.stringify(data.tracks.items[i].preview_url, null, 2) + '\n');
        }
      });
    }
  }

// axios.get(spot + 'creed' + keys.spotify).then(
//   function(res){
//     console.log(res);
//   }
// );
