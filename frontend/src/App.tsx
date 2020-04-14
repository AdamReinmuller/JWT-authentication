import React, { FC } from 'react';
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';

const App: FC = () => {
  return (
    <BrowserRouter>
      <header>
        <div>
          <Link to='/'>Home</Link>
        </div>
        <div>
          <Link to='/register'>Register</Link>
        </div>
        <div>
          <Link to='/login'>Login</Link>
        </div>
      </header>
      <div>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/register' component={Register} />
          <Route exact path='/login' component={Login} />
        </Switch>
      </div>
    </BrowserRouter>
  );
};

export default App;
