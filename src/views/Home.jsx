import React, { useState } from "react";
import {
  Box,
  Button,
  Image,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  Tooltip,
  Wrap,
  WrapItem,
  useDisclosure,
} from "@chakra-ui/react";
import { useContext } from "react";
import { PizzaContext } from "../contexts/PizzaContext";

const Home = () => {
  const { pizzaData } = useContext(PizzaContext);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [selectedPizza, setSelectedPizza] = useState(null);

  const openPizzaModal = (pizza) => {
    setSelectedPizza(pizza);
    onOpen();
  };

  return (
    <div className="gallery" style={{ height: "100%", width: "100%" }}>
      <Box className="bgHero">
        <div className="center titleHero">
          <h1>Bienvenido a MammaMia!</h1>
        </div>
      </Box>
      <Wrap spacing="30px" justify="center">
        {pizzaData.map((element) => (
          <WrapItem key={element.id}>
            <Box boxSize="16rem">
              <Tooltip
                label="Será mejor que me compres!"
                aria-label="A tooltip"
              >
                {element.name}
              </Tooltip>
              <Button
                onClick={() => openPizzaModal(element)}
                style={{ marginTop: "60px" }}
              >
                <Image src={element.img} />
              </Button>
            </Box>
          </WrapItem>
        ))}
      </Wrap>
      <Modal onClose={onClose} isOpen={isOpen} isCentered>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>{selectedPizza?.name}</ModalHeader>
          <ModalCloseButton />
          <ModalBody>{selectedPizza?.desc}</ModalBody>
        </ModalContent>
      </Modal>
    </div>
  );
};

export default Home;
