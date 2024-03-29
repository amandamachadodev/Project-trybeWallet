import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Login from './pages/Login/Login';
import Wallet from './pages/Wallet/Wallet';

function App() {
  return (
    <Switch>
      <Route exact path="/" render={ (props) => <Login { ...props } /> } />
      <Route path="/carteira" render={ (props) => <Wallet { ...props } /> } />
    </Switch>
  );
}

export default App;
