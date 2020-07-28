import React from 'react'
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom'
import { Home } from './pages/Home'
import { Login } from './pages/Login'
import { Register } from './pages/Register'

export const Routes: React.FC = () => {
 
  return (
    <BrowserRouter>
    <div>
      <header>
        <div>
          <Link to='/register'>register</Link>
        </div>
        <div>
          <Link to='/login'>login</Link>
        </div>
      </header>
    <Switch>
      <Route exact path='/' component={Home} />
      <Route exact path='/login' component={Login} />
      <Route exact path='/register' component={Register} />
    </Switch>
    </div>
    </BrowserRouter>
  )
}

