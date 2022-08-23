import React from 'react';

function CardTestimoni({ Star, avatar, desc, username, profesi }) {
  return (
    <div className="card__testimoni">
      <Star />
      <p>{desc}</p>
      <div className="test__profile">
        <img src={avatar} alt="avatar" />
        <div className="des">
          <h2>{username}</h2>
          <p>{profesi}</p>
        </div>
      </div>
    </div>
  );
}

export default CardTestimoni;
