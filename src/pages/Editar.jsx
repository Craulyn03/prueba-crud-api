import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import { Input, Button, Box, Heading, Select, Tag } from "@chakra-ui/react";
import axios from "axios";
import { useMutation } from "react-query";
import { useNavigate } from "react-router-dom";

const Editar = ({ edit }) => {
  const navigate = useNavigate();
  //   console.log(edit);
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm({
    defaultValues: {
      name: edit.name,
      description: edit.description,
      category: edit.category,
      stock: edit.stock,
      price: edit.price,
    },
  });

  const { mutate, isLoading } = useMutation(async (data) => {
    const res = await axios.put(
      `https://localhost:7051/Product?id=${edit.id}`,
      {
        name: data.name,
        description: data.description,
        category: data.category,
        stock: data.stock,
        price: data.price,
      }
    );
    return res;
  });

  const onSubmit = async (data, e) => {
    mutate(data);
    Swal.fire("Buen Trabajo!", "PRODUCTO EDITADO CORRECTAMENTE!", "success");
    e.target.reset();
    navigate("/");
  };

  return (
    <Box className="main-section">
      <Box bg="#EAEDED" borderRadius="1rem" className="contenedor">
        <Box className="title-container">
          <Heading fontSize="2rem" m="2rem">
            EDITAR PRODUCTO
          </Heading>
        </Box>
        <form onSubmit={handleSubmit(onSubmit)} className="form">
          <Box className="inputs-container">
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
            {errors.precio?.type === "required" && (
              <Tag mt="0.2rem" bg="red" color="white">
                Campo Requerido
              </Tag>
            )}
          </Box>

          <Button
            colorScheme="yellow"
            type="submit"
            width="200px"
            isLoading={isLoading}
            className="btn-enviar"
          >
            EDITAR
          </Button>
        </form>
      </Box>
    </Box>
  );
};

export default Editar;
