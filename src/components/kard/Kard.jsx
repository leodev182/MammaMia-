import {
  Card,
  CardBody,
  CardFooter,
  Stack,
  Heading,
  Divider,
  ButtonGroup,
  Image,
  Text,
  Button,
  UnorderedList,
  ListItem,
  useToast,
  Spinner,
} from "@chakra-ui/react";
import { CustomButton } from "../index.js";
import { ViewIcon } from "@chakra-ui/icons";
import { PizzaContext } from "../../contexts/PizzaContext.jsx";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";

export const Kard = ({ pizza }) => {
  const toast = useToast();
  const { pizzaData, setPizzaData, setAmount, loading } =
    useContext(PizzaContext);
  const navigate = useNavigate();

  const handleAddToCart = () => {
    const index = pizzaData.findIndex((p) => p.id === pizza.id);

    const updatedCart = [...pizzaData];
    if (typeof updatedCart[index].count != "undefined") {
      updatedCart[index].count++;
    } else {
      updatedCart[index].count = 1;
    }

    setPizzaData(updatedCart);

    // console.log(pizzaData);

    setAmount((prev) => prev + pizza.price);

    toast({
      title: "Agregaste una Pizza.",
      status: "success",
      duration: 1000,
      isClosable: true,
    });
  };

  const handleDetail = () => {
    navigate(`/details/${pizza.id}`);
  };

  return (
    <Card maxW="sm" p="0">
      <CardBody>
        {loading ? (
          <Spinner size="xl" />
        ) : (
          <>
            <Image src={pizza.img} alt="PIZZA" borderRadius="lg" />
            <Stack mt="6" spacing="3">
              <Heading size="md" align="center">
                {pizza.name}
              </Heading>
              <UnorderedList ml="5rem">
                {pizza.ingredients.map((ingredient, index) => (
                  <ListItem key={index}>{ingredient}</ListItem>
                ))}
              </UnorderedList>
              <Text color="blue.600" fontSize="2xl" align="center">
                ${pizza.price.toLocaleString("es-CL")}
              </Text>
            </Stack>
          </>
        )}
      </CardBody>
      <Divider />
      <CardFooter>
        <ButtonGroup spacing="2">
          <div onClick={handleDetail}>
            <CustomButton color="purple" hover="outline" name={<ViewIcon />} />
          </div>
          <Button variant="solid" colorScheme="orange">
            Agregar Extras
          </Button>
          <Button variant="ghost" colorScheme="teal" onClick={handleAddToCart}>
            Agregar al carrito
          </Button>
        </ButtonGroup>
      </CardFooter>
    </Card>
  );
};
