import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import { TodoContainer } from './containers'
import { Navbar } from './components/Navbar'

import 'antd/dist/antd.css'

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <div className="container">
        <Switch>
          <Route path="/" component={TodoContainer} exact />
        </Switch>
      </div>
    </BrowserRouter>
  )
}

export default App
