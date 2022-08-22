import React from 'react';

const CardFitur = (props) => {
  return (
    <div className="card-fitur-container">
      <props.icons />
      <h1>{props.name}</h1>
      <p>{props.description}</p>
    </div>
  );
};

export default CardFitur;
