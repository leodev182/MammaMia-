import { useContext } from "react";
import { PizzaContext } from "../../contexts/PizzaContext";

export const Banner = () => {
  const { pizzaData } = useContext(PizzaContext);
  return (
    <div className="slider">
      <div className="slide_track">
        <img src="" alt="" />
      </div>
    </div>
  );
};

// {pizzaData.map((p) => (
//           <div className="slide" key={p.id}>
//             <img src={p.img} alt={p.name} />
//           </div>
//         ))}
