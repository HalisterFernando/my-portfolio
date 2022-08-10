import React from 'react';
import PropTypes from 'prop-types';

export default function PortfolioCard({ image, name, link }) {
  return (
    <div className="flex flex-col items-center">
      <div className="flex justify-center w-[350px] h-[300px]">
        <img className="object-cover" src={ image } alt={ name } />
      </div>
      <div className="w-[350px] md:w-[350px] bg-light-blue text-center text-xl">
        <a
          className="
        text-2xl
        font-bold font-heading"
          href={ link }
          alt={ name }
        >
          {name}
        </a>
      </div>
    </div>
  );
}

PortfolioCard.propTypes = {
  image: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
};
