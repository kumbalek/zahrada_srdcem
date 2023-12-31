import React from 'react'
import {ThemeProvider} from 'styled-components'

import theme from '../lib/theme'

const Layout = ({children}) => (
  <ThemeProvider theme={theme}>
    <div>{children}</div>
  </ThemeProvider>
)

export default Layout
