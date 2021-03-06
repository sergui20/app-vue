const baseUrl = 'https://platzi-music-api.now.sh';

const platziMusicService = {
    getTracks: (q) => {
        return fetch(baseUrl + `/search?q=${q}&type=track`)
        .then(res => res.json())
        .then(res => res.tracks.items)
        .catch(err => console.log(err))
    }    
}

export default platziMusicService;
