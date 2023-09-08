import React, { useState } from "react";
import {motion} from 'framer-motion';

const Todo = () => {
  const [todoList, setTodoList] = useState([]);

  const addNewTodo = (e) => {
    if(!e.target.value.trim()) return;
    // console.log(e.code);
    if (e.code === "Enter") {
      console.log(e.target.value);
      setTodoList([...todoList, { text: e.target.value, completed: false }]);
      e.target.value = "";
      console.log(todoList);
    }
  };

  const completeTodo = (index) => {
    console.log(index);
    let temp = todoList;
    temp[index].completed = !temp[index].completed;
    setTodoList([...temp]);
  }

  const deleteTodo = (index) => {
    let temp = todoList;
    temp.splice(index, 1);
    setTodoList([...temp]);
  }

  return (
    <div className="bg-body-secondary vh-100">
      <div className="container py-5">
        <h1 className="text-center mt-5">Todo App</h1>

        <div className="card">
          <div className="card-header">
            <input
              type="text"
              className="form-control"
              onKeyDown={addNewTodo}
            />
          </div>
          <div className="card-body">
            <ul className="list-group">
              {
              todoList.map((todo, index) => {
                return <motion.li
                  initial={{opacity: 0, x: '200%'}}
                  animate={{opacity: 1, x:0}}
                  exit={{opacity: 0, x: '-200%'}}
                  transition={{duration: 0.3, type: "spring"}}
                  className="list-group-item"> <input checked={todo.completed} type="checkbox" /> 
                        <span className={ todo.completed ? 'fw-bold text-success text-decoration-line-through' : 'fw-bold text-warning' }> {todo.text} </span>
                    <br /><button className="btn btn-primary mt-3" onClick={ () => { completeTodo(index) } } >Complete</button>
                    <button className="btn btn-danger mt-3" onClick={ () => { deleteTodo(index) } } >Delete</button>
                 </motion.li>
              })
              }
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Todo;