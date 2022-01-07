import { types } from "../constants";

export const agregarGasto = (nuevoGasto) => ({
  type: types.agregarGasto,
  payload: nuevoGasto,
});

export const quitarGasto = (id) => ({
  type: types.quitarGasto,
  payload: id,
});
