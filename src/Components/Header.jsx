import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import React from 'react';
import './Header.css'; // Estilos CSS para o componente Header

function Header() {
  return (
    <header className="header">
      <div className="left-section-h">
        <div className="ong-name">UFUMia</div>
      </div>
      <div className="center-section-h">
        <ul className="topics">
          <li>Pets</li>
          <li>Missão</li>
          <li>Contato</li>
        </ul>
      </div>
      <div className="right-section-h">
      <FontAwesomeIcon icon={faBars} />
      </div>
    </header>
  );
}

export default Header;