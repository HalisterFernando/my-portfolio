import React from 'react';
import { IoIosArrowDown } from 'react-icons/io';
import Globo from '../images/navegador.png';
import HeaderNav from './HeaderNav';

export default function Header() {
  return (
    <div className="fixed border-b-2 border-white bg-indigo w-full overflow-hidden z-20">
      <input
        type="checkbox"
        className="
      2lg:hidden
      peer
      absolute
      w-full h-10
      opacity-0
      top-0 inset-x-0 z-10
      cursor-pointer"
      />
      <div className="h-10 flex items-center py-6 px-4 justify-between">
        <div className="flex items-center gap-3">
          <img className="h-12 hidden md:block" src={ Globo } alt="Globo" />
          <h2
            className="
          text-white
          text-base
          md:text-xl"
          >
            Halister Fernando | Desenvolvedor Web
          </h2>
        </div>
        <HeaderNav />
      </div>
      <div
        className="
      absolute
      top-3 right-3
      2lg:hidden
      transition-transform duration-500
      peer-checked:rotate-180"
      >
        <IoIosArrowDown className="text-light-blue text-2xl" />
      </div>
      <div
        className="
      bg-indigo
      m-0
      2lg:hidden
      overflow-hidden
      transition-all duration-500
      max-h-0 peer-checked:max-h-10"
      >
        <nav className="lg:hidden flex justify-evenly">
          <a className="header-link" href="#profile"> Perfil</a>
          <a className="header-link" href="#front-end"> Habilidades </a>
          <a className="header-link" href="#projects"> Projetos </a>
          <a className="header-link" href="#contact"> Contato </a>
        </nav>
      </div>
    </div>
  );
}
