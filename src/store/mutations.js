const appendExpression = (state, payload) => {
  if (payload === "C") {
    state.previousEx &&
      state.result &&
      state.history.push(`${state.previousEx} = ${state.result}`);
    state.result = "";
    state.previousEx = "";
    state.expression = "";
  } else if (payload === "BACK") {
    state.expression = state.expression.slice(0, state.expression.length - 1);
  } else {
    state.expression += payload;
  }
  try {
    state.result = state.expression && eval(state.expression).toString();
  } catch (e) {
    console.log(e.message);
    state.result = "Invaid expression";
  }
};
const getResult = (state) => {
  state.previousEx = state.expression;
  state.expression = state.expression && eval(state.expression).toString();
  state.result = state.expression;
};

export { appendExpression, getResult };
