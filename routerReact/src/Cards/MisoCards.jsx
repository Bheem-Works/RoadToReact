import React from 'react';

const Card = ({ image, name, job, About }) => {
  return (
    <div className="card">
      <img src={image} alt={name} width="200px"/>
      <h2>{name}</h2>
      <h4>{job}</h4>
      <p>{About}</p>
    </div>
  );
};

export default Card;
