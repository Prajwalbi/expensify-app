const expenseReducerDefaultState = [];

import { experimentalStyled } from "@mui/material";
import database, {onValue, ref} from "../firebase/firebase";

const expenses = [];
const starCountRef = ref(database, 'expenses');
onValue(starCountRef, (snapshot) => {
 snapshot.forEach((childSnapShot) => {
    const id = childSnapShot.key;
    expenses.push({
        id,
        ...childSnapShot.val()
    })
 })

});

// console.log("Fetched from firebase" , expenses);
const expenseReducer = (state = expenseReducerDefaultState , action) => {
        switch(action.type){
            case "ADD_EXPENSE": return [
                ...state , action.expense
            ];

            case "REMOVE_EXPENSE":  
             return state.filter((expense) => (
                expense.id !=  action.id 
               ) );

            case "EDIT_EXPENSE":
              return  state.map((expense)=>{
                if(expense.id === action.id){
                    return {
                        ...expense,
                        ...action.updatedItems
                    }
                }
                else{
                    return expense;
                }
              });
            
              case "SET_EXPENSES":
                return action.expenses;
            default : return state; 
        }
};

export default expenseReducer;