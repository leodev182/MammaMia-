import React, { createContext, useState, useEffect } from "react";
import axios from "axios";

export const PizzaContext = createContext();

const PizzaProvider = ({ children }) => {
  const url = "./pizzas.json";
  const [amount, setAmount] = useState(0);
  const [pizzaData, setPizzaData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPizzaData = async () => {
      try {
        const response = await axios.get(url);
        setPizzaData([...response.data]);
        setLoading(false);
      } catch (error) {
        console.error("Error de consulta a  pizza data:", error);
        setLoading(false);
      }
    };

    fetchPizzaData();
    console.table(pizzaData);
  }, []);

  return (
    <PizzaContext.Provider
      value={{ amount, setAmount, pizzaData, setPizzaData, loading }}
    >
      {children}
    </PizzaContext.Provider>
  );
};

export default PizzaProvider;
