import Vuex from "vuex";

const createStore = () => {
  return new Vuex.Store({
    state: {
      token: null,
      refreshToken: null
    },
    mutations: {
      setToken(state, token) {
        state.token = token;
        localStorage.setItem("token", JSON.stringify(token));
      },
      setRefreshToken(state, refreshToken) {
        state.refreshToken = refreshToken;
        localStorage.setItem("refreshToken", JSON.stringify(refreshToken));
      }
    },
    actions: {
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
              context.commit("setToken", res.idToken),
              context.commit("setRefreshToken", res.refreshToken)
            );
          });
      }
    }
  });
};
export default createStore;
