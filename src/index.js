import React from 'react'
import ReactDOM from 'react-dom'
import uniqid from 'uniqid'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import reducers from './reducers'
import App from './components/App'
import * as serviceWorker from './serviceWorker'
import './index.css'

const books = [
  {
    id: uniqid(),
    title: 'JS: The Good Parts',
    category: 'Learning',
  },
  {
    id: uniqid(),
    title: 'Eloquent JS',
    category: 'Learning',
  },
  {
    id: uniqid(),
    title: "You don't know JS",
    category: 'History',
  },
  {
    id: uniqid(),
    title: 'JS Ninja',
    category: 'Biography',
  },
]

const store = createStore(reducers, { books })

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root'),
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister()
