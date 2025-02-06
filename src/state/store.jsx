import { applyMiddleware, combineReducers, legacy_createStore } from "redux";
import { thunk } from "redux-thunk";
import authReducer from "./Auth/Reducer.js";

// Combine Reducers
const rootReducer = combineReducers({
    auth: authReducer, // Fixed typo
});

// Create Store
const store = legacy_createStore(rootReducer, applyMiddleware(thunk));

export default store;
