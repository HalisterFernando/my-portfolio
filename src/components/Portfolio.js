import React from 'react';
import CardImages from '../cardImages';
import Works from '../images/portfolio.png';
import PortfolioCard from './PortfolioCard';

export default function Portfolio() {
  const renderImages = () => CardImages.map(({ name, image, link }) => (
    <PortfolioCard
      key={ name }
      name={ name }
      image={ image }
      link={ link }
    />
  ));
  return (
    <div
      className="
    hidden
    md:flex md:mt-14
    md:flex-col
    md:justify-evenly
    md:items-center
    "
    >
      <div>
        <img className="h-24" src={ Works } alt="Portfolio" />
      </div>
      <p
        className="
        md:text-4xl md:font-medium
        font-bold
        text-xl
        text-center
      text-white
        italic
        mt-8
      "
      >
        Alguns projetos que desenvolvi nessa jornada!
      </p>
      <div
        className="
      mt-8
      p-3
      flex flex-col items-center
      w-[80%]
      border border-light-blue rounded-md
      bg-indigo
      "
      >
        <h3 className="text-4xl text-white my-4 text-center">Projetos</h3>
        <div className="flex flex-wrap justify-center gap-4 p-3 ">
          {renderImages()}
        </div>
      </div>
    </div>

  );
}
