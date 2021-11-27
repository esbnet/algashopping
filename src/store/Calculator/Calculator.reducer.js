export default function calculatorReducer(state = 0, action) {
  switch (action.type) {
    case "SUM":
      return {
        action: action.payload[0] + action.payload[1],
      };
    case "SUBTRACT":
      return {
        action: action.payload[0] - action.payload[1],
      };
    default:
      return state;
  }
}
