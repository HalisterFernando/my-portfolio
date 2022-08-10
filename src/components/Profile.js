import React from 'react';
import Web from '../images/designer.png';

export default function Profile() {
  return (
    <div
      id="profile"
      className="
    flex flex-col justify-evenly items-center
    mb-8
    h-screen
    md:w-[80%]"
    >
      <div>
        <img className="h-28" src={ Web } alt="" />
      </div>
      <p
        className="
      mt-3
      mb-3
      text-white
      text-xl
      text-center
      font-bold
      md:text-4xl md:font-medium
      italic
      "
      >
        Apaixonado pela arte de programar!
      </p>
      <div
        className="
      flex flex-col items-center
      bg-indigo
      border
      border-light-blue rounded-md
      p-3"
      >
        <h3 className="text-xl md:text-4xl font-medium text-white text-center mt-3">
          Olá! Meu nome é Halister e fico feliz em te ver por aqui!
        </h3>
        <p className="text-xl 2sm:text-2xl text-center text-white mt-3">
          Amante de gatos, música e video-games, comecei minha jornada para me tornar
          um desenvolvedor no início de 2021 estudando por conta
          própria com incentivo dos amigos, e após alguns meses
          conheci a

          <a className="italic transition ease-in-out delay-75 hover:text-light-blue" href="https://www.betrybe.com/?utm_source=trybe.com.br" target="_blank" rel="noreferrer">Trybe</a>
          , que tem me ensinado não só conhecimento técnico

          <em>(hardskills)</em>
          ,
          como também habilidades socioemocionais

          <em>(sofskills)</em>
          .
          Continuo estudando com o objetivo de me tornar
          fullstack, com muita vontade de superar novos desafios!
        </p>
      </div>
    </div>
  );
}
