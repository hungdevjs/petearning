import { setLoading } from "../../../commons/action"
import { getDashboard, getAllPets } from "../../../api"

export const getDashboardInfo = () => async dispatch => {
    dispatch(setLoading(true))
    try {
        const res = await getDashboard()
        dispatch({
            type: "SET_DASHBOARD",
            payload: res.data
        })
    } catch (err) {
        // alert err message
    }

    dispatch(setLoading(false))
}

export const getPets = () => async dispatch => {
    dispatch(setLoading(true))
    try {
        const res = await getAllPets()
        dispatch({
            type: "SET_ALL_PETS",
            payload: res.data
        })
    } catch (err) {
        // alert err message
    }

    dispatch(setLoading(false))
}