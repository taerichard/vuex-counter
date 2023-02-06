export default {
  logMessages(state) {
    return state.logMessages;
  },
  finalCounter(currentState) {
    return currentState.counter;
  },
  normalizedCounter(state, getters) {
    const finalCounter = getters.finalCounter;

    if (finalCounter < 0) {
      return 0;
    }
    if (finalCounter > 100) {
      return 100;
    }
    return finalCounter;
  },
  isAuthenticated(state) {
    return state.isLoggedIn;
  },
};
