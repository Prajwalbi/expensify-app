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
                <div className="page-header">
                <div className="content-container">
                    <h1 className="page-header__title">Edit Expense</h1>
                </div>
            </div>
            <div className="content-container">
            <ExpenseForm
                key={expense.id}
                expense={expense}
                onSubmit={(updatedExpense) => {
                    props.dispatch(startEditExpense(id, updatedExpense));
                    navigate("/dashboard", { replace: true });
                }}
            />
            <button  className="button button--seconadry"onClick={() => {
                props.dispatch(startRemoveExpense({ id }));
                navigate("/dashboard", { replace: true });
            }}>Remove Expense</button>
            </div>
        </div>
    );
}

const mapStateToProps = (state) => {
    return { expenses: state.expenses };
}

export default connect(mapStateToProps)(EditExpensePage);
