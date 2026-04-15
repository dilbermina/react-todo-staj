import { useState } from 'react'
import TodoForm from '../components/TodoForm'
import TodoList from '../components/TodoList'
import type { Todo } from '../interfaces/Todo'

function TodoPage() {
  const [todos, setTodos] = useState<Todo[]>([])
  const [inputValue, setInputValue] = useState('')

  const handleAddTodo = () => {
    if (inputValue.trim() === '') {
      alert('Lütfen görev giriniz')
      return
    }

    const newTodo: Todo = {
      id: Date.now(),
      title: inputValue,
      completed: false,
    }

    setTodos([...todos, newTodo])
    setInputValue('')
  }

  const handleDeleteTodo = (id: number) => {
    const filteredTodos = todos.filter((todo) => todo.id !== id)
    setTodos(filteredTodos)
  }

  const handleToggleComplete = (id: number) => {
    const updatedTodos = todos.map((todo) =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    )
    setTodos(updatedTodos)
  }

  const handleEditTodo = (id: number) => {
    const todoToEdit = todos.find((todo) => todo.id === id)

    if (!todoToEdit) return

    const newTitle = prompt('Yeni görev adını giriniz', todoToEdit.title)

    if (newTitle === null || newTitle.trim() === '') return

    const updatedTodos = todos.map((todo) =>
      todo.id === id ? { ...todo, title: newTitle } : todo
    )

    setTodos(updatedTodos)
  }

  return (
    <div className="container py-5">
      <h1 className="text-center mb-4">Todo App Projesi</h1>

      <TodoForm
        inputValue={inputValue}
        setInputValue={setInputValue}
        handleAddTodo={handleAddTodo}
      />

      <TodoList
        todos={todos}
        handleDeleteTodo={handleDeleteTodo}
        handleToggleComplete={handleToggleComplete}
        handleEditTodo={handleEditTodo}
      />
    </div>
  )
}

export default TodoPage