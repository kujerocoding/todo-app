import React from 'react'

const User = ({todos, setIsLoggedIn, user}) => {
  return (
    <div className='bg-primary p-4 text-center rounded-2xl lg:basis-1/3'>
        <p className='font-bold text-3xl'>Welcome <span className='capitalize'>{user}</span>!</p>
        <div className='flex justify-between mt-4'>
        <p>You have <span className='font-bold'>{todos?.length}</span> Task</p>
        <button onClick={() => setIsLoggedIn(false)}
        className='underline text-accent hover:text-text'
        >Logout</button>
        </div>
    </div>
  )
}

export default User