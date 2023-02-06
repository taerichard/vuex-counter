import { createStore } from 'vuex';
import counterModule from './counter';
import loggedInModule from './loggedIn';

const store = createStore({
  modules: {
    numbers: counterModule,
    auth: loggedInModule,
    // numbers = namespace of this module
  },
});

export default store;
