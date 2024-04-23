import { BrowserRouter, Route , Link, NavLink} from 'react-router-dom';
import "./components/styles/styles.scss";
import AppRouter from './routers/AppRouter';
import Redux from './playground/Redux';
import configureStore from './store/configureStore.js';
import getVisibleExpenses from './selectors/expenses.js';
import { Provider } from 'react-redux';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import "normalize.css/normalize.css";



const App = () =>{
  const store = configureStore();
//  const expenseOne =  store.dispatch(addExpense({
//     description: "water bill",
//     note: "boll of month March",
//     amount: 5000,
//     createdAt: 3000
//   }));


  // store.dispatch(setTextFilter("bill"));
  
    // setTimeout(() => (store.dispatch(setTextFilter("bill"))), 3000)

    // console.log("id is ", expenseOne.expense.description);
    // console.log(expenseOne.expense.id);
    // store.dispatch(removeExpense({id : expenseOne.expense.id}));


    // setTimeout(()=>{
    //   console.log("removing");
    //   return  store.dispatch(removeExpense(expenseOne.expense.id));
    // }, 3000);
   
    // store.dispatch(removeExpense(expenseOne.expense.id));
  // const state = (store.getState());
  // console.log(getVisibleExpenses(state.expenses,state.filters));
  return (<div>
          
           <Provider store={store}>
           
             <LocalizationProvider dateAdapter={AdapterDayjs}>
               {/* { console.log("Testing")  } */}
              <AppRouter />
              </LocalizationProvider>
           </Provider>
            {/* <HOCCaller msg = "These are some content" isAdmin = "true" /> */}
            {/* <AuthInfo msg = "These are some content" isAuthenticated = {true} /> */}
        </div>);
}

export default App;

