import React from 'react'

import GlobalStyles from './globalStyles'
import { Layout } from './components/Layout'

import { Todo } from './pages/Todo'

function App() {
  return (
    <React.Fragment>
      <GlobalStyles />
      <Layout>
        <Todo />
      </Layout>
    </React.Fragment>
  )
}

export default App
