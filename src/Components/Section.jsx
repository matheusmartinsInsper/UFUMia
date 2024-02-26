import React, { useRef, useEffect, useState } from 'react';
import cat from '../images/cat2.png';
import Card from './CardCats'
//import React from 'react';
import './Section.css'; // Arquivo CSS para estilização dos cards


function CardsContainer() {
    let DataCards = [
        {"img":cat,
         "backgroundcolor":'#FFF9B2',
         'namePet':"Pet1",
         'description':'descricao',
        },
        {"img":cat,
         "backgroundcolor":'#D0BFFF',
         'namePet':"Pet1",
         'description':'descricao',
        },
        {"img":cat,
         "backgroundcolor":'#FFA1F5',
         'namePet':"Pet1",
         'description':'descricao',
        },
        {"img":cat,
         "backgroundcolor":'#FFD2A5',
         'namePet':"Pet1",
         'description':'descricao',
        },
        {"img":cat,
         "backgroundcolor":'#FFA1F5',
         'namePet':"Pet1",
         'description':'descricao',
        }
       ]
  
  return (
    <div className="cards-container">
        <div className='cards-container-top'>
           <h2>Nossos pets para adoção</h2>
           <p>Conheça alguns dos pets que ainda nao foram adotados</p>
        </div>
        <div className="cards-container-bottom">
          {DataCards.map((item,index)=>{
            return <Card img={item.img} backgroundcolor={item.backgroundcolor} namePet={item.namePet} description={item.description}/>
          })}
        </div> 
    </div>
  );
}

export default CardsContainer;