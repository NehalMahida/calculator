const getExpression = (state) => {
  return state.expression;
};
const getHistory = (state) => {
  return state.history;
};
const EvalExpression = (state) => {
  return state.result;
};

export { getExpression, getHistory, EvalExpression };
