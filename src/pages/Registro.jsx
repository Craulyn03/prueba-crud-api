import { useForm } from "react-hook-form";
import {
  Input,
  Button,
  Box,
  SimpleGrid,
  Heading,
  Select,
  Tag,
} from "@chakra-ui/react";
import axios from "axios";
import { useMutation } from "react-query";

const Registro = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const { mutate, isLoading } = useMutation(async (data) => {
    const { data: result } = await axios.post(
      "https://localhost:7051/Product",
      data
    );
    return result;
  });

  const onSubmit = async (data, e) => {
    mutate(data);
    e.target.reset();
  };

  return (
    <Box textAlign="center" p="5rem">
      <Box bg="#EAEDED" p="5rem" borderRadius="2rem">
        <Box mb="5rem">
          <Heading>REGISTRO DE PRODUCTOS</Heading>
        </Box>
        <form onSubmit={handleSubmit(onSubmit)}>
          <SimpleGrid columns={[2, null, 3]} spacing="40px">
            <Box>
              <Input
                placeholder="Nombre del Producto"
                {...register("name", { required: true })}
                bg="#fff"
              />

              {errors.producto?.type === "required" && (
                <Tag mt="0.2rem" bg="red" color="white">
                  Campo Requerido
                </Tag>
              )}
            </Box>

            <Box>
              <Input
                placeholder="Descripcion"
                {...register("description", { required: true })}
                bg="#fff"
              />
              {errors.descripcion?.type === "required" && (
                <Tag mt="0.2rem" bg="red" color="white">
                  Campo Requerido
                </Tag>
              )}
            </Box>

            <Box>
              <Select
                placeholder="Categoria"
                {...register("category", { required: true })}
                bg="#fff"
              >
                <option value="categoria1">Categoria 1</option>
                <option value="categoria2">Categoria 2</option>
                <option value="categoria3">Categoria 3</option>
              </Select>

              {errors.categoria?.type === "required" && (
                <Tag mt="0.2rem" bg="red" color="white">
                  Campo Requerido
                </Tag>
              )}
            </Box>

            <Box>
              <Input
                placeholder="Stock"
                {...register("stock", { required: true })}
                bg="#fff"
                type="number"
              />

              {errors.stock?.type === "required" && (
                <Tag mt="0.2rem" bg="red" color="white">
                  Campo Requerido
                </Tag>
              )}
            </Box>

            <Box>
              <Input
                placeholder="Precio"
                {...register("price", { required: true })}
                bg="#fff"
                type="number"
              />
              {errors.precio?.type === "required" && (
                <Tag mt="0.2rem" bg="red" color="white">
                  Campo Requerido
                </Tag>
              )}
            </Box>
          </SimpleGrid>

          <Button
            colorScheme="messenger"
            type="submit"
            mt="3rem"
            width="200px"
            isLoading={isLoading}
          >
            Enviar
          </Button>
        </form>
      </Box>
    </Box>
  );
};

export default Registro;
