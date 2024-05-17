import React, { useState } from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import DummyData from './playground/DummyData.jsx';
import { AuthProvider } from './contexts/authContext/index.jsx';


// const [hasRendered, setRendered] = useState(false);
// const renderApp =  () => {
//   if(!hasRendered){
//     setRendered(true);
//     ReactDOM.createRoot(document.getElementById('root')).render(
//       <AuthProvider>
//         <App />
//         </AuthProvider>

//     );
//   }
// }

// ReactDOM.createRoot(document.getElementById('root')).render(<p>loading....</p>)

// export default renderApp;
//====================================
ReactDOM.createRoot(document.getElementById('root')).render(
  // <React.StrictMode>
  <AuthProvider>
    <App />
    </AuthProvider>
   
  // {/* </React.StrictMode>*/}
);


// import React, { useState, useEffect } from 'react';
// import ReactDOM from 'react-dom';
// import App from './App';
// import './index.css';
// import { AuthProvider } from './contexts/authContext/index.jsx';

// const Main = () => {
//   const [hasRendered, setHasRendered] = useState(false);

 
//     const renderApp = () => {
//       if (!hasRendered) {
//         setHasRendered(true);
//         ReactDOM.createRoot(document.getElementById('root')).render(
//           <AuthProvider>
//             <App />
//           </AuthProvider>
//         );
//       }
//     };


//   if (hasRendered) {
//     return <p>Loading...</p>;
//   }

//   return null;
// };

// ReactDOM.createRoot(document.getElementById('root')).render(<Main />);
