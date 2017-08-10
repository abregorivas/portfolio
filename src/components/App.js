import React from 'react'
import { BrowserRouter, Route } from 'react-router-dom'
import '../styles/main.scss'

// === COMPONENTS ===
import Home from './Home'

const App = () => (
  <BrowserRouter>
    <div>
      <Route exact path='/' component={Home} />
    </div>
  </BrowserRouter>
)

export default App
