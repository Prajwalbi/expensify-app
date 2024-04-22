
//setTextFilter
export const setTextFilter = (text = "") => {
    return {
        type: "SET_TEXT_FILTER",
        text
    }
}

//sortByAmount
export const sortByAmount = ()  => {
    return {
        type: "SORT_BY_AMOUNT"
    }
}

//sortByDate
export const sortByDate = ()  => {
    return {
        type: "SORT_BY_DATE"
    }
}

// setStartDate
export const setStartDate = (date) => {
   
  return  { type: "SET_START_DATE",
            startDate : date
        }
}

// setEndDate
export const setEndDate = (date ) => {
    return {
        type: "SET_END_DATE",
        endDate : date
    }
}