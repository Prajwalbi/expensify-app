import React from "react";
import ExpenseForm from "./ExpenseForm";
import { connect } from "react-redux";
// import { startAddExspense } from "../actions/expenses";
import { startAddExpense } from "../actions/expenses";
import { useNavigate } from "react-router-dom";
const AddExpensePage = (props) =>{
    const navigate = useNavigate();
    return <div>
        <h1>Add Expense</h1>
        <ExpenseForm 

            onSubmit = {(expense) => {
                console.log("add expense " ,expense);
                props.startAddExpense(expense); // Dispatch the action using props
                navigate("/dashboard", { replace: true })
                
            }}
          
        />
    </div>
  }

// mapDispatchToProps function to map the startAddExpense action creator to props
const mapDispatchToProps = (dispatch) => ({
    startAddExpense: (expense) => dispatch(startAddExpense(expense))
});

// Connect the component to the Redux store and map the startAddExpense action creator to props
export default connect(null, mapDispatchToProps)(AddExpensePage);


