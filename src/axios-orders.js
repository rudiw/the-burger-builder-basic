import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://jsx-the-burger-builder.firebaseio.com'
});

export default instance;