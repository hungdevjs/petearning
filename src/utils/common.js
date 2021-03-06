import history from "./history"

export const getAccessToken = () => {
    const token = localStorage.getItem("accessToken")
    if (!token) return ""
    return token
}

export const authRedirect = () => {
    const token = getAccessToken()

    if (token) history.push("/")
}