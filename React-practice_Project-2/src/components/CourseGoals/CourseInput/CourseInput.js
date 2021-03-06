import React, { useState } from 'react';

import Button from '../../UI/Button/Button';
import './CourseInput.css';

const CourseInput = (props) => {
	const [enteredValue, setEnteredValue] = useState('');
	const [isValid, setIsValid] = useState(true);

	const goalInputChangeHandler = (event) => {
		if (event.target.value) setIsValid(true);
		setEnteredValue(event.target.value);
	};

	const formSubmitHandler = (event) => {
		event.preventDefault();
		// console.log(enteredValue);
		if (enteredValue.trim().length === 0) {
			setIsValid(false);
			return;
		}
		props.onAddGoal(enteredValue);
	};

	return (
		<form onSubmit={formSubmitHandler}>
			<div className={`form-control ${!isValid ? 'invalid' : ''}`}>
				<label /**style={{ color: isValid ? 'black' : 'red' }}**/>
					{' '}
					Course Goal
				</label>
				<input
					// style={{
					// 	backgroundColor: isValid ? 'transparent' : 'salmon',
					// 	borderColor: isValid ? 'black' : 'red',
					// }}
					type='text'
					onChange={goalInputChangeHandler}
				/>
			</div>
			<Button type='submit'>Add Goal</Button>
		</form>
	);
};

export default CourseInput;
