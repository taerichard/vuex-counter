import rootActions from './actions';
import rootMutations from './mutations';
import rootGetters from './getters';

const loggedInModule = {
  namespaced: true,
  state() {
    return {
      isLoggedIn: false,
    };
  },
  mutations: rootMutations,
  actions: rootActions,
  getters: rootGetters,
};

export default loggedInModule;
