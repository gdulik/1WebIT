import React from 'react'

import { Wrapper, Header, HeaderLink, HeaderSection } from './styled'

const Layout = ({ children }) => {
  return (
    <React.Fragment>
      <Header>
        <HeaderSection>
          <HeaderLink href="/">Todo React App</HeaderLink>
        </HeaderSection>
      </Header>
      <Wrapper>{children}</Wrapper>
    </React.Fragment>
  )
}

export { Layout }
