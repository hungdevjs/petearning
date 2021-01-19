import { combineReducers } from "redux"

import common from "./commons/reducer"
import dashboard from "./pages/Dashboard/redux/reducer"

export default combineReducers({
    common,
    dashboard
})