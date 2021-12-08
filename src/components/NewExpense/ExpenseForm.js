import react, { useState } from 'react';
import './ExpenseForm.css';
function ExpenseForm() {
	const [enteredTitle, setEnteredTitle] = useState('');
	function titleChangeHandler(event) {
		setEnteredTitle(event.target.value);
	}
	// console.log(enteredTitle);

	const [enteredAmount, setEnteredAmount] = useState(0);
	function amountChangeHandler(event) {
		setEnteredAmount(event.target.value);
		// console.log(enteredAmount);
	}
	const [enteredDate, setEnteredDate] = useState('2015-01-01');
	function dateChangeHandler(event) {
		setEnteredDate(event.target.value);
	}
	console.log(enteredDate);
	return (
		<form>
			<div className='new-expense__controls'>
				<div className='new-expense__control'>
					<label>Title</label>
					<input type='text' onChange={titleChangeHandler}></input>
				</div>
				<div className='new-expense__control'>
					<label>Amount</label>
					<input
						type='number'
						min='0.01'
						step='0.001'
						onChange={amountChangeHandler}
					></input>
				</div>
				<div className='new-expense__control'>
					<label>Date</label>
					<input
						type='date'
						min='01/01/2015'
						max='31/12/2022'
						onChange={dateChangeHandler}
					></input>
				</div>
			</div>
			<div className='new-expense__actions'>
				<button type='submit'>Add Expense</button>
			</div>
		</form>
	);
}
export default ExpenseForm;
