import React, { useState } from 'react'

import { Item, Checkbox, Task, Button } from './styled'
import { Reminder } from '../../../../components/Reminder'

function TodoItem({ id, task, isFinished, handleChange }) {
  const [showForm, setShowForm] = useState(false)
  const [reminderTime, setReminderTime] = useState('')
  const [showErrorReminder, setShowErrorReminder] = useState(false)
  const [showSetReminder, setShowSetReminder] = useState(false)
  const [showSuccessReminder, setShowSuccessReminder] = useState(false)

  const setReminder = () => {
    setShowForm(!showForm)
    if (Date.now() < Date.parse(reminderTime)) {
      setShowSetReminder(true)
      setTimeout(() => {
        setShowSetReminder(false)
      }, 3000)
      setTimeout(() => {
        setShowSuccessReminder(true)
        setTimeout(() => {
          setShowSuccessReminder(false)
        }, 10000)
      }, Date.parse(reminderTime) - Date.now())
    } else {
      setShowErrorReminder(true)
      setTimeout(() => {
        setShowErrorReminder(false)
      }, 3000)
    }
  }

  return (
    <React.Fragment>
      <Item>
        {showForm ? (
          <React.Fragment>
            <input
              type="datetime-local"
              step="1"
              value={reminderTime}
              onChange={(e) => setReminderTime(e.target.value)}
            />
            <Button onClick={() => setReminder(reminderTime)}>
              Set Reminder
            </Button>
            <Button onClick={() => setShowForm(!showForm)}>Cancel</Button>
          </React.Fragment>
        ) : (
          <React.Fragment>
            <Checkbox
              type="checkbox"
              value={isFinished}
              checked={isFinished ? 'checked' : ''}
              onChange={() => handleChange(id)}
            />
            <Task isFinished={isFinished} onClick={() => handleChange(id)}>
              {task}
            </Task>
            <Button
              disabled={isFinished ? true : false}
              onClick={() => setShowForm(!showForm)}
            >
              <i className="far fa-clock" />
            </Button>
          </React.Fragment>
        )}
      </Item>
      {showErrorReminder && (
        <Reminder text="Not valid time" background="red" color="white" />
      )}
      {showSetReminder && (
        <Reminder
          text={`Reminder set for ${task}`}
          background="green"
          color="white"
        />
      )}
      {showSuccessReminder && (
        <Reminder
          text={`You should do ${task}`}
          background="white"
          color="black"
        />
      )}
    </React.Fragment>
  )
}

export { TodoItem }
