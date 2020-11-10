import React from 'react'
import ReactDOM from 'react-dom'
import DashboardRoutes from 'components/routes/DashboardRoutes'
import { Provider } from 'react-redux'
import store from 'redux/store'

ReactDOM.render(
  <Provider store={store}>
    <DashboardRoutes />
  </Provider>,
  document.getElementById('root')
)