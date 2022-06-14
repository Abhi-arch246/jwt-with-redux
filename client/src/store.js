import { createStore, applyMiddleware, combineReducers } from 'redux'
import { loginReducer, registerReducer, fetchReducer } from './reducers/userReducer'
import thunk from 'redux-thunk'

const rootReducer = combineReducers({
    loginReducer: loginReducer,
    registerReducer: registerReducer,
    fetchReducer: fetchReducer
})


const initialState = {

}

const store = createStore(rootReducer, initialState, applyMiddleware(thunk))

export default store;