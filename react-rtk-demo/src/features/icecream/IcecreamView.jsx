import React from "react";
import { useSelector } from "react-redux";

export const IcecreamView = () => {
  const numOfIcecreams = useSelector((state) => state.icecream.numOfIcecreams);
  return (
    <div>
      <h2>Number of Ice Creams - {numOfIcecreams}</h2>
      <button>Order Ice Cream</button>
      <button>Restock Ice Creams</button>
    </div>
  );
};
