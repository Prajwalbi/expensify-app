import React from "react";
import ExpenseForm from "./ExpenseForm";
import { connect } from "react-redux";
import { addExpense } from "../actions/expenses";
import { useNavigate } from "react-router-dom";
const AddExpensePage = (props) =>{
    const navigate = useNavigate();
    return <div>
        <h1>Add Expense</h1>
        <ExpenseForm 

            onSubmit = {(expense) => {
                console.log("add expense " ,expense);
                props.dispatch(addExpense(expense));
                navigate("/", { replace: true })
                
            }}
          
        />
    </div>
  }

 const mapStateToProps = (state) => {
    return { expense: state.expenses[0] }
 }
  
  export default  connect(mapStateToProps)(AddExpensePage)