import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://news-app-3ad86.firebaseio.com/'
});

export default instance;