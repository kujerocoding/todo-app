import { useState } from 'react'
import User from './User'
import Todo from './Todo'
import Login from './Login';


const App = () => {

  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [todos, setTodos] = useState([]);
  const [user, setUser] = useState(null)

  return (
    <main className='min-h-screen bg-bg text-text grid place-content-center'>
      {!isLoggedIn && <Login isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} setUser={setUser}/>}
      {isLoggedIn && <div className='lg:w-[500px]'>
        <User todos={todos} setIsLoggedIn={setIsLoggedIn} user={user} />
        <Todo todos={todos} setTodos={setTodos} user={user} />
      </div>}
      <footer className='text-gray-500 text-xs text-center mt-10'>© Copyright 2023 - TodoApp - coded by Jerome Manset</footer>
    </main>
  )
}

export default App
