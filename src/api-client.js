const URL = `http://ws.audioscrobbler.com/2.0/?method=geo.gettopartists&country=peru&api_key=1e2e691583ae8793ed5b3e6bb7f1a702&format=json`

function getArtists() {
  return fetch(URL)
    .then(response => response.json())
    .then(data => data.topartists.artist)
    .then(artists => artists.map(artist => {
      return{
      name: artist.name,
      image: artist.image[3]['#text'],
      likes: 200,
      comments: 140
      }
    }))
}

export { getArtists }
