import rootActions from './actions';
import rootMutations from './mutations';
import rootGetters from './getters';

const counterModule = {
  namespaced: true,
  state() {
    return {
      counter: 0,
      logMessages: [],
      isLoggedIn: false,
    };
  },
  mutations: rootMutations,
  actions: rootActions,
  getters: rootGetters,
};

export default counterModule;
