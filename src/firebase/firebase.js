// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

import { getDatabase, ref, remove, set, update,onValue, push , onChildRemoved, onChildChanged , get} from "firebase/database"; 

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBOPxGIomODU8oXazHHorcO8fPWJGyi370",
  authDomain: "expensify-6e29e.firebaseapp.com",
  databaseURL: "https://expensify-6e29e-default-rtdb.firebaseio.com",
  projectId: "expensify-6e29e",
  storageBucket: "expensify-6e29e.appspot.com",
  messagingSenderId: "268399473330",
  appId: "1:268399473330:web:3006240d92dbe153850fab",
  measurementId: "G-XXBZ7YBNWN"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

const database = getDatabase();

export {  database as default,  ref, remove, set, update,onValue, push , onChildRemoved, onChildChanged, get }; 



// function writeUserData() {
//   const db = getDatabase();
//   set(ref(db,), {
//     name: "Prajwal B I",
//     age: 23,
//     isSingle: true,
//     location: {
//       city: "Shimoga",
//       country: "Banglore"
//     }
//   }).then(() => {
//     console.log("Data dumped successfully");
//   }).catch((e) => {
//       console.log(e);
//   });
// }

// writeUserData();


// function deleteUserData(){
//   const db = getDatabase();
//   remove(ref(db, 'location'),{
//   location: null
// }).then(() => console.log("Removed successfully!"))
//   .catch((e) => console.log("the err is ", e))
// }

// deleteUserData()




// const db = getDatabase();
// const starCountRef = ref(db, 'location/city');
// onValue(starCountRef, (snapshot) => {
//   const data = snapshot.val();
//  console.log("the updated data is " , data)
// });



// function updateFun() {
//   const db = getDatabase();
// update(ref(db,), {
  
//   // location: {
//   //   city: "Banglore",
//   //   country: "India"
//   // },
//   'location/city' : 'Mandya',
//   attributes: {
//     height: "5.7 feet",
//     weight: "50 kg"
//   }
// });
// }
// setTimeout(()=> 
//   (updateFun()), 
//   3500);



// // unsubscribe();
// const messageRef = ref(db, 'age');
// const unsubscribe =  onValue(messageRef, (snapshot) => {
//   const res = snapshot.val();
//   console.log("the updated age is " , res);
// })


// function updateAge(agee) {
//   const db = getDatabase();
// update(ref(db), {age: agee}
 
// );
// }
// setTimeout(()=> 
//   (updateAge(29)), 
//   3500);
// setTimeout(()=> 
//     unsubscribe() ,
//   3500);
// setTimeout(()=> 
//   (updateAge(31)), 
//   3500);

// //dynamic id generation using push()
// const postListRef = ref(db, 'notes');

// const newPostRef = push(postListRef);

// set(newPostRef, {
//   body: "Course Topic",
//   title: "node, angular, react, python"
// });
// set(newPostRef, {
//   body: "Sum",
//   title: "Sum is 90"
// });


// const db = getDatabase();
// function writeExpenses(des, not, amo, create){
// set(push(ref(db, 'expenses')) ,{
//     description: des,
//     note: not,
//     amount: amo,
//     createdAt: create

// } )
// }

// function callFun(){
//   writeExpenses("rent", "bill", 7500, 64564546456);
//   writeExpenses("Food", "bill", 1000, 55656565645);
//   writeExpenses("Loan", "bill", 400000, 655334154);
//   writeExpenses("Temple", "bill", 5000, 151313151);
// }
// // callFun();
// // writeExpenses("Temple", "bill", 5000, 151313151);
// const expenses = [];
// const starCountRef = ref(db, 'expenses');
// onValue(starCountRef, (snapshot) => {
//   snapshot.forEach((childSnapShot) => {
//       const id = childSnapShot.key;
//       expenses.push({
//         id,
//         ...childSnapShot.val()
//       })
//   })
// });

// console.log(expenses);

// // unsubscribe();
// const messageRef = ref(db, 'expenses');
// const unsubscribe =  onChildChanged(messageRef, (snapshot, previousChildName) => {
//   const res = snapshot.val();
//   // console.log("the updated age is " , res);
//   console.log("Previous child name is " , previousChildName);
// })