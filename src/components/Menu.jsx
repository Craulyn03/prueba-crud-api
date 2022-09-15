import { List, ListItem, ListIcon } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { AiFillHome } from "react-icons/ai";

const Menu = () => {
  return (
    <div>
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
            <ListIcon as={AiFillHome} />
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
            <ListIcon as={AiFillHome} />
            Detalles de Productos
          </ListItem>
        </Link>

        <Link to="/facturas">
          <ListItem
            p="1.2rem"
            _hover={{
              background: "white",
              color: "teal.500",
              fontWeight: "600",
            }}
          >
            <ListIcon as={AiFillHome} />
            Facturas
          </ListItem>
        </Link>
      </List>
    </div>
  );
};

export default Menu;
