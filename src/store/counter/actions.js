export default {
  multiplyByThree(context, payload) {
    console.log('multiply action');
    context.commit('multiplyByThree', payload);
  },
  deleteOne(context) {
    console.log(context);
    context.commit('deleteOne');
  },
  increment(context, payload) {
    console.log('increment action');
    console.log(context);
    console.log(payload.value);
    context.commit('increase', payload);
  },
  increase(context, payload) {
    console.log(' increase action');
    console.log(context);
    console.log(payload);

    // commit a mutation after action is called
    setTimeout(() => {
      context.commit('increase', payload);
    }, 2000);
  },
  logIn(context, payload) {
    console.log(context);
    context.commit('logIn', payload);
  },
  logOut(context, payload) {
    context.commit('logOut', payload);
  },
};
