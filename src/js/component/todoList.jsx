import React, {useState} from "react";


const TodoForm = () =>{
    const [inputValue, setInputValue ] = useState('');

    return(<div className="task-box">
        <ul className="list-group">
            <li className=" input-group mb-3">
  <input type="text"  onChange={e => setInputValue(e.target.value)} value={inputValue}
  className="form-control" placeholder="No tasks, add a task" aria-label="No tasks, add a task" aria-describedby="button-addon2"/>
  <button className="btn btn-secondary" type="button" id="inputGroupFile01">Add Task</button></li>
  <li className="list-group-item">{inputValue}</li>
  <li className="list-group-item">Hola</li>
  <li className="list-group-item">Hola</li>
  <li className="list-group-item">Hola</li>
</ul>
    </div>)
}

export default TodoForm