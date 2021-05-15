import React from 'react'

import { Wrapper } from './styled'

function Reminder({ text, background, color }) {
  return (
    <Wrapper background={background} color={color}>
      {text}
    </Wrapper>
  )
}

export { Reminder }
