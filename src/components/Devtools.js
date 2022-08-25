import React from 'react';
import Front from '../images/front-end.png';
import BackEndSkills from './BackEndSkills';
import FrontEndSkills from './FrontEndSkills';

export default function Devtools() {
  return (
    <section id="skills" className="pt-16 mt-14 w-full h-screen flex flex-col">
      <div className="flex flex-col items-center justify-evenly">
        <div>
          <img className="h-24" src={ Front } alt="Front-end" />
        </div>
        <p
          className="
        text-xl
        md:text-4xl md:font-medium
        text-white
        text-center
        font-bold
        italic
        mt-6
        "
        >
          Habilidades adquiridas até o momento
        </p>
        <div className="mt-8 border bg-indigo md:w-[55%] border-light-blue rounded-md">
          <h3 className="text-4xl font-medium text-white my-4 text-center">Front-end</h3>
          <FrontEndSkills />
        </div>
        <div className="mt-8 border bg-indigo md:w-[55%] border-light-blue rounded-md">
          <h3 className="text-4xl font-medium text-white my-4 text-center">Back-end</h3>
          <BackEndSkills />
        </div>
      </div>

    </section>
  );
}
