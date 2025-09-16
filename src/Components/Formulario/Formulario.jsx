import {
  Box,
  Flex,
  Heading,
  Text,
  VStack,
  FormControl,
  FormLabel,
  Input,
  Textarea,
  Button,
} from "@chakra-ui/react";
import './Formulario.css'
function Contacto() {
  return (
    <Box py={10} px={6}>
      <Flex
        direction={{ base: "column", md: "row" }}
        align="center"
        justify="center"
        gap={10}
        maxW="1000px"
        mx="auto"
      >
       
        <Box flex="1" textAlign={{ base: "center", md: "left" }}>
          <Heading fontSize="3xl" mb={4}>
            Contactanos
          </Heading>
          <Text fontSize="lg" >
            Nos encantaría saber de vos. Completá el formulario y te
            responderemos lo antes posible. Cada consulta es importante para
            nosotros ❤️
          </Text>
        </Box>

       
        <Box flex="1" w="100%">
          <VStack
            as="form"
            spacing={4}
            p={6}
            borderRadius="xl"
            boxShadow="lg"
            bg="white"
          >
            <FormControl isRequired>
              <FormLabel>Nombre</FormLabel>
              <Input placeholder="Tu nombre" />
            </FormControl>

            <FormControl isRequired>
              <FormLabel>Email</FormLabel>
              <Input type="email" placeholder="tu@email.com" />
            </FormControl>

            <FormControl isRequired>
              <FormLabel>Mensaje</FormLabel>
              <Textarea placeholder="Escribí tu mensaje aquí..." />
            </FormControl>

            <Button className="btnEnviar" w="full">
              Enviar
            </Button>
          </VStack>
        </Box>
      </Flex>
        <Box mt={10} w="100%">
        <iframe
          title="Ubicación"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3282.998637668478!2d-58.381559!3d-34.603684!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bccb5d8d1d9e2f%3A0x0!2zMzTCsDM2JzEzLjMiUyA1OMKwMjMnMDMuNiJX!5e0!3m2!1ses!2sar!4v1694461200000!5m2!1ses!2sar"
          width="100%"
          height="400"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
        ></iframe>
      </Box>
    </Box>
  );
}

export default Contacto;
