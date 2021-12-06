import ExpenseDate from './ExpenseDate';
import Card from '../UI/Card';
import './ExpenseItem.css';
// Creating a new component for expense tracking.
function ExpenseItem(props) {
	return (
		<Card className='expense-item'>
			<ExpenseDate date={props.date} />
			<div className='expense-item__description'>
				<h2>{props.title}</h2>
				<div className='expense-item__price'>
					<p>${props.amount}</p>
				</div>
			</div>
		</Card>
	);
}
export default ExpenseItem;
