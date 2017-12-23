import { createStore, applyMiddleware } from 'redux'
import ReduxPromise from 'redux-promise';
import app from './reducer'

//STORE
const store = createStore(app, applyMiddleware(ReduxPromise))
export default store