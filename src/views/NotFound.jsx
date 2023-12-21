import { Box, Center, Heading } from "@chakra-ui/react";
import React from "react";
import { useNavigate } from "react-router-dom";

const NotFound = () => {
  const navigate = useNavigate();

  const backToPizzeria = () => {
    navigate("/pizzas");
  };
  return (
    <div className="gallery center">
      <div className="ntfoundimg">
        <Center>
          <Heading as="h1" size="4xl" noOfLines={1}>
            Not Found
          </Heading>
        </Center>
        <Box
          as="button"
          borderRadius="md"
          bg="tomato"
          color="white"
          px={4}
          h={8}
          onClick={backToPizzeria}
        >
          Vuelve con nosotros
        </Box>
      </div>
    </div>
  );
};

export default NotFound;
