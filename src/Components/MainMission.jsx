import React from 'react';
import './MainMission.css'; // Estilos CSS para o componente Main
import cat from '../images/cat2.png';

function MainMission() {
  return (
    <main className="main-m">
      <div className="left-section-m">
        <div className="top-left-m">
          <h1>Conheça nosso trabalho e <span style={{color:'#CB22D7'}}>Missão</span> <br/>de resgate  de pets abandonados </h1>
          <p>
            Somos uma ONG da cidade de Uberlandia <br/> que busca resgatar, cuidar e encontrar um lar <br/>
            para pets de rua
            </p>
          <button>Contato</button>
        </div>
        <div className="bottom-left-m">
          <div>
            <h2>Resgate</h2>
            <p>pets resgatados proximo a UFU</p>
          </div>
          <div>
            <h2>Castração</h2>
            <p>AClinicas especializadas</p>
          </div>
          <div>
            <h2>Adoção</h2>
            <p>Feito por Voluntarios</p>
          </div>
        </div>
      </div>
      <div className="right-section-m">
        <div id = "right-section-img">
          <img src={cat} alt="Imagem ONG"  className='img-cat'/>
        </div>
      </div>
    </main>
  );
}

export default MainMission;