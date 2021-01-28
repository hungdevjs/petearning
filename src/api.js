import axios from "axios"
import { BASE_URL } from "./utils/constants"
import { getAccessToken } from "./utils/common"

const request = axios.create({
    baseURL: BASE_URL,
    timeout: 30000,
    headers: {
        "Content-Type": "application/json",
    },
})

request.interceptors.request.use(
    (config) => {
        const token = getAccessToken()
        if (token) {
            config.headers.Authorization = `Bearer ${token}`
        }
        return config
    },
    (error) => Promise.reject(error)
)

export const logIn = data => request.post("/account/login", data)

export const getUserInfo = () => request.get("/account/info")

export const getAllPets = () => request.get("/pets")

export const getDashboard = () => request.get("/user/dashboard")

export const exchange = data => request.post("/user/exchange", data)

export const buy = data => request.post("/pets/buy", data)

export const sell = data => request.post("/pets/sell", data)