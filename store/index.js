import Vuex from "vuex";

const createStore = () => {
  return new Vuex.Store({
    state: {
      isLoggedIn: false
    }
  });
};

export default createStore;
