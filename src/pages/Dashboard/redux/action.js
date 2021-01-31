import { setLoading, setModal } from "../../../commons/action"
import { getAllPets, getDashboard, exchange, buy, sell, collect } from "../../../api"

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
        console.log(err.response.data)
        // alert err message
    }

    dispatch(setLoading(false))
}

export const exchangeGoldCash = data => async dispatch => {
    dispatch(setLoading(true))
    try {
        await exchange(data)
        await dispatch(getDashboardInfo())
        // alert success
    } catch (err) {
        console.log(err)
        // alert err message
    }

    dispatch(setLoading(false))
}

export const buyPets = data => async dispatch => {
    dispatch(setLoading(true))
    try {
        await buy(data)
        await dispatch(getDashboardInfo())
        // alert success
    } catch (err) {
        console.log(err)
        // alert err message
    }

    dispatch(setLoading(false))
}

export const sellPets = data => async dispatch => {
    dispatch(setLoading(true))
    try {
        await sell(data)
        await dispatch(getDashboardInfo())
        // alert success
    } catch (err) {
        console.log(err)
        // alert err message
    }

    dispatch(setLoading(false))
}

export const collectProfit = () => async dispatch => {
    dispatch(setLoading(true))
    try {
        dispatch(setModal({
            isOpen: true,
            type: "warning",
            message: "Do you want to collect all your gold?",
            onConfirm: async () => {
                await collect()
                await dispatch(getDashboardInfo())
            }
        }))
        // alert success
    } catch (err) {
        console.log(err)
        // alert err message
    }

    dispatch(setLoading(false))
}