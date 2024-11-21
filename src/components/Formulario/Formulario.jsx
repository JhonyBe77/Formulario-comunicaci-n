import React, { useState } from 'react';

const Formulario = ({onSubmittt}) => {
    const [formData, setFormData] = useState({
        nombre: '',
        email: '',
        urlFoto: '',
        edad: ''
    });


    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        alert('Gracias por tus datos.');
        onSubmittt(formData)
        console.log(formData)
    };

    return (
        <form onSubmit={handleSubmit}>
            <div style={{ marginBottom: '15px' }}>
                <label htmlFor="nombre">Nombre: </label>
                <input
                    type="text"
                    id="nombre"
                    name="nombre"
                    value={formData.nombre}
                    onChange={handleChange}
                    placeholder="Tu nombre"
                    required
                />
            </div>

            <div>
                <label htmlFor="email">Email: </label>
                <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Tu email"
                    required
                />
            </div>

            <div>
                <label htmlFor="urlFoto">Sube tu foto: </label>
                <input
                    type="url"
                    id="urlFoto"
                    name="urlFoto"
                    value={formData.urlFoto}
                    onChange={handleChange}
                    placeholder="URL de tu foto"
                />
            </div>

            <div>
                <label htmlFor="edad">Edad: </label>
                <input type="number"
                    id="edad"
                    name="edad"
                    value={formData.edad}
                    onChange={handleChange}
                    placeholder="Tu edad"
                    required
                />
            </div>

            <button type="submit">Enviar</button>
        </form>
    );
};

export default Formulario;
