import axios from "axios"
import {setAlert} from "./alert"
import setAuthToken from "../../utils/setAuthToken"

//LOAD USER
export const loadUser = () => async (dispatch) => {
    if (localStorage.token) {
        setAuthToken(localStorage.token)
    }
    try {
        const res = await axios.get("/api/auth")
        dispatch({type: "USER_LOADED", payload: res.data})
        
    } catch (error) {
        dispatch({type : "AUTH_ERROR"})
    }
}


//REGISTER USER

export const register = ({email, password, name}) => async (dispatch) => {
    const config = {
        headers: {
            'Content-Type': 'application/json'
        }
    }
    try {
        const res = await axios.post("/api/users", {name, email, password}, config)
        dispatch({type: "REGISTER_SUCCESS", payload: res.data})
        dispatch(loadUser())
    } catch (error) {
        const errors = error.response.data.errors
        if (errors) {
            errors.forEach(err => dispatch(setAlert(err.msg, "danger")))
        }
        dispatch({type : "REGISTER_FAIL"})
    }
}       

//LOGIN USER

export const login = ({email, password}) => async (dispatch) => {
    const config = {
        headers: {
            'Content-Type': 'application/json'
        }
    }
    try {
        const res = await axios.post("/api/auth", { email, password}, config)
        dispatch({type: "LOGIN_SUCCESS", payload: res.data})
        dispatch(loadUser())
    } catch (error) {
        const errors = error.response.data.errors
        if (errors) {
            errors.forEach(err => dispatch(setAlert(err.msg, "danger")))
        }
        dispatch({type : "LOGIN_FAIL"})
    }
}

export const logout = () => dispatch => {
    dispatch({type : "LOGOUT"})
}