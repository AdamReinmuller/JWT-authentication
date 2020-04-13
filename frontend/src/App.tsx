import React, { FC } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

const App: FC = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path='/' render={() => <div>hi</div>} />
      </Switch>
    </BrowserRouter>
  );
};

export default App;
