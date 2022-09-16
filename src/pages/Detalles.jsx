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
  Input,
} from "@chakra-ui/react";
import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";

const Detalles = ({ setEdit }) => {
  const [data, setData] = useState([]);
  const [filtroName, setFiltroName] = useState("");
  const [filtroCategory, setFiltroCategory] = useState("");

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
    <Box pt="5rem">
      <Box textAlign="center" mb="2rem">
        <Heading>LISTADO DE PRODUCTOS</Heading>
      </Box>
      <Box ml="2rem">
        <Heading ml="1rem" fontSize="1rem">
          Filtros
        </Heading>
        <Input
          placeholder="Producto"
          maxWidth="200px"
          onChange={(e) => setFiltroName(e.target.value)}
          m="1rem"
        />

        <Input
          placeholder="Categoria"
          maxWidth="200px"
          onChange={(e) => setFiltroCategory(e.target.value)}
        />
      </Box>
      <TableContainer p="2rem">
        <Table variant="simple" className="table">
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
              data
                .filter((producto) =>
                  producto.name.toLowerCase().includes(filtroName.toLowerCase())
                )
                .filter((producto) =>
                  producto.category
                    .toLowerCase()
                    .includes(filtroCategory.toLowerCase())
                )
                .map((el) => (
                  <Tr key={el.id} className="table">
                    <Td encabezados="PRODUCTO">{el.name}</Td>
                    <Td encabezados="DESCRIPCION">{el.description}</Td>
                    <Td encabezados="CATEGORIA">{el.category}</Td>
                    <Td encabezados="STOCK">{el.stock}</Td>
                    <Td encabezados="PRECIO" isNumeric>
                      ${el.price}
                    </Td>

                    <Td>
                      <Link to="/editar-producto">
                        <Button onClick={() => editItem(el)} bg="#F1C40F">
                          Editar
                        </Button>
                      </Link>
                    </Td>

                    <Td>
                      <Button
                        onClick={() => deleteItem(el.id)}
                        bg="red"
                        color="white"
                        _hover={{
                          color: "black",
                        }}
                      >
                        Eliminar
                      </Button>
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
