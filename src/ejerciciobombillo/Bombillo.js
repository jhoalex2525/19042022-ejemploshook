import React, { useState, useEffect } from "react";
import BombilloOff from "./../imagenes/bombillooff.jpg"
import BombilloOn from "./../imagenes/bombilloon.png"
export default function Bombillo() {

    const [count, setCount] = useState(0);
    const [value1] = useState(BombilloOff);
    const [value2] = useState(BombilloOn);
    const [conteoencendido,setCount1]=useState(0);
    
    if (count == 0) {
        return (
            <div>                
                <img src={value1}></img>
                <button onClick={() => setCount(count+1)}>Encender</button>                                             
            </div>
        );
    
    }
    else{
        return (
            <div>                
                <img src={value2}></img>
                <button onClick={() => setCount(count-1)}>Apagar</button>               
            </div>
        );
    }    
}