export default (state = {
    pets: [],
    gold: 0,
    cash: 0,
    allPets: []
}, action) => {
    switch (action.type) {
        case "SET_DASHBOARD":
            return {
                ...state,
                ...action.payload
            }
        case "SET_ALL_PETS":
            return {
                ...state,
                allPets: action.payload
            }
        default:
            return state
    }
}