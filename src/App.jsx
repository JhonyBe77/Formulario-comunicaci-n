import React from "react";
import { UserProvider } from "./context/UserContext";
import Head from "./components/Head/Head";
import Card from "./components/Head/Card/Card";
import Formulario from "./components/Head/Formulario/Formulario";



const App = () => {
  return (
    <UserProvider>
      <Head />
      <Formulario />
      <Card />
    </UserProvider>
  );
};

export default App;
