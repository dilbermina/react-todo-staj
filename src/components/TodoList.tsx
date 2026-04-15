import type { Todo } from '../interfaces/Todo'

type TodoListProps = {
  todos: Todo[]
  handleDeleteTodo: (id: number) => void
  handleToggleComplete: (id: number) => void
  handleEditTodo: (id: number) => void
}

function TodoList({
  todos,
  handleDeleteTodo,
  handleToggleComplete,
  handleEditTodo,
}: TodoListProps) {
  return (
    <div className="card p-3">
      <h3 className="mb-3">Görev Listesi</h3>

      {todos.length === 0 ? (
        <p>Henüz görev eklenmedi.</p>
      ) : (
        <ul className="list-group">
          {todos.map((todo) => (
            <li
              key={todo.id}
              className="list-group-item d-flex justify-content-between align-items-center"
            >
              <div>
                <span
                  style={{
                    textDecoration: todo.completed ? 'line-through' : 'none',
                  }}
                >
                  {todo.title}
                </span>
              </div>

              <div className="d-flex gap-2">
                <button
                  className="btn btn-success btn-sm"
                  onClick={() => handleToggleComplete(todo.id)}
                >
                  Durum
                </button>

                <button
                  className="btn btn-warning btn-sm"
                  onClick={() => handleEditTodo(todo.id)}
                >
                  Güncelle
                </button>

                <button
                  className="btn btn-danger btn-sm"
                  onClick={() => handleDeleteTodo(todo.id)}
                >
                  Sil
                </button>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}

export default TodoList