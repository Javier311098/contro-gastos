import { Box, Button } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import EditIcon from "@mui/icons-material/Edit";
import { useDispatch, useSelector } from "react-redux";
import {
  establecerSaldo,
  establecerSueldo,
  restarSaldo,
} from "../Redux/actions/sueldoActions";
import { agregarGasto } from "../Redux/actions/gastosActions";

export const MenuActiones = ({ nombreGasto, precio, preSueldo, reset }) => {
  const dispatch = useDispatch();
  const { gastos } = useSelector((state) => state);

  let gastoTotal = 0;
  gastos.map((gasto) => (gastoTotal += parseInt(gasto.precio)));
  const agregar = () => {
    if (nombreGasto.trim().length <= 1 || precio <= 0) {
      return;
    }
    const nuevoGasto = {
      id: new Date().getTime(),
      nombre: nombreGasto,
      precio: precio,
    };
    dispatch(agregarGasto(nuevoGasto));
    dispatch(restarSaldo(precio));
  };

  const editarSueldo = () => {
    if (preSueldo.length <= 1) {
      return;
    }
    dispatch(establecerSueldo(parseInt(preSueldo)));
    dispatch(establecerSaldo(gastoTotal));
  };
  const borrarTodo = () => {
    localStorage.clear();
    reset();
  };

  return (
    <Box
      sx={{
        border: "solid 1px",
        borderRadius: "5px",
        color: "#2278CF",
        margin: "20px 0px",
        display: "flex",
        padding: "10px",
        justifyContent: "space-between",
      }}
    >
      <Button
        type="button"
        onClick={() => editarSueldo()}
        variant="outlined"
        startIcon={<EditIcon />}
      >
        Cambiar Sueldo
      </Button>

      <Button
        type="button"
        onClick={agregar}
        color="success"
        variant="outlined"
        startIcon={<AddIcon />}
      >
        Agregar Gasto
      </Button>

      <Button
        type="button"
        onClick={() => borrarTodo()}
        color="error"
        variant="outlined"
        startIcon={<AddIcon />}
      >
        Borrar Memoria
      </Button>
    </Box>
  );
};
