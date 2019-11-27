import React from 'react';

import {
  Wrapper
} from './styled';

const Header = () => {
  return (
    <Wrapper>
      <div className="nav-wrapper blue lighten-2">
        <div className="container">
          <a href="/" className="brand-logo">Logo</a>
          <ul id="nav-mobile" className="right">
            <li><a href="/autores">Autores</a></li>
            <li><a href="/livros">Livros</a></li>
            <li><a href="/sobre">Sobre</a></li>
          </ul>
        </div>
      </div>
    </Wrapper>
  )
}

export default Header;