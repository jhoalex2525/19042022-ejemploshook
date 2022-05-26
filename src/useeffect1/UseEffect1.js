import React, { useState, useEffect } from "react";
import Welcome from "../Welcome";

export default function Container() {
  const [name, setName] = useState("Stranger");
  const [color, setColor] = useState("grayText");

  useEffect(() => { // (A)
    const handleSetData = data => {
      // Set data (D)
      setName(data.name); 
      setColor(data.color);
    };

    //"API" (B)
    setTimeout(() => {
      const data = { name: "Angélica", color: "pinkText"};
      //Execute local method (C)
      handleSetData(data);
    }, 4000);
  }, []);// <-- Empty array IMPORTANT!!! (E)

  return (
    <div>
      <Welcome name={name} color={color} />      
    </div>
  );
}
