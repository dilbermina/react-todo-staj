type TodoFormProps = {
    inputValue: string
    setInputValue: (value: string) => void
    handleAddTodo: () => void
  }
  
  function TodoForm({ inputValue, setInputValue, handleAddTodo }: TodoFormProps) {
    return (
      <div className="card p-3 mb-4">
        <h3 className="mb-3">Yeni Görev Ekle</h3>
        <div className="d-flex gap-2">
          <input
            type="text"
            className="form-control"
            placeholder="Görev giriniz"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
          />
          <button className="btn btn-primary" onClick={handleAddTodo}>
            Ekle
          </button>
        </div>
      </div>
    )
  }
  
  export default TodoForm