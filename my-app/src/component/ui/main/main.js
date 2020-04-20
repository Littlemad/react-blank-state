import React/*, { useState } */from 'react';
import cardData from '../../data/cardData';

function Card(prop) {
  return (
    <div className="card">
      <p>Name: {prop.name}</p>
      <p>Attack: {prop.attack}</p>
      <p>Defense: {prop.defense}</p>
    </div>
  );
}

// let cardId = 1; 

function SingleCard(props){
  const cardId = props.cardId;
  let element = cardData.find(el => el.id === cardId); // Function to look for ID element and compare

  if(element) {
    return(
      <div>
        {element.id}<br /><br />
        {element.name}<br />
        {element.attack}<br />
        {element.defense}<br />
      </div>
    );
  }
}

function main() {
  const cardContainer = cardData.map(card => (
    <Card key={card.id} name={card.name} attack={card.attack} defense={card.defense} />
  ));

  return (
    <main className="main">
      <div className="box-card">
        {cardContainer}
      </div>

      test:<br/>
      <SingleCard cardId={2} />

    </main>
  );
}

export default main;
