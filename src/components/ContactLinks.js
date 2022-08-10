import React from 'react';
import { SiGithub, SiLinkedin, SiMaildotru } from 'react-icons/si';

export default function ContactLinks() {
  return (
    <div className="flex justify-evenly">
      <div>
        <a className="flex flex-col items-center" href="https://github.com/HalisterFernando" target="_blank" rel="noreferrer">
          <div className="mx-4 mb-2">
            <SiGithub className="text-4xl 2sm:text-7xl text-light-blue" />
          </div>
          <span className="contact-link">Github</span>
        </a>
      </div>
      <div>
        <a className="flex flex-col items-center" href="https://www.linkedin.com/in/halister-fernando-santos/" target="_blank" rel="noreferrer">
          <div className="mx-4 mb-2">
            <SiLinkedin className="text-4xl 2sm:text-7xl text-light-blue" />
          </div>
          <span className="contact-link">Linkedin</span>
        </a>
      </div>
      <div>
        <a
          className="flex flex-col items-center"
          href="mailto:halisterfernando@hotmail.com"
          target="_blank"
          rel="noreferrer"
        >
          <div className="mx-4 mb-2">
            <SiMaildotru className="text-4xl 2sm:text-7xl text-light-blue" />
          </div>
          <span className="contact-link">Email</span>
        </a>
      </div>
    </div>
  );
}
