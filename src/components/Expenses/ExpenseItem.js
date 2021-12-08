import { useState } from 'react';
import ExpenseDate from './ExpenseDate';
import Card from '../UI/Card';
import './ExpenseItem.css';
// Creating a new component for expense tracking.
function ExpenseItem(props) {
	const [title, setTitle] = useState(props.title);
	function clickHandler() {
		setTitle('Updated');
		// console.log(title);
	}
	return (
		<Card className='expense-item'>
			<ExpenseDate date={props.date} />
			<div className='expense-item__description'>
				<h2>{title}</h2>
				<div className='expense-item__price'>
					<p>${props.amount}</p>
				</div>
				<button onClick={clickHandler}>Change title</button>
			</div>
		</Card>
	);
}
export default ExpenseItem;
