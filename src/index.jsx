import React from 'react'
import ReactDOM from 'react-dom'
import AppRouter from 'routers/AppRouter'

import 'moment/locale/es'

import { Provider } from 'react-redux'
import store from 'redux/store'

import 'antd/dist/antd.css'

/*» CONFIG BREAK POINT'S  */
import ReactBreakPoints from 'react-breakpoints'
import { breakpoints } from 'constants/breakpoints'

ReactDOM.render(
   <ReactBreakPoints breakpoints={breakpoints}>
      <Provider store={store}>
         <AppRouter />
      </Provider>
   </ReactBreakPoints>,
   document.getElementById('root')
)