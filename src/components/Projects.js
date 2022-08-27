import React from 'react';
import Carrossel from './Carrossel';
import Portfolio from './Portfolio';

export default function Projects() {
  return (
    <section
      id="projects"
      className="
    w-full h-screen
    flex flex-col justify-evenly
    pt-10 mt-36 mb-60"
    >
      <Carrossel />
      <Portfolio />
    </section>
  );
}
