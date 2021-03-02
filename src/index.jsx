import React from 'react'
import ReactDOM from 'react-dom'
import AppRouter from 'routers/AppRouter'

import { Provider } from 'react-redux'
import store from 'redux/store'

import 'moment/locale/es'
import { ThemeProvider } from '@material-ui/core'


import { themeRoot } from 'config/muiTheme'
import 'antd/dist/antd.css'
import './style.css'

/*» CONFIG BREAK POINT'S  */
import ReactBreakPoints from 'react-breakpoints'
import { breakpoints } from 'constants/breakpoints'

ReactDOM.render(
   <ThemeProvider theme={themeRoot}>
      <ReactBreakPoints breakpoints={breakpoints}>
         <Provider store={store}>
            <AppRouter />
         </Provider>
      </ReactBreakPoints>
   </ThemeProvider>,
   document.getElementById('root')
)  