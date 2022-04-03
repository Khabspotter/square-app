
import React from "react";
import { useState, useEffect} from 'react';
export function Cards() {
    const [square, setSquare] = useState([]);
  
    useEffect(() => {
      fetch("https://jsonplaceholder.typicode.com/photos?_limit=50")
        .then(response => response.json())
        .then(
          (result) => {
            setSquare(result);
          },
        )
    }, [])
  
    return (
        <div style  ={{ display: "flex", flexWrap:'wrap', justifyContent:"space-between"}}>
          {square.map(el => (
           <img style ={{padding:'10px', width: '100px',}} key ={el.id} src= {el.url} alt= ''></img>
          ))}
        </div>
      );
  }