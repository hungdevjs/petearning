import { setLoading } from "../../../commons/action"
import { getDashboard } from "../../../api"

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