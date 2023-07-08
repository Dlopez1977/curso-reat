import React, { Fragment } from 'react'
import ReactDOM from 'react-dom/client'
import {App} from '/src/App'
import './index.css'
import './App.css'


const root = ReactDOM.createRoot(document.getElementById('root')) 
root.render(
  <Fragment>
    <App/>
  </Fragment>,
)
