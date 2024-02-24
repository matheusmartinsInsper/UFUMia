import React, { useRef, useEffect, useState } from 'react';
import cat from '../images/cat2.png';
//import React from 'react';
import './Section.css'; // Arquivo CSS para estilização dos cards


function CardsContainer() {
    const [scrollPosition, setScrollPosition] = useState(0);
    const containerRef = useRef(null);
    
    const handlePrev = () => {
      const container = containerRef.current;
      const newPosition = scrollPosition - container.clientWidth;
      setScrollPosition(Math.max(newPosition, 0));
      container.scrollTo({ left: newPosition, behavior: 'smooth' });
    };
  
    const handleNext = () => {
      const container = containerRef.current;
      const newPosition = scrollPosition + container.clientWidth;
      setScrollPosition(newPosition);
      container.scrollTo({ left: newPosition, behavior: 'smooth' });
    };
  
  return (
    <div className="cards-container">
        <div className='cards-container-top'>
           <h2>Nossos pets para adoção</h2>
           <p>Conheça alguns dos pets que ainda nao foram adotados</p>
        </div>
        <div className="cards-container-bottom">
           <div className="card" style={{backgroundColor:'#FFF9B2'}}>
             <div className="card-content">
                <div className="image-container">
                <img src={cat} alt="Imagem ONG" style={{height:'80px',borderRadius:'90%'}}/>
                </div>
                <div className="text-container">
                  <h2>Pet</h2>
                  <p>Descrição do Pet</p>
                </div>
             </div>      
           </div>
           <div className="card" style={{backgroundColor:'#D0BFFF'}}>
           <div className="card-content">
                <div className="image-container">
                <img src={cat} alt="Imagem ONG" style={{height:'80px',borderRadius:'90%'}}/>
                </div>
                <div className="text-container">
                  <h2>Pet</h2>
                  <p>Descrição do Pet</p>
                </div>
             </div> 
           </div>
           <div className="card" style={{backgroundColor:'#FFA1F5'}}>
           <div className="card-content">
                <div className="image-container">
                <img src={cat} alt="Imagem ONG" style={{height:'80px',borderRadius:'90%'}}/>
                </div>
                <div className="text-container">
                  <h2>Pet</h2>
                  <p>Descrição do Pet</p>
                </div>
             </div> 
           </div>
           <div className="card" style={{backgroundColor:'#FFD2A5'}}>
           <div className="card-content">
                <div className="image-container">
                <img src={cat} alt="Imagem ONG" style={{height:'80px',borderRadius:'90%'}}/>
                </div>
                <div className="text-container">
                  <h2>Pet</h2>
                  <p>Descrição do Pet</p>
                </div>
             </div> 
           </div>
           <div className="card" style={{backgroundColor:'#FFA1F5'}}>
           <div className="card-content">
                <div className="image-container">
                <img src={cat} alt="Imagem ONG" style={{height:'80px',borderRadius:'90%'}}/>
                </div>
                <div className="text-container">
                  <h2>Pet</h2>
                  <p>Descrição do Pet</p>
                </div>
             </div> 
           </div>
        </div> 
    </div>
  );
}

export default CardsContainer;