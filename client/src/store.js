import { createStore, applyMiddleware, combineReducers } from 'redux'
import { loginReducer, registerReducer } from './reducers/userReducer'
import thunk from 'redux-thunk'

const rootReducer = combineReducers({
    loginReducer: loginReducer,
    registerReducer: registerReducer
})

const currentUser = localStorage.getItem('currentUser') ? JSON.parse(localStorage.getItem('currentUser')) : null

const initialState = {
    loginReducer: { currentUser: currentUser }
}

const store = createStore(rootReducer, initialState, applyMiddleware(thunk))

export default store;