import React from 'react'
import ReactDOM from 'react-dom'
import AppRouter from 'routers/AppRouter'

import { Provider } from 'react-redux'
import store from 'redux/store'

import { ThemeProvider } from '@material-ui/core'
import { rootTheme } from 'config/muiTheme'

import './style.css'

ReactDOM.createPortal

ReactDOM.render(
   <ThemeProvider theme={rootTheme}>
      <Provider store={store}>
         <AppRouter />
      </Provider>
   </ThemeProvider>,
   document.getElementById('root')
)