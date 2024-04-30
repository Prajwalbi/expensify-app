import {legacy_createStore as createStore, combineReducers, applyMiddleware, compose } from 'redux';

import expenseReducer from '../reducers/expenses.js';
import filtersRedecer from '../reducers/filters.js';
import { thunk } from 'redux-thunk'


const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default () => {
    const store = createStore(combineReducers({
        expenses: expenseReducer, 
        filters: filtersRedecer
    
    }),  
    composeEnhancers(applyMiddleware(thunk))
    // window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()

);

    return store; 

};

// export default configureStore;

// import { configureStore } from '@reduxjs/toolkit'
// import expenseReducer from '../reducers/expenses.js';
// import filtersRedecer from '../reducers/filters.js';


//  const store = configureStore({
//     reducer: {
//         expenses: expenseReducer, 
//         filters: filtersRedecer
            
//     }
// });

// export default store;






