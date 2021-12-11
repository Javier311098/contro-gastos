import React, { useEffect, useReducer, useState } from "react";
import { FormControl, Input, Button } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import EditIcon from "@mui/icons-material/Edit";
import { TablaGatos } from "./TablaGatos";
import { gastosReducer } from "./gastosReducer";
import { useForm } from "../hooks/useForm";

// const init = () => {
//   // return JSON.parse(localStorage.getItem("gastos") || []);
// return [
//   {
//     id: new Date().getTime(),
//     sueldo: 0,
//     nombreGasto: "",
//     precio: 0,
//   },
// ];

// };

const Formulario = () => {
  const [payment, handleInputChange, reset] = useForm(0);
  // const [payment, setPayment] = useState(0);
  const [gastos, dispatch] = useReducer(gastosReducer, []);

  // const handlePayment = ({ target }) => {
  //   if (target.value.length <= 6) setPayment(target.value);
  // };

  // useEffect(() => {
  //   localStorage.setItem("gastos", JSON.stringify(gastos));
  // }, [gastos]);

  const handleAdd = (nuevoGasto) => {
    const agregarGasto = {
      type: "add",
      payload: nuevoGasto,
    };
    dispatch(agregarGasto);
    console.log(agregarGasto);
  };

  return (
    <>
      <h1>$ {payment}</h1>
      <Button variant="outlined" startIcon={<EditIcon />}>
        Editar Ingreso
      </Button>
      <form>
        <Input
          onChange={handleInputChange}
          type="number"
          placeholder="Ingreso mensual"
          required={true}
          value={payment}
        />

        <Input type="text" placeholder="Nombre del gasto" required={true} />

        <Input
          type="number"
          placeholder="Precio"
          variant="standard"
          required={true}
        />
        <Button
          type="button"
          onClick={() => handleAdd()}
          color="success"
          variant="outlined"
          startIcon={<AddIcon />}
        >
          Agregar Gasto
        </Button>
        <Button color="error" variant="outlined" startIcon={<RemoveIcon />}>
          Quitar Gasto
        </Button>
      </form>

      <TablaGatos />
    </>
  );
};

export default Formulario;
