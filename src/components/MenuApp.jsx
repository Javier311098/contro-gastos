import React, { useEffect } from "react";
import { Box, Input } from "@mui/material";
import { useForm } from "../hooks/useForm";
import { useSelector } from "react-redux";
import { TablaGatos } from "./TablaGatos";
import { MenuActiones } from "./MenuActiones";

export const MenuApp = () => {
  const {
    dinero: { sueldo, saldo },
    gastos,
  } = useSelector((state) => state);
  const [{ precio, nombreGasto, preSueldo }, handleInputChange, reset] =
    useForm({
      precio: 0,
      nombreGasto: "",
      preSueldo: sueldo,
    });

  useEffect(() => {
    localStorage.setItem("gastos", JSON.stringify(gastos));
  }, [gastos]);

  useEffect(() => {
    localStorage.setItem("dinero", JSON.stringify({ sueldo, saldo }));
  }, [sueldo, saldo]);

  return (
    <>
      <Box
        sx={{
          width: "100%",
          display: "flex",
          justifyContent: "space-evenly",
          textAlign: "center",
        }}
      >
        <h1>Control de Gastos</h1>
      </Box>
      <Box
        sx={{
          width: "100%",
          display: "flex",
          border: "solid 1px",
          borderRadius: "5px",
          color: "#2278CF",
          justifyContent: "space-evenly",
          textAlign: "center",
        }}
      >
        <h3>Sueldo mensual: {!sueldo ? 0 : sueldo} </h3>
        <h3>Dinero Disponible: {!saldo ? 0 : saldo} </h3>
      </Box>

      <Box
        sx={{
          width: "100%",
          display: "flex",
          justifyContent: "space-evenly",
          margin: "15px",
        }}
      >
        <Input
          onChange={handleInputChange}
          value={preSueldo}
          type="number"
          placeholder="Sueldo"
          required={true}
          name="preSueldo"
        />

        <Input
          type="text"
          placeholder="Gasto"
          required={true}
          values={nombreGasto}
          onChange={handleInputChange}
          name="nombreGasto"
        />

        <Input
          type="number"
          placeholder="Precio"
          variant="standard"
          required={true}
          values={precio}
          onChange={handleInputChange}
          name="precio"
        />
      </Box>
      <MenuActiones
        nombreGasto={nombreGasto}
        precio={precio}
        preSueldo={preSueldo}
        reset={reset}
      />
      <TablaGatos />
    </>
  );
};
