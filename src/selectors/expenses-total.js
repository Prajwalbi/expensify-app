const selectExpensesTotal = (expenses) => {
    return expenses.reduce((res, cur) => res + parseFloat(cur.amount), 

    0) 
}

export default selectExpensesTotal;