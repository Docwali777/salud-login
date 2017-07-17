import React, { Component } from 'react'
import  { render } from 'react-dom'

import { Router, Route, IndexRoute, browserHistory} from 'react-router'

//redux functionality
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'
import { createStore, applyMiddleware, compose } from 'redux'


import reducers from './reducers/rootReducer'

const store = createStore(
  reducers,
compose(
  applyMiddleware(thunk),
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)
)

import Client from './client'
import Home from './components/pages/home'
import About from './components/pages/about'
import Contact from './components/pages/contact'
import Register from './components/pages/userForms/register'


render(<Provider store={store}>
  <Router history={browserHistory} >
    <Route path='/' component={Client} >
        <IndexRoute component={Home} />
          <Route path='/about' component={About} />
          <Route path='/contact' component={Contact} />
          <Route path='/register' component={Register} />
    </Route>
  </Router>
</Provider>, document.getElementById('wali'))
