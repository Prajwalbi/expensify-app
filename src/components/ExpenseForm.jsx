

import React from "react";
import moment from "moment";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

// import { DatePicker } from '@mui/x-date-pickers/DatePicker';
// import 'react-day-picker/dist/style.css';
// import "bootstrap/dist/css/bootstrap.min.css";


const now = moment();
// console.log(now.format("MMM Do YYYY"));
export default class ExpenseForm extends React.Component {
    constructor(props){
        super(props);
        console.log("props is " , props);
        // console.log("The description is " , this.props.expense.description); // This line was moved inside the constructor
        this.state = {
            description: props.expense ? props.expense.description : "",
            note: props.expense ?  props.expense.note : "",
            amount:  props.expense?  (props.expense.amount / 100).toString() :  "",
            createdAt: props.expense ?  moment(props.expense.createdAt).toDate() : moment().toDate(),
            selected: undefined,
            error: ""
        };
    }
   
   
   
    onDescriptionChange = (e) => {
        const description = e.target.value;
        this.setState({ description });
    }

    onNoteChange = (e) => {
        const note = e.target.value;
        this.setState({ note });
    }

    onAmountChange = (e) => {
        const amount = e.target.value;
        if (amount.match(/^\d*(\.\d{0,2})?$/)) {
            this.setState({ amount });
        }
    }

    handleDayClick = (selected) => {
        this.setState({ selected });
    }

    handleDatePick = (createdAt) => {
        this.setState({createdAt})
        console.log(createdAt);
    }

    onSubmit = (e) => {
        console.log("Submit function is getting called!");
        e.preventDefault();
        
        if( !this.state.description || !this.state.amount){
            this.setState(() => ({
                error: "Description and amount fields are mandatory!"
            }))
        }else{
            this.setState(() => ({
                error: ""
            }))

            this.props.onSubmit({
                description: this.state.description,
                amount: parseFloat(this.state.amount, 10) * 100,
                note: this.state.amount, 
                createdAt: this.state.createdAt.valueOf()})

        }
    } 
    
    render() {
        // console.log("Props from expense form ", this.props);
        const { description, note, amount, selected } = this.state;
       
        return (
            <div>
                {this.state.error && <p>{this.state.error}</p>}
                <form   onSubmit={ this.onSubmit }>
                    <div style={{ display:"flex" }}>
                    <input
                        type="text"
                        placeholder="Description"
                        autoFocus
                        value={description}
                        onChange={this.onDescriptionChange}
                    />
                    <input
                        type="text"
                        placeholder="Amount"
                        value={amount}
                        onChange={this.onAmountChange}
                    />
                    <textarea
                        placeholder="Add a note for your expense (optional)"
                        value={note}
                        onChange={this.onNoteChange}
                    ></textarea>
               
                    <div>
                    {/* <DatePicker
                        
                        onChange={this.handleDatePick}
                        dateFormat="P"
                        
                    /> */}
                    <DatePicker
                        selected={this.state.createdAt}
                        onChange={this.handleDatePick}
                        dateFormat="P"
                        showIcon
                        toggleCalendarOnIconClick
                    />
                    </div>
                       
               
                 
                    <button>Add Expense</button>
               
                  </div>
                  
                </form>
            </div>
        );
    }
}
