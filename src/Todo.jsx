import React, { useState } from 'react'

const Todo = ({todos, setTodos}) => {

    const [inputValue, setInputValue] = useState('');
    const [comments, setComments] = useState({});
  
    const addTodo = () => {
      if (inputValue !== '') {
        const newTodo = {
          id: new Date().getTime(),
          text: inputValue,
        };
        setTodos([...todos, newTodo]);
        setComments({ ...comments, [newTodo.id]: '' });
        setInputValue('');
      }
    };
  
    const deleteTodo = (id) => {
      const updatedTodos = todos.filter((todo) => todo.id !== id);
      const updatedComments = { ...comments };
      delete updatedComments[id];
      setTodos(updatedTodos);
      setComments(updatedComments);
    };
  
    const updateTodo = (id, newText) => {
      const updatedTodos = todos.map((todo) =>
        todo.id === id ? { ...todo, text: newText } : todo
      );
      setTodos(updatedTodos);
    };
  
    const updateComment = (id, newComment) => {
      setComments({ ...comments, [id]: newComment });
    };

  return (
    <div className="bg-secondary h-96 p-4 text-text overflow-y-auto mt-2 rounded-2xl">

      <div className='mb-4 border-2 border-primary p-4 flex flex-col gap-4 rounded-2xl'>
          <p className='text-text text-center '>Add New Task</p>
          <div className='flex gap-4 items-center'>
              <p className='font-bold'>Title: </p>
              <input
                className='text-black w-full rounded-md p-2'
                type="text"
                maxLength="20"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
              />
          </div>
          <button onClick={addTodo} className='text-text w-2/3 lg:w-1/3 mx-auto bg-accent py-2 rounded-full hover:text-accent hover:bg-text transition duration-150 ease-out'>Add</button>
          </div>

      <div>
        <ul>
          {todos.map((todo) => (
            <li key={todo.id} className='flex flex-col gap-2 p-2 rounded-lg bg-primary mb-4'>
              <div className='w-full flex justify-between gap-4'>
                <p className='font-bold'>Task Title : </p>
                <input
                className='bg-transparent capitalize'
                type="text"
                maxlength="20"
                value={todo.text}
                onChange={(e) => updateTodo(todo.id, e.target.value)}
              />
              </div>
              <div className='flex justify-between gap-4'>
                <p className='font-bold'>Comment : </p>
                <input
                className='bg-transparent capitalize'
                type="text"
                maxlength="20"
                value={comments[todo.id] || ''}
                placeholder="Add comment"
                onChange={(e) => updateComment(todo.id, e.target.value)}
              />
              </div>
              <button onClick={() => deleteTodo(todo.id)} className='text-text w-2/3 lg:w-1/3 mx-auto bg-accent py-2 rounded-full hover:text-accent hover:bg-text transition duration-150 ease-out'>Delete</button>
            </li>
          ))}
        </ul>
      </div>

      

    </div>
  )
}

export default Todo