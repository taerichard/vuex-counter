export default {
  logIn(context, payload) {
    console.log(context);
    context.commit('logIn', payload);
  },
  logOut(context, payload) {
    context.commit('logOut', payload);
  },
};
