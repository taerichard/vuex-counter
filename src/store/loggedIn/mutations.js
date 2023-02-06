export default {
  logIn(state, payload) {
    state.isLoggedIn = payload;
    console.log(state.isLoggedIn);
  },
  logOut(state, payload) {
    state.isLoggedIn = payload;
  },
};
