import React from "react";
import moment from "moment";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";


export default class ExpenseForm extends React.Component {
    constructor(props){
        super(props);
        console.log("props is " , props);
        this.state = {
            description: props.expense ? props.expense.description : "",
            note: props.expense ?  props.expense.note : "",
            amount:  props.expense?  (props.expense.amount).toString() :  "",
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
                amount: parseFloat(this.state.amount, 10),
                note: this.state.note, 
                createdAt: this.state.createdAt.valueOf()})

        }
    } 
    
    render() {
        // console.log("Props from expense form ", this.props);
        const { description, note, amount, selected } = this.state;
       
        return (
                <form  className="form" onSubmit={ this.onSubmit }>
                {this.state.error && <p className="form__error">{this.state.error}</p>} 
                    <input
                        type="text"
                        placeholder="Description"
                        autoFocus
                        className="text-input"
                        value={description}
                        onChange={this.onDescriptionChange}
                    />
                    <input
                        type="text"
                        placeholder="Amount"
                        className="text-input"
                        value={amount}
                        onChange={this.onAmountChange}
                    />
                    <textarea
                        placeholder="Add a note for your expense (optional)"
                        className="textarea"
                        value={note}
                        onChange={this.onNoteChange}
                    ></textarea>
               
                    <div>
                    <DatePicker
                        className="text-input"
                        selected={this.state.createdAt}
                        onChange={this.handleDatePick}
                        dateFormat="P"
                        // showIcon
                        toggleCalendarOnIconClick
                    />
                    </div>
                    <div>
                    <button className="button">Add Expense</button>
                    </div>   
               
                 
                   
               
                 
                
                </form>
        );
    }
}
