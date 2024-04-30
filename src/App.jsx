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


const App = () =>{
  const store = configureStore();
  useEffect(() => {
    store.dispatch(startSetExpenses());
  }, []);

  return (<div>
          
           <Provider store={store}>
             <LocalizationProvider dateAdapter={AdapterDayjs}>
              <AppRouter />
              </LocalizationProvider>
           </Provider>
        </div>);

}

export default App;

// import React from 'react';
// import { BrowserRouter } from 'react-router-dom';
// import { Provider } from 'react-redux';
// import { LocalizationProvider } from '@mui/x-date-pickers';
// import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
// import "normalize.css/normalize.css";
// import "./components/styles/styles.scss";
// import AppRouter from './routers/AppRouter';
// import configureStore from './store/configureStore';
// import { startSetExpenses } from './actions/expenses';

// class App extends React.Component {
//   store = configureStore();
//   componentDidMount() {
    
//     this.store.dispatch(startSetExpenses());
//   }

//   render() {
//     return (
//       <div>
//          <Provider store={this.store}>
//            <LocalizationProvider dateAdapter={AdapterDayjs}>
//             <AppRouter />
//             </LocalizationProvider>
//          </Provider>
//       </div>
//     );
//   }
// }

// export default App;

