import React, { useState } from 'react'

import { TodoInput } from './TodoInput'
import { TodoList } from './TodoList'
import { Container } from './styled'

function Todo() {
  const [todos, setTodos] = useState([])

  return (
    <Container>
      <TodoInput todos={todos} setTodos={setTodos} />
      <TodoList todos={todos} setTodos={setTodos} />
    </Container>
  )
}

export { Todo }
