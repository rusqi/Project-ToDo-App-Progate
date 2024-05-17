import React from 'react'
import TodoItem from './TodoItem'

// Menerima function toggleCompleted sebagai sebuah prop
const Todos = ({ todos, toggleCompleted, deleteTodo }) => {
  return (
      <div style={{ width: '40%', margin: '0 auto' }}>
        {todos.map((todo) => {
        return (
          <TodoItem
            key={todo.id}
            todo={todo}
            // Teruskan function toggleCompleted ke component TodoItem
            toggleCompleted={toggleCompleted}
            deleteTodo={deleteTodo}
          />
        )
      })}
    </div>
  )
}
  
  export default Todos