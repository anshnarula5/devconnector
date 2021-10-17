import axios from "axios"
import {setAlert} from "./alert"

//REGISTER USER

export const register = ({email, password, name}) => async (dispatch) => {
    const config = {
        headers: {
            'Content-Type': 'application/json'
        }
    }

    try {
        const res = await axios.post("/api/users", {name, email, password}, config)
        console.log(res)
        dispatch({type: "REGISTER_SUCCESS", payload : res.data})
    } catch (error) {
        console.log(error)
        const errors = error.response.data.errors
        if (errors) {
            errors.forEach(err => dispatch(setAlert(err.msg, "danger")))
        }
        dispatch({type : "REGISTER_FAIL"})
    }
}