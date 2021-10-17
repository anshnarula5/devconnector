export const setAlert = (msg, alertType) => dispatch => {
    const id = Math.random()
    dispatch({
        type: "SET_ALERT",
        payload: {msg, alertType, id}
    })
    setTimeout(() => {
        dispatch({
            type: "REMOVE_ALERT",
            payload : id
        })
    }, 3000)
}
