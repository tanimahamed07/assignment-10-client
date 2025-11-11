import React, { use } from 'react';
import { AuthContext } from '../context/AuthContext';
import axios from 'axios';

const instance = axios.create({
    baseURL: "https://artify-server-ivory.vercel.app"
})
const useAxiosSecure = () => {
    const { user } = use(AuthContext);
    console.log(user)
    instance.interceptors.request.use(config => {
        config.headers.authorization = `Bearer ${user.accessToken}`
        return config
    })
    return instance
};

export default useAxiosSecure;