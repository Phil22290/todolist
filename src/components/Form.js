import React from "react";

const Form = ({ inputText, setInputText, todos, setTodos, setStatus }) => {
	// HANDLERS INPUT & SUBMIT
	const inputTextHandler = (e) => {
		setInputText(e.target.value);
	};

	const submitTodoHandler = (e) => {
		// Prevent refresh on submit
		e.preventDefault();

		// adds entered task to array
		setTodos([
			...todos,
			{ text: inputText, completed: false, id: Math.random() * 1000 },
		]);
		setInputText("");
		// console.log(todos);
	};

	const statusHandler = (e) => {
		console.log(e);
		setStatus(e.target.value);
	};

	return (
		<form>
			{/* INPUT FIELD */}
			<input
				value={inputText}
				onChange={inputTextHandler}
				type="text"
				className="todo-input"
			/>
			{/* SUBMIT BUTTON */}
			<button onClick={submitTodoHandler} className="todo-button" type="submit">
				<i className="fas fa-plus-square"></i>
			</button>
			{/* FILTERS */}
			<div className="select">
				<select onChange={statusHandler} name="todos" className="filter-todo">
					<option value="all">All</option>
					<option value="completed">Completed</option>
					<option value="uncompleted">Uncompleted</option>
				</select>
			</div>
		</form>
	);
};

export default Form;
