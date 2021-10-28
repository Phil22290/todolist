import "./App.css";
import React, { useState, useEffect } from "react";

// COMPONENTS
import Form from "./components/Form";
import TodoList from "./components/TodoList";

function App() {
	//  STATES

	const [inputText, setInputText] = useState("");
	const [todos, setTodos] = useState([]);
	const [status, setStatus] = useState("all");
	const [filteredTodos, setFilteredTodos] = useState([]);

	// run once when app starts
	useEffect(() => {
		getLocalTodos();
	}, []);
	// USE EFFECT - run function when certain [state] changes

	useEffect(
		() => {
			filterHandler();
			saveLocalTodos();
		},
		// eslint-disable-next-line react-hooks/exhaustive-deps
		[todos, status]
	);

	// FUNCTIONS - EVENTS

	const filterHandler = () => {
		switch (status) {
			case "completed":
				setFilteredTodos(todos.filter((todo) => todo.completed === true));
				break;
			case "uncompleted":
				setFilteredTodos(todos.filter((todo) => todo.completed === false));
				break;
			default:
				setFilteredTodos(todos);
				break;
		}
	};

	// Save to local
	const saveLocalTodos = () => {
		localStorage.setItem("todos", JSON.stringify(todos));
	};

	const getLocalTodos = () => {
		if (localStorage.getItem("todos") === null) {
			localStorage.setItem("todos", JSON.stringify([]));
		} else {
			let todoLocal = JSON.parse(localStorage.getItem("todos"));
			setTodos(todoLocal);
		}
	};

	return (
		<div className="App">
			{/* HEADER */}
			<header>
				<h1>TODO LIST</h1>
			</header>
			{/* COMPONENTS */}
			<Form
				inputText={inputText}
				setInputText={setInputText}
				todos={todos}
				setTodos={setTodos}
				setStatus={setStatus}
			/>
			<TodoList
				filteredTodos={filteredTodos}
				setTodos={setTodos}
				todos={todos}
			/>
		</div>
	);
}

export default App;
