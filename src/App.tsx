import React, { FC , useState } from 'react';
import Boxes from './Components/Boxes';
import boxprop from './json/boxes';
import "./App.css"

function App() {

  const [square, setSquare] = useState()

  const squares = boxprop.map(square => (
    <Boxes 
      id={square.id}
      on={square.on}
    />
  ))
  return (
    <div className="App">
      {squares}
    </div>
  );
}

export default App;
