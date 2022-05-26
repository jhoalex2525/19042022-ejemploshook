import React from "react";

export default function Bombillo(props) {
  return <h1 className={props.color}> Welcome, {props.name}</h1>;
}