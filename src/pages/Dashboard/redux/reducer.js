export default (state = {
    pets: [],
    gold: 0,
    cash: 0
}, action) => {
    switch (action.type) {
        case "SET_DASHBOARD":
            return {
                ...state,
                ...action.payload
            }
        default:
            return state
    }
}