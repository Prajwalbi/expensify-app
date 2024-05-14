
import database, { set, ref, push, onValue, remove, get, update } from '../firebase/firebase';

export const addExpense = (expense) => {
    return {
        type: "ADD_EXPENSE",
        expense
        
    } 
}
 
export const startAddExpense = (expenseData = {}) => {
    // console.log("startAddExpense thunk called");
    return async (dispatch, getState) => { // Using async/await for asynchronous operation
        try {
            const uid = getState().auth.uid ;
            const { description = "", note = "", amount = 0, createdAt = 0 } = expenseData;
            const expense = { description, note, amount, createdAt };
            const expenseRef = ref(database, `users/${uid}/expenses`);
            const pushExpenseRef = push(expenseRef);
            await set(pushExpenseRef, expense); // Wait for the set operation to complete
            dispatch(addExpense({
                id: pushExpenseRef.key,
                ...expense // Spread the expense object to include all properties
            }));
        } catch (error) {
            console.log("The error in add expense is ", error);
        }
    };
};


export const editExpense = (id, updatedItems) => {
    return {
        type: 'EDIT_EXPENSE',
        id,
        updatedItems
    }

}

export const startEditExpense = (id , updatedItems) => {
    return (dispatch, getState) => {
        const uid = getState().auth.uid ;
        const expenseRef = ref(database, `users/${uid}/expenses/${id}`);
        return update(expenseRef, updatedItems)
        .then(dispatch(editExpense(id, updatedItems)))
        .catch((e) => console.log(e))
        
        
    }
}

// Action creators
export const setExpenses = (expenses) => ({
  type: "SET_EXPENSES",
  expenses
});

// Thunk action creator
export const startSetExpenses = () => {
    // console.log("startSetExpenses thunk called");
  return (dispatch, getState) => {
    const uid = getState().auth.uid;
    const starCountRef = ref(database, `users/${uid}/expenses`);
    get(starCountRef).then((snapshot) => {
      const expenses = [];
      snapshot.forEach((childSnapshot) => {
        const id = childSnapshot.key;
        expenses.push({
          id,
          ...childSnapshot.val()
        });
      });
      dispatch(setExpenses(expenses));
    }).catch((error) => {
      console.error("Error fetching expenses:", error);
    });
  };
};





export const removeExpense = ({id} = {}) => {
    return {
        type: "REMOVE_EXPENSE",
        id
    }
}

export const startRemoveExpense = ({ id } = {}) => {
    return (dispatch, getState) => {
        const uid = getState().auth.uid ;
        const starCountRef = ref(database, `users/${uid}/expenses/${id}`);
        remove(starCountRef).then(() => {
            dispatch(removeExpense({ id }));
        }).catch((e) => {
            console.log("the error from remove expense is " , e);
        })
    };
};




