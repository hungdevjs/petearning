export default (state = {
    user: null,
    isLoading: false,
    modal: {
        isOpen: false
    }
}, action) => {
    switch (action.type) {
        case "SET_LOADING":
            return {
                ...state,
                isLoading: action.payload
            }
        case "SET_MODAL":
            return {
                ...state,
                modal: action.payload
            }
        case "SET_USER":
            return {
                ...state,
                user: action.payload
            }
        default:
            return state
    }
}