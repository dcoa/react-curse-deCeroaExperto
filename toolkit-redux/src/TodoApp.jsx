import { useState } from "react"
import { useGetTodoByIdQuery, useGetTodosQuery } from "./store/api/todosApi"


export const TodoApp = () => {
  // const {data: todos = [], isLoading } = useGetTodosQuery()
  const [todoId, setTodoId] = useState(1)
  const { data: todo, isLoading } = useGetTodoByIdQuery(todoId)

  const nextTodo = () => {
    setTodoId( todoId + 1 )
  }
  const prevTodo = () => {
    if (todoId === 1) return
    setTodoId( todoId - 1 )
  }
  return (
    <>
      <h1>Todos - RTK query</h1>
      <pre>...</pre>
      <h4>isLoading: {isLoading ? 'true' : 'false'}</h4>
      <pre>...</pre>

      {/* <ul>
      {
        todos.map(todo => (<li key={todo.id}>{todo.title} <strong>{todo.completed ? 'completed' : 'no yet'}</strong></li>))
      }
    </ul> */}
      <button onClick={prevTodo}>Prev ToDo</button>

      <button onClick={nextTodo}>Next ToDo</button>
      <br />
      <code>{JSON.stringify(todo)}</code>
    </>
  )
}
