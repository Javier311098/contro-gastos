import { types } from "../constants";

const sueldoGuardado = JSON.parse(localStorage.getItem("dinero")) || {
  sueldo: 0,
  saldo: 0,
};

export const sueldoReducer = (state = sueldoGuardado, action) => {
  switch (action.type) {
    case types.establecerSueldo:
      return { ...state, sueldo: action.payload };
    case types.establecerSaldo:
      return { ...state, saldo: state.sueldo - action.payload };

    case types.restarSaldo:
      if (!state.saldo) {
        return { ...state, saldo: state.sueldo - action.payload };
      }
      return { ...state, saldo: state.saldo - action.payload };
    case types.sumarSaldo:
      return { ...state, saldo: state.saldo + action.payload };
    default:
      return state;
  }
};
