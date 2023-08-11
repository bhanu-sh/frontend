import React, { useState } from 'react'

const Todo = () => {

    const [todoList, setTodoList] = useState([]);

    const addNewTodo = (e) => {
        // console.log(e.code);
        if(e.code === 'Enter'){
            console.log(e.target.value);
            setTodoList([...todoList, {text: e.target.value, completed: false}]);
            console.log(todoList);
        }
    };

    const completeTodo = (index) => {
        console.log(index);
        let temp = todoList;
        temp[index].completed = true;
        setTodoList([...temp]);
    }

  return (
    <div className='bg-body-secondary vh-100'>
        <div className="container py-5">

            <h1 className='text-center mt-5'>Todo App</h1>

            <div className="card">
                <div className="card-header">
                    <input type="text" className='form-control' onKeyDown={addNewTodo} />
                </div>
                <div className="card-body">
                    <ul className="list-group">
                        {
                            todoList.map( (todo, index) => { return (
                                <li className='list-group-item'> <input checked={todo.completed} type='checkbox' /> {todo.text}
                                <button className='btn btn-primary' onClick={ () => { completeTodo(index) }}>Complete</button></li>
                            ) } )
                        }
                    </ul>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Todo