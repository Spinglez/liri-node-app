// Liri init

const axios = require('axios');

const Spotify = require('node-spotify-api');

const fs = require('fs');

// const keys = {
//   bandsIn: '',
//   omdb: '9199b32b',
// }

const dotenv = require('dotenv');

const keys = dotenv.config()

if (keys.error) {
  throw result.error
}

console.log(keys.parsed.SPOTIFY_ID);

const arg = process.argv.slice(2).join(" ");

const spotify = new Spotify({
  id: keys.parsed.SPOTIFY_ID,
  secret: keys.parsed.SPOTIFY_SECRET
});

spotify
  .search({type: "track", query: arg, limit:5}, function(err, data){
    if (err) {
        return console.error(err);
    }
    console.log(JSON.stringify(data.tracks.items[0], null, 2));
    for (var i = 0; i < data.tracks.items.length; i++) {
      console.log('Artist: ' + JSON.stringify(data.tracks.items[i].artists[0].name, null, 2));
      console.log('Track Name: ' + JSON.stringify(data.tracks.items[i].name, null, 2));
      console.log('Preview: ' + JSON.stringify(data.tracks.items[i].preview_url, null, 2) + '\n');
    }
    for(let prop in data.tracks.items) {
        console.log(JSON.stringify(prop));
    }
  });

// axios.get(spot + 'creed' + keys.spotify).then(
//   function(res){
//     console.log(res);
//   }
// );
