import React from 'react';
import Card from './MisoCards.jsx'; // Import Card component
import imagedOne from './Images/one.png';
import imagedTwo from './Images/two.png';

function Cards() {
  const cardsData = [
    {
      id: 1,
      image: imagedOne,
      name: 'Miso',
      job: 'Caffe Worker',
      About: 'Miso is so hot that you can not close your eyes in front of him.',
    },
    {
      id: 2,
      image: imagedTwo,
      name: 'Vim',
      job: 'Sasma',
      About: 'Ayee Asma timi nai timi chau saasma timile bhnda agi maile timilai man parako khasma.',
    },
  ];

  return (
    <>
      {cardsData.map((card) => (
        <Card
          key={card.id}
          image={card.image}
          name={card.name}
          job={card.job}
          About={card.About}
        />
      ))}
    </>
  );
  
}

export default Cards;
