import React, { useContext } from "react";
import { UserContext } from "../../../context/UserContext";

const Card = () => {
  const { user } = useContext(UserContext);

  return (
    <div style={{ border: "1px solid black", padding: "1rem", borderRadius: "8px" }}>
      <h2>Datos del Usuario</h2>
      <p><strong>Nombre:</strong> {user.name || "No disponible"}</p>
      <p><strong>Email:</strong> {user.email || "No disponible"}</p>
      <p><strong>Edad:</strong> {user.age || "No disponible"}</p>
      {user.photo && <img src={user.photo} alt="Foto del usuario" style={{ maxWidth: "100px" }} />}
    </div>
  );
};

export default Card;
