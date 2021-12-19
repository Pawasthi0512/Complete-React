import ExpenseItem from './ExpenseItem';
import Card from '../UI/Card';
import './Expenses.css';

function Expenses(props) {
	return (
		<Card className='expenses'>
			{props.items.map((expenses) => (
				<ExpenseItem
					key={expenses.id}
					title={expenses.title}
					amount={expenses.amount}
					date={expenses.date}
				/>
			))}
		</Card>
	);
}

export default Expenses;
