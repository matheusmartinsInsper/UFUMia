import React from 'react';
import './Main.css'; // Estilos CSS para o componente Main
import cat from '../images/cat2.png';

function Main() {
  return (
    <main className="main">
      <div className="left-section">
        <div className="top-left">
          <h1>Encontre,adote e <span style={{color:'#CB22D7'}}>AME</span> seu pet <br/> através da gente </h1>
          <p>
            Somos uma ONG da cidade de Uberlandia <br/> que busca resgatar, cuidar e encontrar um lar <br/>
            para pets de rua
            </p>
          <button>Contato</button>
        </div>
        <div className="bottom-left">
          <div>
            <h2>65</h2>
            <p>pets encontrados pela ONG</p>
          </div>
          <div>
            <h2>25K</h2>
            <p>Arrecados para a ONG</p>
          </div>
          <div>
            <h2>78%</h2>
            <p>pets adotados pela ONG</p>
          </div>
        </div>
      </div>
      <div className="right-section">
        <div id = "right-section-img">
          <img src={cat} alt="Imagem ONG"  className='img-cat'/>
        </div>
      </div>
    </main>
  );
}

export default Main;