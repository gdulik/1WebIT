import React, { useState } from 'react'
import { v4 as uuid } from 'uuid'

import { Form, Input, Button } from './styled'

function TodoInput({ todos, setTodos }) {
  const [term, setTerm] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    setTodos([...todos, { id: uuid(), task: term, isFinished: false }])
    setTerm('')
  }

  return (
    <React.Fragment>
      <Form onSubmit={handleSubmit}>
        <Input
          placeholder="Enter a new todo"
          id="todo-input"
          type="text"
          value={term}
          onChange={(e) => setTerm(e.target.value)}
        />
        <Button>Add</Button>
      </Form>
    </React.Fragment>
  )
}

export { TodoInput }
