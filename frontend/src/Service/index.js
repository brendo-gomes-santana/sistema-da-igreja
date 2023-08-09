import axios from 'axios';

const api = axios.create({
    baseURL: process.env.React_App_URL,
})

export default api;