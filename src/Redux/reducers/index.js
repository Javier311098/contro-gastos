import { combineReducers } from "redux";
import { gastosReducer } from "./gastosReducer";
import { sueldoReducer } from "./sueldoReducer";

const reducers = combineReducers({
  gastos: gastosReducer,
  dinero: sueldoReducer,
});

export default reducers;
