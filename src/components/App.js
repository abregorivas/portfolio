import React from 'react'
import { BrowserRouter, Route } from 'react-router-dom'
import '../styles/main.css'
import Home from './Home'

const App = () => (
  <BrowserRouter>
    <div className='container'>
      <Route exact path='/' component={Home} />
    </div>
  </BrowserRouter>
)

export default App
