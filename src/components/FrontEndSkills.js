import React from 'react';
import {
  SiCss3, SiHtml5, SiJavascript, SiJest,
  SiReact, SiRedux, SiStyledcomponents, SiTailwindcss, SiTestinglibrary,
} from 'react-icons/si';

export default function FrontEndSkills() {
  return (
    <div className="bg-indigo w-full flex flex-wrap justify-evenly mt-1 p-4 gap-3">
      <div className="flex flex-col items-center mx-1 mb-2">
        <div>
          <SiHtml5 className="text-6xl text-light-blue" />
        </div>
        <p className="text-white mt-1">HTML</p>
      </div>
      <div className="flex flex-col items-center mx-1 mb-2">
        <div>
          <SiCss3 className="text-6xl text-light-blue" />
        </div>
        <p className="text-white mt-1">CSS</p>
      </div>
      <div className="flex flex-col items-center mx-1 mb-2">
        <div>
          <SiJavascript className="text-6xl text-light-blue" />
        </div>
        <p className="text-white mt-1">JavaScript</p>
      </div>
      <div className="flex flex-col items-center mx-1 mb-2">
        <div>
          <SiReact className="text-6xl text-light-blue" />
        </div>
        <p className="text-white mt-1">React</p>
      </div>
      <div className="flex flex-col items-center mx-1 mb-2">
        <div>
          <SiRedux className="text-6xl text-light-blue" />
        </div>
        <p className="text-white mt-1">Redux</p>
      </div>
      <div className="flex flex-col items-center mx-1 mb-2">
        <div>
          <SiTailwindcss className="text-6xl text-light-blue" />
        </div>
        <p className="text-white mt-1">TailwindCSS</p>
      </div>
      <div className="flex flex-col items-center mx-1 mb-2">
        <div>
          <SiStyledcomponents className="text-6xl text-light-blue" />
        </div>
        <p className="text-white mt-1">Styled Components</p>
      </div>
      <div className="flex flex-col items-center mx-1 mb-2">
        <div>
          <SiJest className="text-6xl text-light-blue" />
        </div>
        <p className="text-white mt-1">Jest</p>
      </div>
      <div className="flex flex-col items-center mx-1 mb-2">
        <div>
          <SiTestinglibrary className="text-6xl text-light-blue" />
        </div>
        <p className="text-white mt-1">RTL</p>
      </div>
    </div>
  );
}
