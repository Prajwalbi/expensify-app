// import React , { useState } from "react";
// import { connect } from "react-redux";
// import { setTextFilter } from "../actions/filters";
// import { sortByAmount } from "../actions/filters";
// import { sortByDate } from "../actions/filters";
// import DatePicker from "react-datepicker";
// import "react-datepicker/dist/react-datepicker.css";


// const ExpenseListFilters = (props) =>  {

//     return (<div>
//             <input value={props.filters.text} onChange={
//                 (e) => {
//                    props.dispatch(setTextFilter(e.target.value))
//                 }
//             }   />
//             Sort By: <select value={ props.filters.sortBy } onChange={(event) =>{
//                event.target.value === "amount" ?  props.dispatch(sortByAmount()) :  props.dispatch(sortByDate());
//             }
//             }>
//                 <option value="date">Date</option>
//                 <option value="amount">Amount</option>
//             </select>
//             <DatePicker
//         selected={props.filters.startDate}
//         onChange={(date) => setStartDate(date)}
      
//         startDate={props.filters.startDate}
//         />
//         <DatePicker
//             selected={props.filters.endDate}
//             onChange={(date) => setEndDate(date)}
           
//             endDate={props.filters.endDate}
//             minDate={props.filters.startDate}
//         />

//         </div>);
// }

// const mapStateToProps = (state) => {
//     return {
//         filters: state.filters
//     };
// }
// export default connect(mapStateToProps)(ExpenseListFilters);

import React from "react";
import { connect } from "react-redux";
import { setTextFilter, sortByAmount, sortByDate, setStartDate, setEndDate } from "../actions/filters";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const ExpenseListFilters = (props) => {
  const onStartDateChange = (date) => {
    console.log("onStartDateChange getting called");
    props.dispatch(setStartDate(date));
  };

  const onEndDateChange = (date) => {
    console.log("onEndDateChange getting called");
    props.dispatch(setEndDate(date));
  };

  return (
    <div>
      <input
        value={props.filters.text}
        onChange={(e) => {
          props.dispatch(setTextFilter(e.target.value));
        }}
      />
      Sort By:{" "}
      <select
        value={props.filters.sortBy}
        onChange={(event) => {
          event.target.value === "amount"
            ? props.dispatch(sortByAmount())
            : props.dispatch(sortByDate());
        }}
      >
        <option value="date">Date</option>
        <option value="amount">Amount</option>
      </select>
      <DatePicker
        selected={props.filters.startDate}
        onChange={onStartDateChange}
      />
      <DatePicker
        selected={props.filters.endDate}
        onChange={onEndDateChange}
        minDate={props.filters.startDate}
      />
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    filters: state.filters,
  };
};
export default connect(mapStateToProps)(ExpenseListFilters);
