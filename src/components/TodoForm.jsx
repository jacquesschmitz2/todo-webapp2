import { useState } from 'react'

export default function TodoForm({ onAdd }) {
  const [description, setDescription] = useState('')

  function handleSubmit(e) {
    e.preventDefault()
    const trimmed = description.trim()
    if (!trimmed) return
    onAdd(trimmed)
    setDescription('')
  }

  return (
    <form className="todo-form" onSubmit={handleSubmit} data-testid="todo-form">
      <input
        type="text"
        className="todo-input"
        placeholder="Descreva o seu to-do..."
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        data-testid="todo-input"
      />
      <button type="submit" className="btn btn-primary" data-testid="add-todo-btn">
        Adicionar
      </button>
    </form>
  )
}
