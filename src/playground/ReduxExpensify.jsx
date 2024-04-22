import {createStore, combineReducers} from 'redux';
import { v4 as uuidv4 } from 'uuid'; 
const ReduxExpensify = () => {

    const addExpense = ({ description = "" , note = "", amount = 0, createdAt = 0 } = {}) => {
        return {
            type: "ADD_EXPENSE",
            expense: {
                id: uuidv4(),
                description,
                note,
                amount,
                createdAt
            }
            
        }
    }

    const removeExpense = ({id} = {}) => {
        return {
            type: "REMOVE_EXPENSE",
            id
        }
    }

    const editExpense = (id, updatedItems) => {
        return {
            type: 'EDIT_EXPENSE',
            id,
            updatedItems
        }

    }
    const expenseReducerDefaultState = [];
    const expenseReducer = (state = expenseReducerDefaultState , action) => {
            switch(action.type){
                case "ADD_EXPENSE": return [
                    ...state , action.expense
                ];

                case "REMOVE_EXPENSE": 
                  return state.filter((expense) => (
                    expense.id !=  action.id && expense
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
                default : return state; 
            }
    };


    const setTextFilter = (text = "") => {
        return {
            type: "SET_TEXT_FILTER",
            text
        }
    }

    const sortByAmount = ()  => {
        return {
            type: "SORT_BY_AMOUNT"
        }
    }
    const sortByDate = ()  => {
        return {
            type: "SORT_BY_DATE"
        }
    }
    const setStartDate = (date) => {
       
      return  { type: "SET_START_DATE",
                startDate : date
            }
    }
    const setEndDate = (date ) => {
        return {
            type: "SET_END_DATE",
            endDate : date
        }
    }

    const filtersRedecerDefaultState = {
        text: '',
        sortBy: 'date',
        startDate: undefined,
        endDate: undefined
    }
    const filtersRedecer = (state = filtersRedecerDefaultState, action) => {

        switch(action.type){
            case "SET_TEXT_FILTER":
                return {
                    ...state,
                    text : action.text
                }
            case "SORT_BY_AMOUNT": 
                return {
                    ...state,
                    sortBy: "amount"
                }
            case "SORT_BY_DATE": 
                return {
                    ...state,
                    sortBy: "date"
                }
            case "SET_START_DATE": 
                return {
                    ...state,
                    startDate: action.startDate
                   
                }
            case "SET_END_DATE": 
                return {
                    ...state,
                    endDate:  action.endDate
                  
                }
            default: return state;
        }

    }


    const store = createStore(combineReducers({
        expenses: expenseReducer, 
        filters: filtersRedecer

    }));

    const getVisibleExpenses = (expenses, {text, sortBy, startDate, endDate }) => {
       return expenses.filter((expense) => {
            const startDateMatch = typeof startDate !== "number"  || expense.createdAt >= startDate;
            const endDateMatch =   typeof endDate !== "number"  || expense.createdAt <= endDate;
            const textMatch =  text === ""   || expense.description.toLowerCase().includes(text.toLowerCase());

            return startDateMatch && endDateMatch && textMatch;
        }).sort((a, b) => {
           if (sortBy === "date") {
               return  (a.createdAt < b.createdAt) ? 1 : -1;
           }else if(sortBy === "amount"){
                return (a.amount < b.amount) ? 1 : -1;
           }

        });

        
       
    }
    // const store = createStore(expenseReducer);
    store.subscribe(() => {
        const state = store.getState();
        const visbleExpenses =  getVisibleExpenses(state.expenses , state.filters);
        console.log(visbleExpenses);
    });

    const expenseOne =  store.dispatch(addExpense({
        description : "Rent" , note : "Jan", amount : 100000, createdAt : 1000
    })); //the action object as the returned value
     const expenseTwo = store.dispatch(addExpense({
        description : "snacks" , note : "Jan", amount : 9000, createdAt : 5000
    }));
  
    // store.dispatch(editExpense(expenseOne.expense.id, {description : "PG Accomaodation" , amount: 7500}));
    // store.dispatch(removeExpense({id: expenseOne.expense.id}));
    // store.dispatch(removeExpense({id: expenseTwo.expense.id}));
    // store.dispatch(sortByAmount());
    // store.dispatch(sortByDate());

    // 

    // store.dispatch(setStartDate(-1000));
    // store.dispatch(setTextFilter("sna"));
    // store.dispatch(setStartDate());
    // store.dispatch(setEndDate(700));
    store.dispatch(sortByDate());
    store.dispatch(sortByAmount());
    return (
        <div>
            <h1>Hello redux</h1>
        </div>
    );
}

export default ReduxExpensify;