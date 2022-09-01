import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { ordered, restocked } from "./icecreamSlice";

export const IcecreamView = () => {
  const numOfIcecreams = useSelector((state) => state.icecream.numOfIcecreams);
  const dispatch = useDispatch();
  return (
    <div>
      <h2>Number of Ice Creams - {numOfIcecreams}</h2>
      <button onClick={() => dispatch(ordered())}>Order Ice Cream</button>
      <button onClick={() => dispatch(restocked(3))}>Restock Ice Creams</button>
    </div>
  );
};
