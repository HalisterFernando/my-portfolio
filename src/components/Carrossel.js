import React from 'react';
import { IoIosArrowDroprightCircle } from 'react-icons/io';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import CardImages from '../cardImages';
import Projects from '../images/portfolio.png';
import PortfolioCard from './PortfolioCard';

export default function Carrossel() {
  const renderImages = () => CardImages.map(({ name, image, link }) => (
    <PortfolioCard
      key={ name }
      name={ name }
      image={ image }
      link={ link }
    />
  ));
  return (

    <div className="flex flex-col  items-center w-full md:hidden">
      <div>
        <img className="h-24" src={ Projects } alt="Portfolio" />
      </div>
      <p
        className="
        text-xl
        text-center
        text-white
        italic
        font-bold
        my-8
        mt-3
        md:text-4xl md:font-medium
        "
      >
        Aplicações que já desenvolvi nessa jornada!
      </p>
      <Carousel
        renderIndicator={ false }
        infiniteLoop
        autoPlay
        swipeable
        className="w-full"
        renderArrowPrev={ (onClickHandler, hasPrev, label) => hasPrev && (
          <button
            type="button"
            onClick={ onClickHandler }
            title={ label }
            className="absolute z-10 inset-y-0 left-0 rotate-180"
          >
            <IoIosArrowDroprightCircle className="text-white text-4xl" />
          </button>
        ) }
        renderArrowNext={ (onClickHandler, hasNext, label) => hasNext && (
          <button
            type="button"
            onClick={ onClickHandler }
            title={ label }
            className="absolute z-10 inset-y-0 right-0"
          >
            <IoIosArrowDroprightCircle className="text-white text-4xl" />
          </button>
        ) }
      >
        {renderImages()}
      </Carousel>
    </div>

  );
}
