// const getVisibleExpenses = (expenses, {text="", sortBy="date", startDate=undefined, endDate=undefined }={}) => {
//     return expenses.filter((expense) => {
//          const startDateMatch = typeof startDate !== "number"  || expense.createdAt >= startDate;
//          const endDateMatch =   typeof endDate !== "number"  || expense.createdAt <= endDate;
//          const textMatch =  text === ""   || expense.description.toLowerCase().includes(text.toLowerCase());

//          return startDateMatch && endDateMatch && textMatch;
//      }).sort((a, b) => {
//         if (sortBy === "date") {
//             return  (a.createdAt < b.createdAt) ? 1 : -1;
//         }else if(sortBy === "amount"){
//              return (a.amount < b.amount) ? 1 : -1;
//         }

//      }) 
    
//     }

//      export default getVisibleExpenses;


             //  const createdAtMoment = moment(expense.createdAt);
        //  const startDateMatch = startDate ?  startDate.isSameOrBefore(createdAtMoment, 'day') : true;
        //  const endDateMatch = endDate ? endDate.isSameOrAfter(createdAtMoment, 'day') : true;


        const getVisibleExpenses = (expenses, {text="", sortBy="date", startDate=undefined, endDate=undefined }={}) => {
            return expenses.filter((expense) => {
                 const startDateMatch = !startDate || expense.createdAt >= startDate.getTime();
                 const endDateMatch = !endDate || expense.createdAt <= endDate.getTime();
                 const textMatch = text === "" || expense.description.toLowerCase().includes(text.toLowerCase());
        
                 return startDateMatch && endDateMatch && textMatch;
             }).sort((a, b) => {
                if (sortBy === "date") {
                    return a.createdAt - b.createdAt;
                } else if (sortBy === "amount") {
                    return a.amount - b.amount;
                }
             });
        }
        
        export default getVisibleExpenses;
        