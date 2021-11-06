import axios from 'axios'

const KEY = 'AIzaSyCBlGwZVVtMiKeIJyG-m6LzizOO4_3zOQE' 

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        maxResults: 5,
        key: KEY
    }
});

