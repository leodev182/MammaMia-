import "./App.css";
import { Route, Routes } from "react-router-dom";
import { Home, Kart, NotFound, PizzaDetails, Pizzas, Sign } from "./views";
import { Bar, Footer } from "./components";
import { Grid, GridItem } from "@chakra-ui/react";
import PizzaProvider from "./contexts/PizzaContext.jsx";

function App() {
  return (
    <PizzaProvider>
      <Grid
        templateAreas={`"header header"
                  "main main"
                  "footer footer"`}
        gridTemplateRows={"1fr 84vh 7vh"}
        gridTemplateColumns={"1fr"}
        h="200px"
        fontWeight="bold"
      >
        <GridItem pl="2" bg="tomato" area={"header"}>
          <Bar />
        </GridItem>
        <GridItem pl="2" area={"main"}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/pizzas" element={<Pizzas />} />
            <Route path="/kart" element={<Kart />} />
            <Route path="/details/:id" element={<PizzaDetails />} />
            <Route path="/sign" element={<Sign />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </GridItem>
        <GridItem area={"footer"}>
          <Footer />
        </GridItem>
      </Grid>
    </PizzaProvider>
  );
}

export default App;
