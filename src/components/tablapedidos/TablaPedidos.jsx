import {
  Table,
  TableContainer,
  Tbody,
  Td,
  Tfoot,
  Th,
  Thead,
  Tr,
  Box,
  Image,
  Switch,
} from "@chakra-ui/react";
import { useContext } from "react";
import { PizzaContext } from "../../contexts/PizzaContext.jsx";

export const TablaPedidos = () => {
  const { pizzaData, amount, setPizzaData, setAmount } =
    useContext(PizzaContext);

  const switchState = (isChecked, pizzaId, price) => {
    const updatedCart = [...pizzaData];
    const index = updatedCart.findIndex((p) => p.id === pizzaId);

    if (isChecked && index !== -1) {
      updatedCart[index].price = Math.round(updatedCart[index].price * 1.3);
      setAmount(updatedCart[index].price);
    } else if (!isChecked && index !== -1) {
      updatedCart[index].price = Math.round(updatedCart[index].price / 1.3);
      setAmount(updatedCart[index].price);
    }
    setPizzaData(updatedCart);
  };

  const handleOperator = (pizzaId, increment) => {
    const updatedCart = [...pizzaData];
    const Index = updatedCart.findIndex((p) => p.id === pizzaId);

    if (Index !== -1) {
      updatedCart[Index].count = Math.max(
        0,
        updatedCart[Index].count + increment
      );

      setPizzaData(updatedCart);

      const priceIncrement =
        increment > 0 ? updatedCart[Index].price : -updatedCart[Index].price;
      setAmount((prevAmount) => Math.max(0, prevAmount + priceIncrement));
    }
  };
  console.log(pizzaData);

  return (
    <Box w="70%">
      <TableContainer>
        <Table size="sm">
          <Thead>
            <Tr>
              <Th>Pizza</Th>
              <Th></Th>
              <Th>Familiar</Th>
              <Th>Precio</Th>
              <Th></Th>
              <Th>Cantidad</Th>
            </Tr>
          </Thead>
          <Tbody>
            {pizzaData
              .filter(
                (element) =>
                  typeof element.count != "undefined" && element.count > 0
              )
              .map((element) => {
                return (
                  <Tr key={element.id}>
                    <Td>
                      <Image src={element.img} alt="PIZZA" w="14" />
                      {element.name}
                    </Td>
                    <Td></Td>
                    <Td>
                      <Switch
                        colorScheme="teal"
                        onChange={(e) =>
                          switchState(
                            e.target.checked,
                            element.id,
                            element.price
                          )
                        }
                      />
                    </Td>
                    <Td>${element.price.toLocaleString("es-CL")}</Td>
                    <Td></Td>
                    <Td display="flex">
                      <Box
                        as="button"
                        borderRadius="md"
                        bg="teal"
                        color="white"
                        px={4}
                        h={8}
                        onClick={() => handleOperator(element.id, -1)}
                      >
                        -
                      </Box>
                      <Box p={2}>{element.count}</Box>
                      <Box
                        as="button"
                        borderRadius="md"
                        bg="tomato"
                        color="white"
                        px={4}
                        h={8}
                        onClick={() => handleOperator(element.id, 1)}
                      >
                        +
                      </Box>
                    </Td>
                  </Tr>
                );
              })}
          </Tbody>
          <Tfoot>
            <Tr>
              <Th></Th>
              <Th></Th>
              <Th></Th>
              <Th></Th>
              <Th></Th>
            </Tr>
          </Tfoot>
        </Table>
      </TableContainer>
      <h1>Total: ${amount.toLocaleString("es-CL")}</h1>
    </Box>
  );
};
