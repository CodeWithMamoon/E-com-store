import axios from "axios";
import { 
    API_BASE_URL 
} from "../../config/apiconfig";
import { 
    REGISTER_FAILURE, 
    REGISTER_REQUEST, 
    REGISTER_SUCCESS, 
    LOGIN_REQUEST, 
    LOGIN_SUCCESS, 
    LOGIN_FAILURE, 
    GET_USER_REQUEST, 
    GET_USER_SUCCESS, 
    GET_USER_FAILURE, 
    LOGOUT 
} from "./ActionType";

// Action Creators
const registerRequest = () => ({ type: REGISTER_REQUEST });
const registerSuccess = (user) => ({ type: REGISTER_SUCCESS, payload: user });
const registerFailure = (error) => ({ type: REGISTER_FAILURE, payload: error });

const loginRequest = () => ({ type: LOGIN_REQUEST });
const loginSuccess = (user) => ({ type: LOGIN_SUCCESS, payload: user });
const loginFailure = (error) => ({ type: LOGIN_FAILURE, payload: error });

const getUserRequest = () => ({ type: GET_USER_REQUEST });
const getUserSuccess = (user) => ({ type: GET_USER_SUCCESS, payload: user });
const getUserFailure = (error) => ({ type: GET_USER_FAILURE, payload: error });

// Thunks
export const register = (userData) => async (dispatch) => {
    dispatch(registerRequest());
    try {
        const response = await axios.post(`${API_BASE_URL}/auth/signup`, userData);
        const user = response.data;
        if (user.jwt) {
            localStorage.setItem("jwt", user.jwt);
        }
        console.log("user", user);
        dispatch(registerSuccess(user));
    } catch (error) {
        dispatch(registerFailure(error.message));
    }
};

export const login = (userData) => async (dispatch) => {
    dispatch(loginRequest());
    try {
        const response = await axios.post(`${API_BASE_URL}/auth/signin`, userData);
        const user = response.data;
        if (user.jwt) {
            localStorage.setItem("jwt", user.jwt);
        }
        console.log("user", user);
        dispatch(loginSuccess(user));
    } catch (error) {
        dispatch(loginFailure(error.message));
    }
};

export const getUser = (jwt) => async (dispatch) => {
    // const token = localStorage.getItem("jwt");
    dispatch(getUserRequest());
    try {
        const response = await axios.get(`${API_BASE_URL}/api/users/profile`, {
            headers: {
                Authorization: `Bearer ${jwt}`,
            },
        });
        const user = response.data;
        console.log("user", user);
        dispatch(getUserSuccess(user));
    } catch (error) {
        dispatch(getUserFailure(error.message));
    }
};

export const logout = () => (dispatch) => {
    localStorage.removeItem("jwt");
    dispatch({ type: LOGOUT });
};
