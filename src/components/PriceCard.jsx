import React from 'react';
import Checklist from '../svg/Checklist';

const PriceCard = ({ card }) => {
  return (
    <div className="CardWrapper__price">
      <h2 className="name_card">{card.name}</h2>
      <h1 className="harga">{card.harga}</h1>
      <p className="dec__price">{card.describe}</p>
      <ul>
        {card.fitur.map((item, index) => (
          <li key={index}>
            <Checklist className="icons__price" />
            {item}
          </li>
        ))}
      </ul>
      <input type="button" value="Download" className="btn__price" />
    </div>
  );
};

export default PriceCard;
