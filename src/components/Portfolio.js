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
    <div className="flex flex-col justify-evenly items-center h-screen">
      <div>
        <img className="h-24" src={ Works } alt="Portfolio" />
      </div>
      <p
        className="
      text-xl
      font-bold
      md:text-4xl md:font-medium text-center
      text-white mt-3 italic"
      >
        Alguns projetos que desenvolvi nessa jornada!
      </p>
      <div
        className="
      mt-1
      p-3
      flex flex-col items-center
      w-full
      border border-light-blue rounded-md
      bg-indigo
      "
      >
        <h3 className="text-4xl text-white my-4 text-center">Projetos</h3>
        <div className="flex flex-wrap justify-between gap-4 p-3 ">
          {renderImages()}
        </div>
      </div>
    </div>

  );
}
