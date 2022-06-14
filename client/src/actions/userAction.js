import axios from 'axios'

export const fetchData = (token) => dispatch => {
    dispatch({ type: 'USER_INFO_REQUEST' })
    axios.get('/api/users/me', {
        headers: {
            Authorization: `Bearer ${token}`,
        }
    })
        .then(res => {
            dispatch({ type: 'USER_INFO_SUCCESS', payload: res.data.payload.data })
            console.log(res.data.payload.data);
        })
        .catch(err => {
            dispatch({ type: 'USER_INFO_ERROR', payload: err })
            console.log(err);

        })

}
export const registerUser = (user) => dispatch => {

    dispatch({ type: 'USER_REGISTER_REQUEST' })

    axios.post('/api/users/', user)
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

    axios.post('/api/users/login', user)
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
