import { create, combineReducers } from "redux";
import calculatorReducer from "./calculator/Calculator.reducer";

const rootReducer = combineReducers({
  calculator: calculatorReducer,
});

const store = create(rootReducer);

export default store;