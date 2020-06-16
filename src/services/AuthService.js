function AuthService() {
  const user = {
    id: null,
    email: null,
    name: null,
    isAuthenticated: false,
  };

  return {
    login(email, password) {
      return {
        ...user
      };
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
