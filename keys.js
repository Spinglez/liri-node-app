console.log('this is loaded');

exports.spotify = {
  id: process.env.SPOTIFY_ID,
  secret: process.env.SPOTIFY_SECRET
};

exports.bandsIn = {
  key: process.env.BANDSIN_KEY
}

exports.omdb = {
  key: process.env.OMDB_KEY
}
