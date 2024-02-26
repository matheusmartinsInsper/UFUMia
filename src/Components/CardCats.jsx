
import React, { useRef, useEffect, useState } from 'react';
import cat from '../images/cat2.png';
//import React from 'react';
import './CardCats.css'; // Arquivo CSS para estilização dos cards


function Card(props) {
   
  
  return (
       <div className="card" style={{backgroundColor:props.backgroundcolor}}>
            <div className="card-content">
                <div className="image-container">
                <img src={props.img} alt="Imagem ONG" style={{height:'80px',borderRadius:'90%'}}/>
                </div>
                <div className="text-container">
                  <h2>{props.namePet}</h2>
                  <p>{props.description}</p>
                </div>
            </div> 
       </div>
  );
}

export default Card;         