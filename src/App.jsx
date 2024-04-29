// import { BrowserRouter, Route , Link, NavLink} from 'react-router-dom';
// import "./components/styles/styles.scss";
// import AppRouter from './routers/AppRouter';
// import Redux from './playground/Redux';
// import configureStore from './store/configureStore.js';
// import getVisibleExpenses from './selectors/expenses.js';
// import { Provider } from 'react-redux';
// import { LocalizationProvider } from '@mui/x-date-pickers';
// import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
// import "normalize.css/normalize.css";
// import "./firebase/firebase.js"



// const App = () =>{
//   const store = configureStore();
//   return (<div>
          
//            <Provider store={store}>
           
//              <LocalizationProvider dateAdapter={AdapterDayjs}>
//                {/* { console.log("Testing")  } */}
//               <AppRouter /> 
//               </LocalizationProvider>
//            </Provider>
//             {/* <HOCCaller msg = "These are some content" isAdmin = "true" /> */}
//             {/* <AuthInfo msg = "These are some content" isAuthenticated = {true} /> */}
//         </div>);
// }

// export default App;
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
import "./firebase/firebase.js";


const App = () =>{
  const store = configureStore();

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
