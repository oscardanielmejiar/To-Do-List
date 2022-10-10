import React from "react";
import TodoList  from "./todoList.jsx";
import "./todoList.css"



//create your first component
const Home = () => {
	return (
		<div className="text-center">
			<h1 className="text-center mt-5">My To-do List</h1>
		<div>
				<TodoList />
		</div>
		
		</div>
	);
};

export default Home
