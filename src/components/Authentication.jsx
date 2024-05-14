import React from "react";
import { useState, useEffect } from "react";
import { Navigate } from "react-router-dom";
import { useNavigate } from "react-router-dom";


// const Authentication = () => {

//     const auth = getAuth();
   
// onAuthStateChanged(auth, (user) => {
//   if (user) {
//     // https://firebase.google.com/docs/reference/js/auth.user
//     const uid = user.uid;
//     // const navigate = useNavigate();
//     // navigate("/dashboard", true);
//     console.log("User logged in", uid);
//     const navigate = useNavigate();
//     navigate("/dashboard", true);
//   } else {
//     console.log("User logged out");
//   }
// });
//     return (<div>

//     </div>);
// }

// export default Authentication;

// import React, { useEffect, useState } from "react";
// import { Navigate } from "react-router-dom";
// import { useNavigate } from "react-router-dom";
// import { getAuth, onAuthStateChanged } from "firebase/auth";
// ===========================================
// const Authentication = () => {
//     const [authenticated, setAuthenticated] = useState(false);
//     const navigate = useNavigate();

//     useEffect(() => {
//         const auth = getAuth();
//         const unsubscribe = onAuthStateChanged(auth, (user) => {
//             if (user) {
//                 // User is logged in
//                 console.log("User logged in", user.uid);
//                 setAuthenticated(true);
//             } else {
//                 // User is logged out
//                 console.log("User logged out");
//                 setAuthenticated(false);
//             }
//         });

//         return () => unsubscribe();
//     }, []);

//     if (authenticated) {
//         // Redirect to dashboard if authenticated
//         return <Navigate to="/dashboard" />;
//     } else {
//         // Render nothing until authentication state is determined
//         return null;
//     }
// }

// 


// const Authentication = () => {
//     const [authenticated, setAuthenticated] = useState(false);

//     useEffect(() => {
//         const auth = getAuth();
//         const unsubscribe = onAuthStateChanged(auth, (user) => {
//             if (user) {
//                 // User is logged in
//                 console.log("User logged in", user.uid);
//                 setAuthenticated(true);
//             } else {
//                 // User is logged out
//                 console.log("User logged out");
//                 setAuthenticated(false);
//             }
//         });

//         return () => unsubscribe();
//     }, [setAuthenticated]); // Add setAuthenticated as a dependency

//     if (authenticated) {
//         // Redirect to dashboard if authenticated
//         return <Navigate to="/dashboard" />;
//     } else {
//         // Render nothing until authentication state is determined
//         return null;
//     }
// }

// export default Authentication;

// const Authentication = () => {
//     const navigate = useNavigate();
//     return (<div>
//         {myFunction(navigate)}
//     </div>);
// }


// import { getAuth, onAuthStateChanged } from "firebase/auth";


// const myFunction = (navigate) => {
// const auth = getAuth();
// onAuthStateChanged(auth, (user) => {
//   if (user) {
//     // https://firebase.google.com/docs/reference/js/auth.user
//     const uid = user.uid;
    
//     navigate("/dashboard", true);
//     // console.log("User logged in", uid);
//   } else {
//     console.log("User logged out");
//   }
// });

// }

// export default Authentication;


// import { useEffect } from 'react';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
// import { useNavigate } from 'react-router-dom';

const Authentication = () => {
    const navigate = useNavigate();

    useEffect(() => {
        const auth = getAuth();
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                const uid = user.uid;
                navigate("/dashboard", { replace: true });
            } else {
                console.log("User logged out");
            }
        });

        return () => unsubscribe(); // Unsubscribe when component unmounts
    }, [navigate]);

    return null; // or any other UI you want to render
}

export default Authentication;
