export const state = () => ({
  accessToken: null,
  refreshToken: null
});
export const mutations = {
  setTokenState(state, token) {
    state.accessToken = token;
  },
  setRefreshTokenState(state, refreshToken) {
    state.refreshToken = refreshToken;
  },
  getToken(state) {
    if (localStorage.getItem("token") !== null) {
      const token = JSON.parse(localStorage.getItem("token"));
      state.accessToken = token;
    }
  },
  setTokenLocalStorage(state) {
    localStorage.setItem("token", JSON.stringify(state.accessToken));
  },
  setRefreshTokenLocalStorage(state) {
    localStorage.setItem("refreshToken", JSON.stringify(state.refreshToken));
  }
};
export const actions = {
  registerUser(context, authData) {
    return fetch(
      "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyCruPS7a6p-Ws7WMrLOm0iGjrkFpwWGXDQ",
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },

        body: JSON.stringify({
          email: authData.email,
          password: authData.password,
          returnSecureToken: true
        })
      }
    )
      .then(result => result.json())
      .then(res => {
        return (
          context.commit("setTokenState", res.idToken),
          context.commit("setRefreshTokenState", res.refreshToken)
        );
      });
  },
  loginUser(context, authData) {
    return fetch(
      "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyCruPS7a6p-Ws7WMrLOm0iGjrkFpwWGXDQ",
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email: authData.email,
          password: authData.password,
          returnSecureToken: true
        })
      }
    )
      .then(result => result.json())
      .then(res => {
        return (
          context.commit("setTokenState", res.idToken),
          context.commit("setRefreshTokenState", res.refreshToken)
        );
      });
  },
  setTokenLocalStorage(context) {
    context.commit("setRefreshTokenLocalStorage");
    context.commit("setTokenLocalStorage");
  },
  getToken(context) {
    context.commit("getToken");
  }
};
export const getters = {
  isAuthenticated(state) {
    return state.accessToken != null;
  }
};
