import React, { useState } from 'react';
import cardData from '../../data/cardData';
import './card.css';


/*
USEFUL PIECE OF CODE:
let elem = cardData.find((el) => el.id === i); // Function to look for ID element and compare
****************************
`myClassName ${isLastIndex ? 'li last' : 'li'}` // class + variable with conditional
****************************
<button onClick={e => myFunc(e)}>button</button> // To know about event.target content

*/


function RenderCards() {
  // Setting state
  const [state, setState] = useState(1);
  const [myLibrary, setMyLibrary] = useState([]);

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

  function MiniCard(prop){
    function removeCardFromDeck(){
//      console.log("remove item "+myLibrary.filter(prop.id, 1));
      console.log(myLibrary);

      let myFilter = myLibrary.filter(removeCard => removeCard !== (prop.id+1));
      //      const myFilter = myLibrary.filter(removeCard => removeCard != prop.id);
      console.log("myProp= "+(prop.id + 1));
      console.log("myFilter= "+myFilter);

      setMyLibrary(myFilter);
      console.log(myLibrary)
      
    };

    return (
      <div className="card mini">
        <p>{prop.name}</p>
        <button onClick={() => removeCardFromDeck()} className="btn red delete">
          Remove
        </button>
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

  // show each card in library
  function ShowDeck() {
    let listDeck = '';
    let cardWording = '';
    let classStyle;

      if (myLibrary.length === 1) {
        cardWording = 'card';
      } else {
        cardWording = 'cards';
      }
      myTxt = `You have selected ${myLibrary.length} ${cardWording}`;

      listDeck = myLibrary.map((deckID, id) => {
        let elem = cardData.find((el) => el.id === deckID); // Function to look for ID element and compare


        const isFirstAndOnlyIndex =  id === 0 && myLibrary.length === 1;
        const isFirstIndex =  id === 0 && myLibrary.length !== 1;
        const isLastIndex = id !== 0 && id === myLibrary.length - 1;

        if(isFirstAndOnlyIndex){
          classStyle = "li first-only";
        }else if(isFirstIndex){
          classStyle = "li first";
        }else if(isLastIndex){
          classStyle = "li last";
        }else{
          classStyle = "li";
        }

        return (
          <li className={classStyle} key={id}>
            <MiniCard
              id={id}
              name={elem.name}
              attack={elem.attack}
              defense={elem.defense}
            />
          </li>
        );
      });
 
    return (
      <div className="list-deck">
        {myTxt}

        <div className="name-card">
          <ul className={'no-li'}>{listDeck}</ul>
        </div>
      </div>
    );
  }

  return (
    <div className="ui-card">
      <div className="box-card">{cardContainer}</div>

      <div className="box-deck">
        <SingleCardValue cardId={state} />

        {myLibrary.length > 0 ? ShowDeck() : myTxt}
      </div>

      {HandleDeck()}
    </div>
  );
}

export default RenderCards;
