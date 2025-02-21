import React, {useState} from 'react';

import './ExpenseItem.css';
import ExpenseDate from './ExpenseDate.js';
import Card from '../UI/Card.js';

function ExpenseItem(props) {

    const [title, setTitle] = useState(props.title);

    const clickHandler = () => {
        setTitle('Updated')
        console.log('clicked!');
    };

    return (
            <Card className='expense-item'>
                <ExpenseDate date={props.date}/>
                <div className='expense-item__description'>
                    <h2>{props.title}</h2>
                    <div className='expense-item__price'>{props.amount} kr</div>
                </div>
                <button onClick={clickHandler}></button>
            </Card>
    );
}

export default ExpenseItem;