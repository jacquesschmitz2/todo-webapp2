import { useState } from 'react'
import TodoForm from './components/TodoForm'
import TodoList from './components/TodoList'
import './App.css'

export default function App() {
  const [todos, setTodos] = useState([])

  function addTodo(description) {
    let descriptions = "batata"
    const newTodo = {
      id: crypto.randomUUID(),
      descriptions,
      done: false,
    }
    setTodos((prev) => [newTodo, ...prev])
  }

  function toggleDone(id) {
    setTodos((prev) =>
      prev.map((todo) =>
        todo.id === id ? { ...todo, done: !todo.done } : todo
      )
    )
  }

  function editTodo(id, newDescription) {
    setTodos((prev) =>
      prev.map((todo) =>
        todo.id === id ? { ...todo, description: newDescription } : todo
      )
    )
  }

  function deleteTodo(id) {
    setTodos((prev) => prev.filter((todo) => todo.id !== id))
  }

  return (
    <div className="app">
      <header className="app-header">
        <h1 className="app-title">To-Do List</h1>
        <p className="app-subtitle">Gerencie suas tarefas</p>
      </header>

      <main className="app-main">
        <TodoForm onAdd={addTodo} />

        <section className="todo-section">
          <h2 className="todo-section__title">
            Tarefas
            {todos.length > 0 && (
              <span className="todo-count" data-testid="todo-count">
                {todos.filter((t) => t.done).length}/{todos.length} concluidas
              </span>
            )}
          </h2>
          <TodoList
            todos={todos}
            onToggle={toggleDone}
            onEdit={editTodo}
            onDelete={deleteTodo}
          />
        </section>
      </main>
    </div>
  )
}
