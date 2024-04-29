
import database, { set, ref, push } from '../firebase/firebase';
export const addExpense = (expense) => {
    return {
        type: "ADD_EXPENSE",
        expense
        
    } 
}
 
export const startAddExpense = (expenseData = {}) => {
    return async (dispatch) => { // Using async/await for asynchronous operation
        try {
            const { description = "", note = "", amount = 0, createdAt = 0 } = expenseData;
            const expense = { description, note, amount, createdAt };
            const expenseRef = ref(database, 'expenses');
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

export const removeExpense = ({id} = {}) => {
    return {
        type: "REMOVE_EXPENSE",
        id
    }
}

export const editExpense = (id, updatedItems) => {
    return {
        type: 'EDIT_EXPENSE',
        id,
        updatedItems
    }

}
