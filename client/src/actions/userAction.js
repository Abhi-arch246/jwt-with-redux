import axios from 'axios'

export const registerUser = (user) => dispatch => {

    dispatch({ type: 'USER_REGISTER_REQUEST' })

    const response = axios.post('/api/users/', user)
        .then(res => {
            dispatch({ type: 'USER_REGISTER_SUCCESS' })
            console.log(res);
            localStorage.setItem('currentUser', JSON.stringify(res.data.token))
            window.location.href = '/dashboard'
        })
        .catch(err => {
            dispatch({ type: 'USER_REGISTER_ERROR', payload: err })
            console.log(err);

        })
}

export const loginUser = (user) => dispatch => {

    dispatch({ type: 'USER_LOGIN_REQUEST' })

    const response = axios.post('/api/users/login', user)
        .then(res => {
            dispatch({ type: 'USER_LOGIN_SUCCESS' })

            localStorage.setItem('currentUser', JSON.stringify(res.data.token))
            window.location.href = '/dashboard'

        })
        .catch(err => {
            dispatch({ type: 'USER_LOGIN_ERROR', payload: err })

        })
}

export const logoutUser = () => dispatch => {
    localStorage.removeItem('currentUser')

    dispatch({ type: 'USER_LOGOUT' })

    window.location.href = "/"
}
