import React, { useState } from "react";
import {
  Center,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  Heading,
  Image,
  Stack,
  useDisclosure,
} from "@chakra-ui/react";
import {
  Box,
  Input,
  Button,
  FormControl,
  FormLabel,
  FormErrorMessage,
} from "@chakra-ui/react";
const Luffy =
  "https://citynews-napolitoday.stgy.ovh/~media/horizontal-mid/52894760079886/op_pizza_bassa-2.jpg";

const Sign = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const firstField = React.useRef();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const validateForm = () => {
    let formValid = true;
    const newErrors = { name: "", email: "", password: "" };

    if (!formData.name) {
      formValid = false;
      newErrors.name = "El nombre es requerido";
    }

    if (!formData.email) {
      formValid = false;
      newErrors.email = "El correo electrónico es requerido";
    } else if (!/^\S+@\S+\.\S+$/.test(formData.email)) {
      formValid = false;
      newErrors.email = "Formato de correo electrónico inválido";
    }

    if (!formData.password) {
      formValid = false;
      newErrors.password = "La contraseña es requerida";
    } else if (formData.password.length < 6) {
      formValid = false;
      newErrors.password = "La contraseña debe tener al menos 6 caracteres";
    }

    setErrors(newErrors);
    return formValid;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      console.log("Formulario válido:", formData);
    } else {
      console.log("Formulario inválido");
    }
  };

  return (
    <Box className="gallery">
      <Center>
        <Heading>
          Regístrate o /{" "}
          <Box
            as="button"
            borderRadius="md"
            bg="tomato"
            color="white"
            onClick={onOpen}
          >
            Inicia Sesión
          </Box>
          <Drawer
            isOpen={isOpen}
            placement="right"
            initialFocusRef={firstField}
            onClose={onClose}
          >
            <DrawerOverlay />
            <DrawerContent>
              <DrawerCloseButton />
              <DrawerHeader borderBottomWidth="1px">Inicia Sesión</DrawerHeader>

              <DrawerBody>
                <Stack spacing="24px">
                  <Box>
                    <FormControl mt={4} isRequired isInvalid={!!errors.email}>
                      <FormLabel>Usuario o Email</FormLabel>
                      <Input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                      />
                      <FormErrorMessage>{errors.email}</FormErrorMessage>
                    </FormControl>
                    <FormControl
                      mt={4}
                      isRequired
                      isInvalid={!!errors.password}
                    >
                      <FormLabel>Contraseña</FormLabel>
                      <Input
                        type="password"
                        name="password"
                        value={formData.password}
                        onChange={handleChange}
                      />
                      <FormErrorMessage>{errors.password}</FormErrorMessage>
                    </FormControl>
                    <div style={{ marginTop: "10rem" }}>
                      <Image src={Luffy} />
                    </div>
                  </Box>
                </Stack>
              </DrawerBody>

              <DrawerFooter borderTopWidth="1px">
                <Button variant="outline" mr={3} onClick={onClose}>
                  Cancel
                </Button>
                <Button colorScheme="teal">Enviar</Button>
              </DrawerFooter>
            </DrawerContent>
          </Drawer>
        </Heading>
      </Center>
      <div className="center">
        <Box
          w={500}
          mx="auto"
          mt={8}
          p={4}
          borderWidth="1px"
          borderRadius="md"
          bg="linkedin"
          className="unFocus"
        >
          <FormControl isRequired isInvalid={!!errors.name}>
            <FormLabel>Nombre</FormLabel>
            <Input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
            />
            <FormErrorMessage>{errors.name}</FormErrorMessage>
          </FormControl>

          <FormControl mt={4} isRequired isInvalid={!!errors.email}>
            <FormLabel>Correo Electrónico</FormLabel>
            <Input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
            />
            <FormErrorMessage>{errors.email}</FormErrorMessage>
          </FormControl>

          <FormControl mt={4} isRequired isInvalid={!!errors.password}>
            <FormLabel>Contraseña</FormLabel>
            <Input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
            />
            <FormErrorMessage>{errors.password}</FormErrorMessage>
          </FormControl>

          <Button mt={6} colorScheme="teal" onClick={handleSubmit}>
            Registrarse
          </Button>
        </Box>
      </div>
    </Box>
  );
};

export default Sign;
