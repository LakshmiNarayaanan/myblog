import React from 'react'
import ReactDom from 'react-dom'
import {Provider} from 'react-redux'
import App from './app.js'
import reducers from './reducers'
import {createStore,applyMiddleware} from 'redux'
import thunk from 'redux-thunk'

ReactDom.render(<Provider store={createStore(reducers,applyMiddleware(thunk))}><App /></Provider>,document.getElementById('root'))
