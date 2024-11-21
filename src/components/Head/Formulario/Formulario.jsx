import React, { useContext, useState } from "react";
import { UserContext } from "../../../context/UserContext";

const Formulario = () => {
  const { setUser } = useContext(UserContext);
  const [form, setForm] = useState({ name: "", email: "", photo: "", age: "" });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setUser(form); 
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" name="name" placeholder="Nombre" value={form.name} onChange={handleChange} />
      <input type="email" name="email" placeholder="Email" value={form.email} onChange={handleChange} />
      <input type="url" name="photo" placeholder="URL de foto" value={form.photo} onChange={handleChange} />
      <input type="number" name="age" placeholder="Edad" value={form.age} onChange={handleChange} />
      <button type="submit">Registrar</button>
    </form>
  );
};

export default Formulario;

