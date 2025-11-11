import axios from "axios"

const axiosInstance = axios.create({
    baseURL: "https://artify-server-ivory.vercel.app"
})


export const useAxios = () => {
    return axiosInstance
}