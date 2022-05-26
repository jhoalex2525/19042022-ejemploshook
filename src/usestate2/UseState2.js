import React, { useState } from "react";

export default function Accordion() {
  const [value, setValue] = useState(""); //Create state
  const handleChange = e => setValue(e.target.value); //set State

  return (
    <div>
      <input onChange={handleChange} defaultValue={value} />
      <p>{value}</p>
    </div>
  );
}
