import { useState } from 'react'

export default function TodoItem({ todo, onToggle, onEdit, onDelete }) {
  const [isEditing, setIsEditing] = useState(false)
  const [editValue, setEditValue] = useState(todo.description)

  function handleSave() {
    const trimmed = editValue.trim()
    if (!trimmed) return
    onEdit(todo.id, trimmed)
    setIsEditing(false)
  }

  function handleCancel() {
    setEditValue(todo.description)
    setIsEditing(false)
  }

  function handleKeyDown(e) {
    if (e.key === 'Enter') handleSave()
    if (e.key === 'Escape') handleCancel()
  }

  return (
    <li
      className={`todo-item${todo.done ? ' todo-item--done' : ''}`}
      data-testid="todo-item"
    >
      {isEditing ? (
        <div className="todo-item__edit">
          <input
            type="text"
            className="todo-input todo-input--inline"
            value={editValue}
            onChange={(e) => setEditValue(e.target.value)}
            onKeyDown={handleKeyDown}
            autoFocus
            data-testid="edit-input"
          />
          <div className="todo-item__actions">
            <button
              className="btn btn-primary btn-sm"
              onClick={handleSave}
              data-testid="save-edit-btn"
            >
              Salvar
            </button>
            <button
              className="btn btn-secondary btn-sm"
              onClick={handleCancel}
              data-testid="cancel-edit-btn"
            >
              Cancelar
            </button>
          </div>
        </div>
      ) : (
        <div className="todo-item__view">
          <button
            className={`todo-item__toggle${todo.done ? ' todo-item__toggle--done' : ''}`}
            onClick={() => onToggle(todo.id)}
            aria-label={todo.done ? 'Marcar como pendente' : 'Marcar como concluído'}
            data-testid="toggle-done-btn"
          >
            {todo.done ? '✓' : '○'}
          </button>
          <span
            className="todo-item__description"
            data-testid="todo-description"
          >
            {todo.description}
          </span>
          <div className="todo-item__actions">
            <button
              className="btn btn-secondary btn-sm"
              onClick={() => {
                setEditValue(todo.description)
                setIsEditing(true)
              }}
              data-testid="edit-btn"
            >
              Editar
            </button>
            <button
              className="btn btn-danger btn-sm"
              onClick={() => onDelete(todo.id)}
              data-testid="delete-btn"
            >
              Deletar
            </button>
          </div>
        </div>
      )}
    </li>
  )
}
