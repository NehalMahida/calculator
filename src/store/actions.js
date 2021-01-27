const appendExpression = ({ commit }, payload) => {
  commit("appendExpression", payload);
};

const getResult = ({ commit }) => {
  commit("getResult");
};

export { appendExpression, getResult };
