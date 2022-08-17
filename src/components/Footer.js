import React from 'react';

export default function Footer() {
  return (
    <footer
      className="
      bg-indigo
      p-4
      border-t-2
      border-white
      flex flex-col gap-5
      md:flex-row md:justify-around md:items-center"
    >
      <p
        className="
      flex gap-3
      text-white
      text-lg md:text-sm
      font-semibold
      font-sans"
      >
        Desenvolvido por mim com React, TailwindCSS, e algumas xícaras de café
      </p>
      <div>
        <p className="text-white text-xl font-bold">
          Alguns ícones usados nesse projeto vieram do
          <a href="https://www.flaticon.com/br/"> Flaticon</a>
        </p>
        <ul>
          <li><a className="text-white" href="https://www.flaticon.com/br/icones-gratis/design-do-site" title="design do site ícones">Design do site ícones criados por Good Ware - Flaticon</a></li>
          <li><a className="text-white" href="https://www.flaticon.com/free-icons/development" title="development icons">Development icons created by Freepik - Flaticon</a></li>
          <li><a className="text-white" href="https://www.flaticon.com/free-icons/portfolio" title="portfolio icons">Portfolio icons created by Smashicons - Flaticon</a></li>
          <li><a className="text-white" href="https://www.flaticon.com/br/icones-gratis/designer-de-web" title="designer de web ícones">Designer de web ícones criados por srip - Flaticon</a></li>
        </ul>
      </div>
    </footer>
  );
}
