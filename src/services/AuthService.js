import jwtDecode from 'jwt-decode';

function AuthService() {
  const user = {
    id: null,
    email: null,
    name: null,
    isAuthenticated: false,
    token: null,
  };

  return {
    login(email, password) {
      return fetch('http://localhost:1337/login', {
        method: 'POST',
        body: JSON.stringify({
          email,
          password
        }),
        headers: {
          'Content-Type': 'application/json'
        }
      })
        .then(response => {
          return response.json();
        })
        .then(({token}) => {
          user.token = token;

          return jwtDecode(token);
        })
        .catch(console.log);
    },

    logout() {
      user.isAuthenticated = false;
    },

    isAuthenticated() {
      return user.isAuthenticated;
    }
  };
}

export const authService = AuthService();
