import { Wrap, WrapItem, Box, Spinner } from "@chakra-ui/react";
import { Kard } from "../components";
import { useContext } from "react";
import { PizzaContext } from "../contexts/PizzaContext";

const Pizzas = () => {
  const { pizzaData, loading } = useContext(PizzaContext);
  return (
    <div className="center">
      {loading ? (
        <Box
          display="flex"
          justifyContent="center"
          alignItems="center"
          height="100vh"
        >
          <Spinner size="xl" />
        </Box>
      ) : (
        <Wrap maxH="98%" spacing="50px" className="gallery">
          {pizzaData.map((element) => (
            <WrapItem key={element.id}>
              <Kard pizza={element} />
            </WrapItem>
          ))}
        </Wrap>
      )}
    </div>
  );
};

export default Pizzas;
