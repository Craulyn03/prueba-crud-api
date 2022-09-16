import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import { Input, Button, Box, Heading, Select, Tag } from "@chakra-ui/react";
import axios from "axios";
import { useMutation } from "react-query";
import { useNavigate } from "react-router-dom";

const Registro = () => {
  const navigate = useNavigate();
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
    Swal.fire("Buen Trabajo!", "PRODUCTO AGREGADO CORRECTAMENTE!", "success");
    e.target.reset();
    navigate("/");
  };

  return (
    <Box className="main-section">
      <Box bg="#EAEDED" borderRadius="1rem" className="contenedor">
        <Box className="title-container">
          <Heading fontSize="2rem" textAlign="center" m="2rem">
            REGISTRO DE PRODUCTOS
          </Heading>
        </Box>
        <form onSubmit={handleSubmit(onSubmit)} className="form">
          <Box className="inputs-container">
            <Input
              placeholder="Nombre del Producto"
              {...register("name", { required: true })}
              bg="#fff"
            />

            {errors.name?.type === "required" && (
              <Tag mt="0.2rem" bg="red" color="white">
                Campo Requerido
              </Tag>
            )}

            <Input
              placeholder="Descripcion"
              {...register("description", { required: true })}
              bg="#fff"
            />
            {errors.description?.type === "required" && (
              <Tag mt="0.2rem" bg="red" color="white">
                Campo Requerido
              </Tag>
            )}

            <Select
              placeholder="Categoria"
              {...register("category", { required: true })}
              bg="#fff"
            >
              <option value="categoria1">Categoria 1</option>
              <option value="categoria2">Categoria 2</option>
              <option value="categoria3">Categoria 3</option>
            </Select>

            {errors.category?.type === "required" && (
              <Tag mt="0.2rem" bg="red" color="white">
                Campo Requerido
              </Tag>
            )}

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

            <Input
              placeholder="Precio"
              {...register("price", { required: true })}
              bg="#fff"
              type="number"
            />
            {errors.price?.type === "required" && (
              <Tag mt="0.2rem" bg="red" color="white">
                Campo Requerido
              </Tag>
            )}
          </Box>

          <Button
            colorScheme="messenger"
            type="submit"
            width="200px"
            isLoading={isLoading}
            className="btn-enviar"
          >
            REGISTRAR
          </Button>
        </form>
      </Box>
    </Box>
  );
};

export default Registro;
