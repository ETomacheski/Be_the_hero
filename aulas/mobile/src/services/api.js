import axios from 'axios';

const api = axios.create({
    baseURL: 'http://192.168.210.166:3333'
})

export default api;