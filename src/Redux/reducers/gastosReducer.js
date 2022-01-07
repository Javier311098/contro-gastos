import { types } from "../constants";

const gastosGuardados = JSON.parse(localStorage.getItem("gastos")) || [];

export const gastosReducer = (state = gastosGuardados, action) => {
  switch (action.type) {
    case types.agregarGasto:
      return [...state, action.payload];
    case types.quitarGasto:
      return state.filter((gasto) => gasto.id !== action.payload);
    default:
      return state;
  }
};
