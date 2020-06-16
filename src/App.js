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

  React.useEffect(() => {
    fetch('/data/users.json')
      .then(response => {
        return response.json();
      })
      .then(([body]) => (
        setUser(() => {
          // authService.login();
          return {
            ...body,
            loggedIn: true,
          };
        })
      ))
      .catch(error => {
        console.log(error);
      });

    return () => {};
  }, []);

  return (
    <div className="App">
      <Router>
        <Navbar user={user} />

        <Switch>
          <Route path="/register">
            <Register />
          </Route>
          <Route path="/login">
            <Login user={user} />
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
