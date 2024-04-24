import moment from "moment";
import selectExpensesTotal from "../selectors/expenses-total";

const expenses = [
    {
        id: '1',
        description: 'Gun',
        amount: 195,
        createdAt: 0
    },
    {
        id: '2',
        description: 'Rent',
        amount: 109500,
        createdAt: moment(0).subtract(4, 'days').valueOf()
    },
    {
        id: '3',
        description: 'Credit Card',
        amount: 4500,
        createdAt: moment(0).add(4, 'days').valueOf()
    }
];

const expenses2 = [expenses[0] , expenses[2]]; 
const total = selectExpensesTotal(expenses2);
const DummyData = () => (
    <div>
        <p>total is {total}</p>
    </div>
);

export default DummyData;