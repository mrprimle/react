import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const Purchase = () => {
  const [prodName, setProdName] = useState("default name");
  const { name } = useParams();

  useEffect(() => {
    setProdName(name);
  }, [name]);
  return <h3>Congrats! You now own a virtual {prodName}</h3>;
};

export default Purchase;
