import { combineReducers } from "redux";

import { counterReducer } from "../features/counter";

const rootReducer = combineReducers({
    counter: counterReducer
});

export default rootReducer;