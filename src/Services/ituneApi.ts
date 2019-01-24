const ituneApi = () => {
  
    return fetch('https://itunes.apple.com/us/rss/topalbums/limit=100/json', {
        method: 'GET'
    })
        .then((res : any) => res.json())
        .catch((err: any)=> err);
      }
export { ituneApi }