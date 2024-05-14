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
    }else{
      store.dispatch(logout());
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
// import { getAuth, onAuthStateChanged } from "firebase/auth";

// const auth = getAuth();
// onAuthStateChanged(auth, (user) => {
//   if (user) {
//     // https://firebase.google.com/docs/reference/js/auth.user
//     const uid = user.uid;
//     const navigate = useNavigate();
//     navigate("/dashboard", true);
//     console.log("User logged in", uid);
//   } else {
//     console.log("User logged out");
//   }
// });

export default App;



