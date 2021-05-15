import React, { useEffect, useState } from 'react'

import { TodoItem } from './TodoItem'
import { Wrapper, Filter, FilterType } from './styled'

function TodoList({ todos, setTodos }) {
  const [filteredTodos, setFilteredTodos] = useState(todos)
  const [filter, setFilter] = useState('all')

  const filterTypes = ['all', 'unfinished', 'finished']

  const handleIsFinishedChange = (id) => {
    const newTodos = todos.map(
      (todo) =>
        todo.id === id ? { ...todo, isFinished: !todo.isFinished } : todo
    )
    setTodos([...newTodos])
  }

  useEffect(
    () => {
      if (filter === 'all') {
        setFilteredTodos(todos)
      } else if (filter === 'unfinished') {
        setFilteredTodos(todos.filter((todo) => todo.isFinished === false))
      } else if (filter === 'finished') {
        setFilteredTodos(todos.filter((todo) => todo.isFinished === true))
      }
    },
    [todos, filter]
  )

  return todos.length === 0 ? null : (
    <Wrapper>
      <Filter>
        {filterTypes.map((type) => (
          <FilterType
            key={type}
            active={filter === type ? true : false}
            onClick={() => setFilter(type)}
          >
            {type}
          </FilterType>
        ))}
      </Filter>
      {filteredTodos.map((todo) => (
        <TodoItem
          key={todo.id}
          {...todo}
          handleChange={handleIsFinishedChange}
        />
      ))}
    </Wrapper>
  )
}

export { TodoList }
