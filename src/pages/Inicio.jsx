import {
  Heading,
  Box,
  Image,
  Center,
  Text,
  Button,
  Fade,
  useDisclosure,
} from "@chakra-ui/react";

function FadeEx() {
  const { isOpen, onToggle } = useDisclosure();

  return (
    <>
      <Button onClick={onToggle}>MAS...</Button>
      <Fade in={isOpen}>
        <Box
          p="40px"
          color="white"
          mt="4"
          bg="teal.500"
          rounded="md"
          shadow="md"
        >
          <Text textAlign="justify" fontSize="xl">
            Organize y mantenga un buen control con todos los productos que
            administra.
          </Text>
        </Box>
      </Fade>
    </>
  );
}

const Inicio = () => {
  return (
    <Box textAlign="center" pt="1rem">
      <Heading>SISTEMA DE INVETARIO</Heading>
      <Center pt="1rem">
        <Image
          borderRadius="full"
          boxSize="150px"
          src="https://bit.ly/dan-abramov"
          alt="Dan Abramov"
        />
      </Center>
      <Box maxWidth="600px" margin="auto" mt="1rem">
        <Center bg="#F2F4F4" p="2rem" borderRadius="2rem">
          <Text textAlign="justify" fontSize="xl">
            Los inventarios están presentes en toda la cadena de suministro
            desde la fuente del flujo de material hasta el consumo, la
            eliminación o la destrucción de sus componentes. Los inventarios se
            clasifican por ubicación, por función, por tiempo, por volumen y
            demanda.
          </Text>
        </Center>
        <Box mt="2rem">{FadeEx()}</Box>
      </Box>
    </Box>
  );
};

export default Inicio;
