import React from 'react';

import ExpenseItem from './ExpenseItem.js'
import Card from '../UI/Card.js'
import './Expenses.css'

function Expenses(props) {

    return (
            <Card className="expenses">
                <ExpenseItem
                    title={props.items[0].title}
                    amount={props.items[0].amount}
                    date={props.items[0].date}
                />
                <ExpenseItem
                    title={props.items[1].title}
                    amount={props.items[1].amount}
                    date={props.items[1].date}
                />
                <ExpenseItem
                    title={props.items[2].title}
                    amount={props.items[2].amount}
                    date={props.items[2].date}
                />
            </Card>
    );
}

export default Expenses;