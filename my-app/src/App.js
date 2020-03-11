import React from 'react';
import './App.css';

function App() {
  const state = {
    name: 'Giovanni',
    age: 30,
  };

  function handleClick(e) {
    console.log(e.target);
  };

  function mouseOver(e) {
    console.log(e.target);
  };

  function handleMouseOver(e){
    console.log(e, e.pageX);
  }

  function handleCopy(e){
    console.log("be original!!!!!!");
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src="logo.svg" className="App-logo" alt="logo" />
        <p>
          Name is {state.name} and my age is {state.age}
        </p>
        <button onClick={handleClick}>Click test</button>
        <br></br>
        <button onMouseOver={mouseOver}>Mouse over</button>
        <br></br>
        <button onMouseOver={handleMouseOver}>Mouse over</button>
        <p onCopy={handleCopy}>Miao bau don't copy</p>
      </header>
    </div>
  );
}

export default App;
