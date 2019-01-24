const spotifyApi = (data: any) => {
  
    return fetch('https://developer.spotify.com/documentation/web-api/reference/albums/get-several-albums/', {
        method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)})
        .then((res : any) => res.json())
        .catch((err: any)=> err);
      }
export { spotifyApi }