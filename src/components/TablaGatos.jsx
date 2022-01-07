import React from "react";
import { Button } from "@mui/material";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import RemoveIcon from "@mui/icons-material/Remove";
import { useDispatch, useSelector } from "react-redux";
import { quitarGasto } from "../Redux/actions/gastosActions";
import { sumarSaldo } from "../Redux/actions/sueldoActions";

export const TablaGatos = React.memo(() => {
  const { gastos } = useSelector((state) => state);
  const dispatch = useDispatch();

  const quitar = (id, precio) => {
    dispatch(quitarGasto(id));
    dispatch(sumarSaldo(parseInt(precio)));
  };

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 600 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell align="center">#</TableCell>
            <TableCell align="center">Nombre del Gasto</TableCell>
            <TableCell align="center">Precio</TableCell>
            <TableCell align="center">Acciones</TableCell>
          </TableRow>
        </TableHead>

        <TableBody>
          {gastos.map((gasto, i = 1) => (
            <TableRow
              key={gasto.id}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell align="center" component="th" scope="row">
                {i + 1}
              </TableCell>
              <TableCell align="center" component="th" scope="row">
                {gasto.nombre}
              </TableCell>
              <TableCell align="center" component="th" scope="row">
                {gasto.precio}
              </TableCell>
              <TableCell align="center" component="th" scope="row">
                <Button
                  onClick={() => quitar(gasto.id, gasto.precio)}
                  color="error"
                  variant="outlined"
                  startIcon={<RemoveIcon />}
                >
                  Quitar Gasto
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
});
