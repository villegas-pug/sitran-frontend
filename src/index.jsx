import React from 'react'
import ReactDOM from 'react-dom'
import AppRouter from 'components/routers/AppRouter'
import { Provider } from 'react-redux'
import store from 'redux/store'
import 'antd/dist/antd.css';


ReactDOM.render(
  <Provider store={store}>
    <AppRouter />
  </Provider>,
  document.getElementById('root')
)