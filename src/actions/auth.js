import { getAuth, signInWithPopup, signOut } from "firebase/auth";
import { doSignOut } from "../firebase/auth";
import { googleAuthProvider } from "../firebase/firebase";
import { useNavigate } from 'react-router-dom';

// export const startLogin = () => {
//     const auth = getAuth();
//     return () => {
//         return    signInWithPopup(auth, googleAuthProvider)
//                 //     .then((result) => {
//                 //     // This gives you a Google Access Token. You can use it to access the Google API.
//                 //     const credential = googleAuthProvider.credentialFromResult(result);
//                 //     const token = credential.accessToken;
//                 //     // The signed-in user info.
//                 //     const user = result.user;
//                 //     // IdP data available using getAdditionalUserInfo(result)
//                 //     // ...
//                 //      }).catch((error) => {
//                 //     // Handle Errors here.
//                 //     const errorCode = error.code;
//                 //     const errorMessage = error.message;
//                 //     // The email of the user's account used.
//                 //     const email = error.customData.email;
//                 //     // The AuthCredential type that was used.
//                 //     const credential = googleAuthProvider.credentialFromError(error);
//                 //     // ...
//                 // });

//     }

// }


// export const startLogin = async () => {
//     const auth = getAuth();
//     try {
//         const result = await signInWithPopup(auth, googleAuthProvider);
//         // Handle successful login
//         const user = result.user;
//         console.log("User logged in:", user);
//     } catch (error) {
//         // Handle login failure
//         const errorCode = error.code;
//         const errorMessage = error.message;
//         console.error("Login failed:", errorMessage);
//     }
// };

// export const startLogin = () => {
//     const auth = getAuth();
//     return signInWithPopup(auth, googleAuthProvider)
//         .then((result) => {
//             // Handle successful login
//             const user = result.user;
//             console.log("User logged in:", user);
//             return result;

//         })
//         .catch((error) => {
//             // Handle login failure
//             const errorCode = error.code;
//             const errorMessage = error.message;
//             console.error("Login failed:", errorMessage);
//             return error;
//         });
// };

// export const startLogin = () => {
//     return (dispatch) => {
//         const auth = getAuth();
//         signInWithPopup(auth, googleAuthProvider)
//             .then((result) => {
//                 // Handle successful login
//                 const user = result.user;
//                 console.log("User logged in:", user);
//                 // Dispatch action if needed
//             })
//             .catch((error) => {
//                 // Handle login failure
//                 const errorCode = error.code;
//                 const errorMessage = error.message;
//                 console.error("Login failed:", errorMessage);
//                 // Dispatch action if needed
//             });
//     };
// };


export const login = (uid) => ({
    type: "LOGIN",
    uid
});
export const startLogin = () => {
    return () => {
        const auth = getAuth();
        signInWithPopup(auth, googleAuthProvider)
    }
}

export const logout = () => ({
    type: "LOGOUT"
})

export const startLogout = () => {
    const navigate = useNavigate();
    return () => { 
        doSignOut()
        .then(() => {navigate("/")})
    }
}
