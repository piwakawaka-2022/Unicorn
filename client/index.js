import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { configureStore } from '@reduxjs/toolkit'
import { BrowserRouter as Router } from 'react-router-dom'

import reducers from './reducers'
import App from './components/App'

const store = configureStore({ reducer: { reducers } })

document.addEventListener('DOMContentLoaded', () => {
  render(
    <Provider store={store}>
      <Router>
        <App />
      </Router>
    </Provider>,
    document.getElementById('app')
  )
})
