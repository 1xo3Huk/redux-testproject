import { createStore, applyMiddleware } from 'redux'
import { rootReducer } from '../reducers'
import logger from 'redux-logger'
import thunk from 'redux-thunk'

export const store = createStore(
    rootReducer,
    applyMiddleware(thunk, logger),
    //window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)