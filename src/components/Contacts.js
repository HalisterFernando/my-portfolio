import React from 'react';
import ContactLinks from './ContactLinks';

export default function Contacts() {
  return (
    <div className=" w-full flex flex-col justify-evenly h-screen mt-1 p-4">
      <h3
        id="contact"
        className="
      font-bold md:text-4xl md:font-medium font-sans
      text-white
      mt-3
      text-2xl
      text-center italic
      "
      >
        Vamos trabalhar juntos?
      </h3>
      <ContactLinks />
    </div>
  );
}
