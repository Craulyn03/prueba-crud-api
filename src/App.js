import { Flex, Square, Box } from "@chakra-ui/react";
import Menu from "./components/Menu";
import { Routes, Route } from "react-router-dom";
import Inicio from "./pages/Inicio";
import Registro from "./pages/Registro";
import Detalles from "./pages/Detalles";
import { useState } from "react";
import Editar from "./pages/Editar";
function App() {
  const [edit, setEdit] = useState({
    id: null,
    name: "",
    description: "",
    category: "",
    stock: 0,
    price: 0,
  });

  return (
    <Flex>
      <Square h="100vh" bg="#34495E" size="200px" color="white">
        <Menu />
      </Square>

      <Box flex="1">
        <Routes>
          <Route path="/" element={<Inicio />} />
          <Route path="/registrar-producto" element={<Registro />} />
          <Route path="/editar-producto" element={<Editar edit={edit} />} />
          <Route
            path="/detalles-producto"
            element={<Detalles setEdit={setEdit} />}
          />
        </Routes>
      </Box>
    </Flex>
  );
}

export default App;
