import React, { useContext } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { PizzaContext } from "../contexts/PizzaContext";
import { CheckCircleIcon } from "@chakra-ui/icons";
import {
  Card,
  CardBody,
  CardFooter,
  Stack,
  Heading,
  Button,
  Image,
  Text,
  List,
  ListItem,
  ListIcon,
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  useDisclosure,
  Input,
} from "@chakra-ui/react";
import { TablaPedidos } from "../components/tablapedidos/TablaPedidos";

const PizzaDetails = () => {
  const { pizzaData, setPizzaData, setAmount } = useContext(PizzaContext);
  const { id } = useParams();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef();

  const navigate = useNavigate();

  const index = pizzaData.findIndex((p) => p.id === id);

  const pizza = pizzaData[index];

  // console.log(pizza);

  const addToCart = () => {
    const index = pizzaData.findIndex((p) => p.id === pizza.id);

    const updatedCart = [...pizzaData];
    if (typeof updatedCart[index].count != "undefined") {
      updatedCart[index].count++;
    } else {
      updatedCart[index].count = 1;
    }

    setPizzaData(updatedCart);

    setAmount((prev) => prev + pizza.price);
  };

  const handleMiniCart = () => {
    navigate("/kart");
  };

  return (
    <div className="center gallery">
      <Card
        direction={{ base: "column", sm: "row" }}
        overflow="hidden"
        variant="outline"
      >
        <Image
          objectFit="cover"
          maxW={{ base: "90%", sm: "500px" }}
          src={pizza.img}
          alt="Caffe Latte"
        />

        <Stack>
          <CardBody>
            <Heading size="md">{pizza.name}</Heading>

            <Text py="2">{pizza.desc}</Text>
          </CardBody>
          <List spacing={3}>
            {pizza.ingredients.map((ingredient, index) => (
              <ListItem key={index}>
                <ListIcon
                  as={CheckCircleIcon}
                  color="green.500"
                  style={{ marginLeft: "25px" }}
                />
                {ingredient}
              </ListItem>
            ))}
          </List>
          <CardFooter>
            <Button
              ref={btnRef}
              colorScheme="teal"
              onClick={() => {
                addToCart();
                onOpen();
              }}
            >
              Comprar
            </Button>
            <Drawer
              isOpen={isOpen}
              placement="right"
              onClose={onClose}
              finalFocusRef={btnRef}
              size="xl"
            >
              <DrawerOverlay />
              <DrawerContent>
                <DrawerCloseButton />
                <DrawerHeader>Lista tu pedido:</DrawerHeader>

                <DrawerBody>
                  <TablaPedidos />
                </DrawerBody>

                <DrawerFooter>
                  <Button variant="outline" mr={3} onClick={onClose}>
                    Cerrar
                  </Button>
                  <Button colorScheme="blue" onClick={handleMiniCart}>
                    Ir a Carrito
                  </Button>
                </DrawerFooter>
              </DrawerContent>
            </Drawer>
          </CardFooter>
        </Stack>
      </Card>
    </div>
  );
};

export default PizzaDetails;
