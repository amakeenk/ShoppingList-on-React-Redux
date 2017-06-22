import logger from 'redux-logger'
import {createStore, combineReducers, applyMiddleware} from 'redux'
import thunk from 'redux-thunk';
import purchaseReducer from './reducers/purchaseReducer'
import errorsReducer from './reducers/errorsReducer'
import filterReducer from './reducers/filterReducer'

const store = createStore(combineReducers({
        purchaseReducer,
        errorsReducer,
        filterReducer
    }),
    {},
    applyMiddleware(thunk, logger)
);

export default store;
/*dklg*/