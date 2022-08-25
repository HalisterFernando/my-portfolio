import React from 'react';
import Contacts from '../components/Contacts';
import Devtools from '../components/Devtools';
import Profile from '../components/Profile';
import Projects from '../components/Projects';

export default function Content() {
  return (
    <main
      className="
    bg-ultramarine flex flex-col items-center
    px-4 pt-20
    md:pt-6"
    >
      <Profile />
      <Devtools />
      <Projects />
      <Contacts />
    </main>
  );
}
