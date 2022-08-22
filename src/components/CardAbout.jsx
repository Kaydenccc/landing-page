import React from 'react';
const CardAbout = (props) => {
  return (
    <div className="card-about">
      <div className="card__top">
        <img src={props.svg} alt="cardDB" />
        <h2>{props.name}</h2>
      </div>
      <p className="card__bottom">{props.tittle}</p>
    </div>
  );
};

export default CardAbout;
