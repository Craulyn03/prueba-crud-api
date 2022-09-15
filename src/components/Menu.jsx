import { List, ListItem, ListIcon, Box } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { AiFillHome, AiFillHdd, AiOutlineContainer } from "react-icons/ai";

const Menu = () => {
  return (
    <Box>
      <List spacing={3} textAlign="center">
        <Link to="/">
          <ListItem
            p="1.2rem"
            _hover={{
              background: "white",
              color: "teal.500",
              fontWeight: "600",
            }}
          >
            <ListIcon as={AiFillHome} />
            Inicio
          </ListItem>
        </Link>
        <Link to="/registrar-producto">
          <ListItem
            p="1.2rem"
            _hover={{
              background: "white",
              color: "teal.500",
              fontWeight: "600",
            }}
          >
            <ListIcon as={AiFillHdd} />
            Registrar Producto
          </ListItem>
        </Link>
        <Link to="/detalles-producto">
          <ListItem
            p="1.2rem"
            _hover={{
              background: "white",
              color: "teal.500",
              fontWeight: "600",
            }}
          >
            <ListIcon as={AiOutlineContainer} />
            Detalles de Productos
          </ListItem>
        </Link>
      </List>
    </Box>
  );
};

export default Menu;
