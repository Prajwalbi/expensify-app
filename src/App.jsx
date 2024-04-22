import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import { BrowserRouter, Route , Link, NavLink} from 'react-router-dom';
import "./components/styles/styles.scss";
import './App.css';
import Header from './components/Header';
import AppRouter from './routers/AppRouter';
import Redux from './playground/Redux';
import ReduxExpensify from './playground/ReduxExpensify';
import configureStore from './store/configureStore.js';
import { addExpense } from './actions/expenses.js';
import { editExpense } from './actions/expenses.js';
import getVisibleExpenses from './selectors/expenses.js';
import { setTextFilter } from './actions/filters.js';
import HOCCaller from './playground/HOCCaller.jsx';
import AuthInfo from './playground/HOCCaller.jsx';
import { Provider } from 'react-redux';
import { removeExpense } from './actions/expenses.js';

import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'



const App = () =>{
  const store = configureStore();
 const expenseOne =  store.dispatch(addExpense({
    description: "water bill",
    note: "boll of month March",
    amount: 5000,
    createdAt: 3000
  }));
  store.dispatch(addExpense({
    description: "Gas bill",
    note: "bill of month April",
    amount: 2500,
    createdAt: 3500
  }));

  // store.dispatch(setTextFilter("bill"));
  
    // setTimeout(() => (store.dispatch(setTextFilter("bill"))), 3000)

    // console.log("id is ", expenseOne.expense.description);
    // console.log(expenseOne.expense.id);
    // store.dispatch(removeExpense({id : expenseOne.expense.id}));
    store.dispatch(addExpense({
      description: "Rent",
      note: "bill of month April",
      amount: 7000,
      createdAt:7000
    }));

    // setTimeout(()=>{
    //   console.log("removing");
    //   return  store.dispatch(removeExpense(expenseOne.expense.id));
    // }, 3000);
   
    // store.dispatch(removeExpense(expenseOne.expense.id));
  const state = (store.getState());
  // console.log(getVisibleExpenses(state.expenses,state.filters));
  return (<div>
          
           <Provider store={store}>
           
             <LocalizationProvider dateAdapter={AdapterDayjs}>
              <AppRouter />
              </LocalizationProvider>
           </Provider>
            {/* <HOCCaller msg = "These are some content" isAdmin = "true" /> */}
            {/* <AuthInfo msg = "These are some content" isAuthenticated = {true} /> */}
        </div>);
}

export default App;

