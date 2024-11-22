import React from "react";

const Card = ({ data }) => {

  return (

    <article class="card">
      <h1>{data.nombre}</h1>
      <p>{data.email}</p>
      <p>{data.edad}</p>
      {data.urlFoto && <img src={data.urlFoto} alt="foto" />}
    </article>

  )
};

export default Card;
