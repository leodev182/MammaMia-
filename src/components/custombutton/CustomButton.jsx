import { Button } from "@chakra-ui/react";
import React from "react";

export const CustomButton = ({ color, hover, name }) => {
  return (
    <Button colorScheme={color} variant={hover}>
      {name}
    </Button>
  );
};
