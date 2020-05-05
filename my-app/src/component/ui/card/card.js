import React, { useState } from 'react';
import cardData from '../../data/cardData';
import './card.css';

function RenderCards() {
  // Setting state
  const [state, setState] = useState(1);
  let [myLibrary, setMyLibrary] = useState([]);

  // show all cards in the data JSON
  const cardContainer = cardData.map((card) => (
    <Card
      key={card.id}
      name={card.name}
      attack={card.attack}
      defense={card.defense}
    />
  ));

  function Card(prop) {
    return (
      <div className="card">
        <p>Name: {prop.name}</p>
        <p>Attack: {prop.attack}</p>
        <p>Defense: {prop.defense}</p>
      </div>
    );
  }

  function MiniCard(prop) {
    return (
      <div className="card mini">
        <p>Name: {prop.name}</p>
      </div>
    );
  }

  function SingleCardValue(prop) {
    const cardId = prop.cardId;
    let element = cardData.find((el) => el.id === cardId); // Function to look for ID element and compare

    if (element) {
      return (
        <div className="card-value">
          value selected by ID: {element.id}
          <br />
          <Card
            key={element.id}
            name={element.name}
            attack={element.attack}
            defense={element.defense}
          />
        </div>
      );
    }
  }

  function HandleDeck() {
    // Add functionality to buttons for cycling cards
    const increment = () => {
      console.log('next');

      if (state < cardData.length) {
        setState(state + 1);
      } else {
        setState(1); //cycle back
      }
    };
    const decrement = () => {
      console.log('prev');

      if (state > 1) {
        setState(state - 1);
      } else {
        setState(cardData.length); //cycle forward
      }
    };

    // Add, Remove, Check
    const add2Deck = () => {
      console.log('selected');
      setMyLibrary([...myLibrary, state]);
    };

    const resetDeck = () => {
      console.log('reset');
      setMyLibrary([]);
    };

    return (
      <div className="box-btn">
        <button onClick={decrement} className="btn blue prev">
          Prev Card
        </button>
        <button onClick={increment} className="btn blue next">
          Next Card
        </button>
        <button onClick={add2Deck} className="btn blue select">
          Add Card
        </button>
        <button onClick={resetDeck} className="btn red select">
          Reset Deck
        </button>
      </div>
    );
  }

  let myTxt = 'Your Deck is empty';

  // show cards in library
  function ShowDeck() {
    let listDeck = "";
    let cardWording = "";

    if (myLibrary.length !== 0){
      if(myLibrary.length === 1){
        cardWording = "card"
      }else{
        cardWording = "cards"
      }
      myTxt = `You have selected ${myLibrary.length} ${cardWording}`;

      listDeck = myLibrary.map((deckID, id) => {
        let elem = cardData.find((el) => el.id === deckID); // Function to look for ID element and compare
        let classStyle;

       console.log(elem)
        if (deckID === 1) {
          classStyle = 'first';
        } else if (deckID === myLibrary.length) {
          classStyle = 'last';
        } else{
          classStyle = '';
        }

        return (
          <li className={`li ${classStyle}`} key={id}>
            <MiniCard
              name={elem.name}
              attack={elem.attack}
              defense={elem.defense}
            />
          </li>
        );

      });
    }
    return (
      <div className="list-deck">
        {myTxt}

        <div className="name-card">
          <ul className="no-li">{listDeck}</ul>
        </div>
      </div>
    );
  }

  return (
    <div className="ui-card">
      <div className="box-card">{cardContainer}</div>

      <SingleCardValue cardId={state} />

      {myLibrary.length > 0 ? ShowDeck() : myTxt}

      {HandleDeck()}
    </div>
  );
}

export default RenderCards;
