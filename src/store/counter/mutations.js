export default {
  multiplyByThree(state) {
    state.counter = state.counter * 3;
  },
  increment(state, payload) {
    console.log('increment mutation');
    // change the state
    state.counter = state.counter + payload.value;
  },
  increase(state, payload) {
    console.log('increase mutation');
    console.log(payload);
    state.counter = state.counter + payload.value;
    const increaseLogMessage = `${payload.value} has been increased`;
    state.logMessages.push(increaseLogMessage);
  },
  deleteOne(state) {
    state.counter = state.counter - 1;
  },
  logIn(state, payload) {
    state.isLoggedIn = payload;
    console.log(state.isLoggedIn);
  },
  logOut(state, payload) {
    state.isLoggedIn = payload;
  },
};
