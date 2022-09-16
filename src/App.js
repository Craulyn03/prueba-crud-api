import { Flex, Square, Box } from "@chakra-ui/react";
import Menu from "./components/Menu";
import { Routes, Route } from "react-router-dom";
import Inicio from "./pages/Inicio";
import Registro from "./pages/Registro";
import Detalles from "./pages/Detalles";
import { useState } from "react";
import Editar from "./pages/Editar";
import { AiOutlineMenu } from "react-icons/ai";
import "../src/style/estilos.css";

function App() {
  const [edit, setEdit] = useState({
    id: null,
    name: "",
    description: "",
    category: "",
    stock: 0,
    price: 0,
  });

  const [isActive, setIsActive] = useState(true);

  const handleClick = (event) => {
    // 👇️ toggle isActive state on click
    setIsActive((current) => !current);
  };

  return (
    <Flex>
      <Box
        className="icon icon-inactive"
        onClick={handleClick}
        bg="black"
        m="2rem"
      >
        <AiOutlineMenu w={6} h={6} fontSize="1.8rem" color="white" />
      </Box>

      <Box
        h="100vh"
        bg="#34495E"
        size="200px"
        color="white"
        className={isActive ? "sidebar-active" : "sidebar"}
        pt="15rem"
      >
        <Menu />
      </Box>

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
