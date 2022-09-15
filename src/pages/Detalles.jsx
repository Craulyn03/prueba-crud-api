import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer,
  Box,
  Button,
  Heading,
} from "@chakra-ui/react";
import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";

const Detalles = ({ setEdit }) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    return () => {
      axios.get("https://localhost:7051/ProductAll").then((res) => {
        setData(res.data);
      });
    };
  }, []);

  const deleteItem = (id) => {
    setData(data.filter((el) => el.id !== id));
    axios.delete(`https://localhost:7051/ProductId?id=${id}`);
  };

  const editItem = (el) => {
    setEdit({
      id: el.id,
      name: el.name,
      description: el.description,
      category: el.category,
      stock: el.stock,
      price: el.price,
    });
  };

  return (
    <Box>
      <Box textAlign="center" mt="3rem">
        <Heading>LISTADO DE PRODUCTOS</Heading>
      </Box>
      <TableContainer p="2rem">
        <Table variant="simple">
          <TableCaption>Productos de Inventario</TableCaption>
          <Thead>
            <Tr>
              <Th>Producto</Th>
              <Th>Descripcion</Th>
              <Th>Categoria</Th>
              <Th>Stock</Th>
              <Th isNumeric>Precio</Th>
            </Tr>
          </Thead>
          <Tbody>
            {data.length === 0 ? (
              <Tr>
                <Td colSpan={5} fontWeight="bold">
                  NO HAY PRODUCTOS REGISTRADOS
                </Td>
              </Tr>
            ) : (
              data.map((el) => (
                <Tr key={el.id}>
                  <Td>{el.name}</Td>
                  <Td>{el.description}</Td>
                  <Td>{el.category}</Td>
                  <Td>{el.stock}</Td>
                  <Td isNumeric>${el.price}</Td>

                  <Td>
                    <Link to="/editar-producto">
                      <Button onClick={() => editItem(el)}>Editar</Button>
                    </Link>
                  </Td>

                  <Td>
                    <Button onClick={() => deleteItem(el.id)}>Elminar</Button>
                  </Td>
                </Tr>
              ))
            )}
          </Tbody>
        </Table>
      </TableContainer>
    </Box>
  );
};

export default Detalles;