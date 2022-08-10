import React from 'react';
import {
  SiDocker, SiMocha,
  SiMysql, SiNodedotjs, SiSequelize, SiTypescript,
} from 'react-icons/si';

export default function BackEndSkills() {
  return (
    <div className="bg-indigo w-full flex flex-wrap justify-evenly mt-1 p-4 gap-3">
      <div className="flex flex-col items-center mx-1 mb-2">
        <div>
          <SiDocker className="text-6xl text-light-blue" />
        </div>
        <p className="text-white mt-1">Docker</p>
      </div>
      <div className="flex flex-col items-center mx-1 mb-2">
        <div>
          <SiMysql className="text-6xl text-light-blue" />
        </div>
        <p className="text-white mt-1">MySQL</p>
      </div>
      <div className="flex flex-col items-center mx-1 mb-2">
        <div>
          <SiNodedotjs className="text-6xl text-light-blue" />
        </div>
        <p className="text-white mt-1">NodeJS</p>
      </div>
      <div className="flex flex-col items-center mx-1 mb-2">
        <div>
          <SiSequelize className="text-6xl text-light-blue" />
        </div>
        <p className="text-white mt-1">Sequelize</p>
      </div>
      <div className="flex flex-col items-center mx-1 mb-2">
        <div>
          <SiMocha className="text-6xl text-light-blue" />
        </div>
        <p className="text-white mt-1">Mocha</p>
      </div>
      <div className="flex flex-col items-center mx-1 mb-2">
        <div>
          <SiTypescript className="text-6xl text-light-blue" />
        </div>
        <p className="text-white mt-1">TypeScript</p>
      </div>
    </div>
  );
}
