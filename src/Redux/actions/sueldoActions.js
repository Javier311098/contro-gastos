import { types } from "../constants";

export const establecerSueldo = (valor) => ({
  type: types.establecerSueldo,
  payload: valor,
});

export const establecerSaldo = (gastoTotal) => ({
  type: types.establecerSaldo,
  payload: gastoTotal,
});

export const restarSaldo = (gasto) => ({
  type: types.restarSaldo,
  payload: gasto,
});

export const sumarSaldo = (precio) => ({
  type: types.sumarSaldo,
  payload: precio,
});
