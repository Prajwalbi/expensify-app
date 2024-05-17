import { BrowserRouter, Route , Link, NavLink} from 'react-router-dom';
import "./components/styles/styles.scss";
import AppRouter from './routers/AppRouter';
import configureStore from './store/configureStore.js';
import { Provider } from 'react-redux';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import "normalize.css/normalize.css";
import "./firebase/firebase.js"
import { startSetExpenses } from './actions/expenses.js';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthProvider } from './contexts/authContext/index.jsx';
import { useAuth } from './contexts/authContext/index.jsx';
import { login, logout } from './actions/auth.js';
// import renderApp from './main.jsx';
const App = () =>{
  // const store = configureStore();
  // useEffect(() => {
  //   store.dispatch(startSetExpenses());
  // }, []);

  const store = configureStore() ;
  const { userLoggedIn , userId} = useAuth();
  useEffect(() => {
    if (userLoggedIn) {
      store.dispatch(login(userId));
      console.log("The user id is " , userId);
      store.dispatch(startSetExpenses());
      // renderApp();
    }else{
      store.dispatch(logout());
      // renderApp();
    }
  }, [userLoggedIn]);

   

  return (<div>
          
           <Provider store={store}>
             <LocalizationProvider dateAdapter={AdapterDayjs}>
              <AuthProvider>
              <AppRouter />
              </AuthProvider>
              </LocalizationProvider>
           </Provider>
        </div>);

}


export default App;

// import React, { useState, useEffect } from 'react';
// import ReactDOM from 'react-dom';
// import "./components/styles/styles.scss";
// import { Provider } from 'react-redux';
// import AppRouter from './routers/AppRouter';
// import configureStore from './store/configureStore';
// import { startSetExpenses } from './actions/expenses';
// import 'normalize.css/normalize.css';
// // import { firebase } from './firebase/firebase';
// // import LoadingPage from './components/LoadingPage';
// import { AuthProvider } from './contexts/authContext/index.jsx';
// import { useAuth } from './contexts/authContext/index.jsx';
// import { login, logout } from './actions/auth.js';

// const App = () => {
//   const [isLoading, setIsLoading] = useState(true);
//   const { userLoggedIn, userId , loading} = useAuth();
//   const store = configureStore();

//   useEffect(() => {
//     if (userLoggedIn) {
//       store.dispatch(login(userId));
//       store.dispatch(startSetExpenses());
//       setIsLoading(false)
//     } else {
//       setIsLoading(false);
//       store.dispatch(logout());
//     }
//   }, [userLoggedIn]);

//   return (
//     <div>
//       {isLoading ? (
//         // <LoadingPage />
//         <p>loading....</p>
//       ) : (
//         <Provider store={store}>
//           <AuthProvider>
//             <AppRouter />
//           </AuthProvider>
//         </Provider>
//       )}
//     </div>
//   );
// };

// // ReactDOM.render(<App />, document.getElementById('root'));
// export default App;




