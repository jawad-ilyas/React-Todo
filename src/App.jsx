import React from 'react'
import AddTodo from './components/AddTodo'
import Todo from './components/Todo'

function App() {
  return (
    <div className='bg-slate-300 h-screen w-full'>
      <div className='max-w-screen-md mx-auto'>
        <AddTodo />
        <Todo />
      </div>
    </div>
  )
}

export default App