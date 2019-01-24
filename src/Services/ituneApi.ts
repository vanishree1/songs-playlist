const ituneApi = () => {
  
    return fetch('https://itunes.apple.com/us/rss/topalbums/limit=100/json', {
        method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      },
    })
        .then((res : any) => res.json())
        .catch((err: any)=> err);
      }
export { ituneApi }