import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

// RTK Query para el manejo de llamados al api 
export const todosApi = createApi({
  reducerPath: 'todos',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://jsonplaceholder.typicode.com/'
  }),
  endpoints: (builder) => ({
    getTodos: builder.query({
      query: () => '/todos'
    }),
    getTodoById: builder.query({
      query: (todoId) => `/todos/${todoId}`
    })
  })
})

export const { useGetTodosQuery, useGetTodoByIdQuery } = todosApi