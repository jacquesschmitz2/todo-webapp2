import TodoItem from './TodoItem'

export default function TodoList({ todos, onToggle, onEdit, onDelete }) {
  if (todos.length === 0) {
    return (
      <p className="todo-list__empty" data-testid="todo-list-empty">
        Nenhum to-do cadastrado. Adicione o primeiro acima!
      </p>
    )
  }

  return (
    <ul className="todo-list" data-testid="todo-list">
      {todos.map((todo) => (
        <TodoItem
          key={todo.id}
          todo={todo}
          onToggle={onToggle}
          onEdit={onEdit}
          onDelete={onDelete}
        />
      ))}
    </ul>
  )
}
