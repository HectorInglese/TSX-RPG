import React, { FC, useState } from "react";

import boxprop from "./json/boxes";
import BoxProps from "./Interfaces/boxInterface";

import Boxes from "./Components/Boxes";

import "./App.css";

function App() {
  const [square, setSquare] = useState();

  const toggle = ( id : number) : boolean => {
    console.log("Clicked " + id);

    return true;
  };

  const squares = boxprop.map((square) => (
    <Boxes key={square.id} id={square.id} on={square.on} toggle={toggle} />
  ));
  return <div className="App">{squares}</div>;
}

export default App;
