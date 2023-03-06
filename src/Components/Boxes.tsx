import React from "react";
import BoxProps from "../Interfaces/boxInterface";

interface individualProp {
    indProp : BoxProps[]
}

const Boxes: React.FC<BoxProps> = ({ id, on, toggle }: BoxProps) => {
  const styles = {
    backgroundColor: on ? "#222222" : "transparent",
  };

  return (
    <div style={styles} className="boxesDiv" onClick={() => toggle(id)}></div>
  );
};

export default Boxes;
