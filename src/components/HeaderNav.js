import React from 'react';

export default function HeaderNav() {
  return (
    <nav className="hidden 2lg:flex">
      <ul className="flex justify-evenly p-2">
        <li>
          <a className="header-link" href="#profile"> Perfil</a>

        </li>
        <li>
          <a className="header-link" href="#front-end"> Habilidades </a>

        </li>
        <li>
          <a className="header-link" href="#projects"> Projetos </a>

        </li>
        <li>
          <a className="header-link" href="#contact"> Contato </a>

        </li>
      </ul>
    </nav>
  );
}
