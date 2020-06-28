import React from 'react';
import TextField from '@material-ui/core/TextField';
import { useState } from 'react'; // function that takes initial state and returns array

const TodoForm = ({ saveTodo }) => {
	const [value, setValue] = useState('');

	return (
		<form onSubmit={(event) => { event.preventDefault(); saveTodo(value); setValue(''); }} >
			<TextField
				varient="outlined"
				margin="normal"
				placeholder="Add To Do"
				onChange={(event) => { setValue(event.target.value) }}
				value={value} 
			/>
		</form>
		);
};

export default TodoForm;