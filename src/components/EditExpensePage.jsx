import React from "react";
import { connect } from "react-redux";
import { useParams, useNavigate } from "react-router-dom";
import ExpenseForm from "./ExpenseForm";
import { startEditExpense, startRemoveExpense } from "../actions/expenses";

const EditExpensePage = (props) => {
    const { id } = useParams(); // Get the id parameter from the URL
    const navigate = useNavigate();

    // Find the expense with the matching id
    const expense = props.expenses.find(expense => expense.id === id);

    // If expense is not found, return null or display a message
    if (!expense) {
        return <div>Expense not found</div>;
    }

    return (
        <div>
            <ExpenseForm
                key={expense.id}
                expense={expense}
                onSubmit={(updatedExpense) => {
                    props.dispatch(startEditExpense(id, updatedExpense));
                    navigate("/", { replace: true });
                }}
            />
            <button onClick={() => {
                props.dispatch(startRemoveExpense({ id }));
                navigate("/", { replace: true });
            }}>Remove Item</button>
        </div>
    );
}

const mapStateToProps = (state) => {
    return { expenses: state.expenses };
}

export default connect(mapStateToProps)(EditExpensePage);
