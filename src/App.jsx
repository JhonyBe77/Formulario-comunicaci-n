import { useState } from 'react'
import './App.css';

// Componentes
import Formulario from './components/Formulario';
import Header from './components/Header'
import Card from './components/Card';

// Contextos
import { UserContext } from "./context/UserContext";  // Importamos el contexto para usar los componentes de EmailContext

function App() {
  // Datos del formulario
  const [datosFormulario, setDatosFormulario] = useState({ 
    nombre: '',
    email: '',
    urlFoto: '',
    edad: ''
  });
  
  return (
    <div >
      {/*Lo que se encuentra dentro de las llaves de EmailContext.Provider van a recibir esos contextos */}
      {/*Este archivo es el proveedor que envía el contexto de email obtenido en el formulario. Este dato es enviado al header, que lo recoge para pintar el mail*/}
      <UserContext.Provider value={datosFormulario.email}>  
      <Header/>
      <Formulario onSubmittt={setDatosFormulario} />
      {/*Desde este archivo, el proveedor le envía los datos de formulario a traves de data={datosFormulario}*/}
      <Card data={datosFormulario}/>
      </UserContext.Provider>
    </div>
  )
}

export default App
