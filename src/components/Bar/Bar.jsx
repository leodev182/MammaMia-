import { Box, Flex, Image, Spacer } from "@chakra-ui/react";
import Logo from "../../assets/imgs/mamamia.png";
import Bag from "../../assets/imgs/shoppingBag.svg";
import React, { useContext } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { CustomButton } from "../custombutton/CustomButton.jsx";
import { PizzaContext } from "../../contexts/PizzaContext.jsx";

export const Bar = () => {
  const { amount } = useContext(PizzaContext);
  const nav = useNavigate();
  const setActiveClass = ({ isActive }) => (isActive ? "active" : "styless");

  const goTo = (route) => {
    nav(route);
  };

  return (
    <Box w="100%" color="white">
      <Flex>
        <Box>
          <Image src={Logo} alt="logo" className="logo" />
        </Box>
        <NavLink className={setActiveClass} to="/">
          Home
        </NavLink>
        <NavLink className={setActiveClass} to="/pizzas">
          Pizzería
        </NavLink>
        <Spacer />
        <Box
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            paddingRight: "50px",
          }}
        >
          <button onClick={() => goTo(amount === 0 ? "/pizzas" : "/kart")}>
            <Image src={Bag} alt="logo" className="logo" />
          </button>
          ${amount.toLocaleString("es-CL")}
        </Box>
        <div
          style={{
            display: "grid",
            placeItems: "center",
            paddingRight: "20px",
          }}
          onClick={() => goTo("/sign")}
        >
          <CustomButton color="teal" hover="outline" name="signIn" />
        </div>
      </Flex>
    </Box>
  );
};
