import React, { useContext } from "react";
import { UserContext } from "../../context/UserContext";

const Head = () => {
  const { user } = useContext(UserContext);

  return (
    <header>
      <h1>Email del usuario: {user.email || "No registrado"}</h1>
    </header>
  );
};

export default Head;

