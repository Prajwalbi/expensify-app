import {createStore, combineReducers} from 'redux';
import expenseReducer from '../reducers/expenses.js';
import filtersRedecer from '../reducers/filters.js';

export default () => {
    const store = createStore(combineReducers({
        expenses: expenseReducer, 
        filters: filtersRedecer
    
    }),  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()

);

    return store; 

};
