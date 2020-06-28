import React from 'react';
import TextField from '@material-ui/core/TextField';
import { useState } from 'react'; // function that takes initial state and returns array
import useInputState from './useInputState';


const TodoForm = ({ saveTodo }) => {
	const { value, reset, onChange } = useInputState('');

	return (
		<form onSubmit={(event) => { event.preventDefault(); saveTodo(value); reset(); }} >
			<TextField
				varient="outlined"
				margin="normal"
				placeholder="Add To Do"
				onChange={onChange}
				value={value} 
			/>
		</form>
		);
};

export default TodoForm;