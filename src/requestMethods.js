import axios from 'axios';

const BASE_URL = 'https://sell-vercel.vercel.app/api/';
// const TOKEN = JSON.parse(JSON.parse(localStorage.getItem('persist:root')).user)
//     .currentUser.token;

// const TOKEN = JSON.parse(JSON.parse(localStorage.getItem('persist:root')).auth)
//     .currentUser.token;

export const publicRequest = axios.create({
    baseURL: BASE_URL,
});

// export const userRequest = axios.create({
//     baseURL: BASE_URL,
//     headers: { token: `Bearer ${TOKEN}` },
// });
