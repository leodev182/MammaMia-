import React from "react";
import { Box, Flex, Text } from "@chakra-ui/react";

export const Footer = () => {
  return (
    <Box bg="teal" color="white" p={4} width="100%">
      <Flex justify="space-between" align="center">
        <Text fontSize="sm">
          &copy; 2023 Leonardo Duque. Todos los derechos reservados.
        </Text>
        <Text fontSize="sm">Desarrollado para DesafíoLatam</Text>
      </Flex>
    </Box>
  );
};
