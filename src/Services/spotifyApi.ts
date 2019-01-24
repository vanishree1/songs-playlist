const spotifyApi = () => {
  
    return fetch('https://api.spotify.com/v1/albums', {
        method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Authorization':  'Bearer BQBa-7fjmA5vqb0bJBJGKjH1SrIpTAtgJhzabmXJ_fxO3a6WgxaA1Cnls9Wk5a3ia946BBSlUKo1xAQItYJiM5MVf2FXwbBXWlEfCVmWmNgAz-EtdrZ_HaQtojTzkdYl8XCYTgejvu1xp3hZmMS581iJGAHrLckFX4bFjq5oGLMr1-2OOQ'
      },
      })
        .then((res : any) => res.json())
        .catch((err: any)=> err);
      }
export { spotifyApi }