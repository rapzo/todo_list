import * as React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import { Navbar } from './components/navbar/Navbar';
import { Register } from './components/auth/Register';
import { Login } from './components/auth/Login';
import { Dashboard } from './components/dashboard/Dashboard';

function App() {
  const [user, setUser] = React.useState({
    id: null,
    email: null,
    name: null,
    loggedIn: false,
  });

  const handleLogin = data => {
    setUser({
      ...user,
      id: Number(data.id),
      email: data.email,
      loggedIn: true,
    });
  };

  return (
    <div className="App">
      <Router>
        <Navbar user={user} />

        <Switch>
          <Route path="/register">
            <Register />
          </Route>
          <Route path="/login">
            <Login user={user} onLogin={handleLogin} />
          </Route>
          <Route path="/">
            <Dashboard user={user} />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
