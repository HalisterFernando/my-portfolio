import React from 'react';
import Carrossel from '../components/Carrossel';
import Contacts from '../components/Contacts';
import Devtools from '../components/Devtools';
import Portfolio from '../components/Portfolio';
import Profile from '../components/Profile';

export default function Content() {
  return (
    <div
      className="
    bg-ultramarine flex flex-col items-center
    px-4 pt-20
    md:pt-6
    h-full w-full"
    >
      <Profile />
      <Devtools />
      <div id="projects" className="w-full h-screen flex flex-col justify-evenly pt-10">
        <div className="w-full md:hidden">
          <Carrossel />
        </div>
        <div className="hidden md:flex md:mt-14 flex-col items-center">
          <Portfolio />
        </div>
      </div>
      <Contacts />
    </div>
  );
}
