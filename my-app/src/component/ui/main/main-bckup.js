import React, { useState } from 'react';

import infoData from '../../../infoData';

const state = {
  name: 'Giovanni',
  age: 30,
};

function handleClick(e) {
  console.log(e.target);
}

function mouseOver(e) {
  console.log(e.target);
}

function handleCopy(e) {
  console.log('be original!!!!!!');
}

function ContactCard(props) {
  /* Example on how to use dynamic multiple classNames */
  return (
    <div className={`item${props.contact.imgUrl ? ' img' : ''}`}>
      <div className={!props.contact.imgUrl ? 'item' : 'item img'}>
        <div style={{ border: props.contact.imgUrl && '10px solid #f00' }}>
          <img alt="" src={props.contact.imgUrl} />
          <h3>{props.contact.name}</h3>
          <p>Phone: {props.contact.phone}</p>
          <p>Email: {props.contact.email}</p>
        </div>
      </div>
    </div>
  );
}

function MyTag(props) {
  return (
    <div>
      <h3>Question: {props.question}</h3>
      <h3>Answer: {props.punchLine}</h3>
      <hr />
    </div>
  );
}

function StateSet(props) {
  const myInitialState = "active";
  const [myState, mySetState] = useState(myInitialState);

  function myClick(){
    if(myState === "active"){
      mySetState("inactive")
    }else{
      mySetState("active")
    }
  }

  return (
    <div>
      <button className={myState} onClick={myClick}>
        buttoooooooooooooon {myState}
      </button>
    </div>
  );
}

function main() {

  /* How to create a component from a data and pass variables */

  const infoComponent = infoData.map(info => (
    <MyTag key={info.id} question={info.question} punchLine={info.punchLine} />
  ));

  return (
    <header className="app-header">
      <p>
        Name is {state.name} and my age is {state.age}
      </p>
      <button onClick={handleClick}>Click test</button>
      <br />
      <br />
      <button onMouseOver={mouseOver}>Mouse over</button>
      <br />
      <br />
      <p onCopy={handleCopy}>Miao bau don't copy</p>

      <br />
      <br />
      <ContactCard
        contact={{
          name: 'Mr. Whiskerson',
          imgUrl: 'http://placekitten.com/300/200',
          phone: '(212) 555-1234',
          email: 'mr.whiskaz@catnap.meow',
        }}
      />

      <ContactCard
        contact={{
          name: 'Mr. Whiskerson',
          phone: '(212) 555-1234',
          email: 'mr.whiskaz@catnap.meow',
        }}
      />

      <div>Hello {state.name + ' space ' + state.age} more text</div>

      <br />
      <br />

      {infoComponent}

      <br />
      <br />

      <StateSet />
    </header>
  );
}

export default main;
