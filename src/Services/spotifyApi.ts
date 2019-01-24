// const spotifyApi = () => {
  
//     return fetch('https://api.spotify.com/v1/albums', {
//         method: 'GET',
//       headers: {
//         'Content-Type': 'application/json',
//         'Authorization':  'Bearer BQBa-7fjmA5vqb0bJBJGKjH1SrIpTAtgJhzabmXJ_fxO3a6WgxaA1Cnls9Wk5a3ia946BBSlUKo1xAQItYJiM5MVf2FXwbBXWlEfCVmWmNgAz-EtdrZ_HaQtojTzkdYl8XCYTgejvu1xp3hZmMS581iJGAHrLckFX4bFjq5oGLMr1-2OOQ'
//       },
//       })
//         .then((res : any) => res.json())
//         .catch((err: any)=> err);
//       }
// export { spotifyApi }
import SpotifyWebApi from 'spotify-web-api-js';
// import { token } from '../apiConfig';

let spotify = new SpotifyWebApi();

//var s = new spotify();

// spotify.setAccessToken(token)

const spotifyApi = () => {
  spotify.getPlaylistTracks('37i9dQZEVXbMDoHDwVN2tF')
      .then(function(data: any) {
        console.log('Search tracks by "Love" in the artist name', data);
      }, function(err: any) {
        console.error(err);
      });
}

export { spotifyApi }