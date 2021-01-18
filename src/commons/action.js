import { logIn, getUserInfo } from "../api"
import { getAccessToken } from "../utils/common"
import history from "../utils/history"

export const setLoading = status => ({
    type: "SET_LOADING",
    payload: status
})

export const getInfo = () => async dispatch => {
    const token = getAccessToken()
    if (!token) return

    dispatch(setLoading(true))
    try {
        const res = await getUserInfo()
        dispatch({
            type: "SET_USER",
            payload: res.data.data
        })
    } catch (err) {
        localStorage.removeItem("accessToken")
        history.push("/login")
    }

    dispatch(setLoading(false))
}

export const userLogin = values => async dispatch => {
    dispatch(setLoading(true))
    try {
        const res = await logIn(values)
        const { data, error, accessToken } = res.data

        if (error) throw new Error(error)

        localStorage.setItem("accessToken", accessToken)

        dispatch({
            type: "SET_USER",
            payload: data
        })
    } catch (err) {
        alert(err.response.data)
    }

    dispatch(setLoading(false))
}

export const logout = () => async dispatch => {
    localStorage.removeItem("accessToken")
    dispatch({
        type: "SET_USER",
        payload: null
    })
}