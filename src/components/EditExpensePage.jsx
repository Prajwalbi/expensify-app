import React from "react";
import { connect } from "react-redux";
import { useParams , useNavigate} from "react-router-dom";
import ExpenseForm from "./ExpenseForm";
import { editExpense } from "../actions/expenses";

const EditExpensePage = (props) => {
    const { id } = useParams();
    const navigate = useNavigate();
    return (
        <div>
            <p>User id is {id}</p>
        
            {props.expenses.map(expense => {
                if (expense.id === id) {
                    return <ExpenseForm
                      key={expense.id} 
                      expense={expense}
                      onSubmit = {(expense) => {
                        props.dispatch(editExpense(id, expense));
                        console.log("Updated sucessfully " , id);
                        navigate("/", { replace: true });
                     }} />;
                }
                return null; // You need to return something if the condition is not met
            })}
        </div>
    );
}

const mapStateToProps = (state) => {
    return { expenses: state.expenses };
}

export default connect(mapStateToProps)(EditExpensePage);
