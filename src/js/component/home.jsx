import React from "react";
import TodoForm  from "./todoList.jsx";
import "./todoList.css"



//create your first component
const Home = () => {
	return (
		<div className="text-center">
			<h1 className="text-center mt-5">My To-do List</h1>
		<div>
				<TodoForm />
		</div>
			<a href="#" className="btn btn-success">
				If you see this green button... bootstrap is working...
			</a>

		</div>
	);
};

export default Home
