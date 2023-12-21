import { Box, Button } from "@chakra-ui/react";
import { TablaPedidos } from "../components/tablapedidos/TablaPedidos";

const Kart = () => {
  return (
    <div className="center">
      <Box
        w="70%"
        borderWidth="1px"
        m="100"
        borderRadius="lg"
        className="gallery"
      >
        <h4>Detalles del pedido:</h4>
        <TablaPedidos w="100%" />
        <Button colorScheme="whatsapp">Pagar</Button>
      </Box>
    </div>
  );
};

export default Kart;
