import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

import linkedinLogo from "../assets/linkedin.png";
import githubLogo from "../assets/github.png";
import resumeLogo from "../assets/resume.png";
import chevronDown from "../assets/chevron-down.png";
import shootingStar1 from "../assets/shootingStar1.png";

const Main = () => {
  return (
    <div className="container">
      <h1> Wootae Jeon </h1>
      <h2> Software Engineer </h2>
      <div className="buttons">
        {Button(linkedinLogo.src, "https://www.linkedin.com/in/jeonwt7/")}
        {Button(githubLogo.src, "https://github.com/jeonwt7")}
        {Button(resumeLogo.src, "./Wootae Jeon Resume.docx")}
      </div>
      <div
        className="viewProjects"
        onClick={() =>
          window.scrollTo({
            top: 1000,
            behavior: "smooth",
          })
        }
      >
        <h3> View Projects </h3>
        <Image src={chevronDown.src} height="36" width="36" />
      </div>

      <style jsx>{`
        h1 {
          font-family: Alegreya;
          font-size: 95px;
          font-weight: 500;
          line-height: 1.5;
        }
        h2 {
          font-size: 48px;
          font-weight: 500;
          line-height: 1.5;
        }
        h3 {
          line-height: 1.6;
          font-size: 30px;
          font-weight: 100;

          margin-top: 180px;
        }
        .container {
          margin-top: 300px;
          margin-bottom: 150px;
        }
        .buttons {
          flex-direction: row;
          justify-content: space-between;
          width: 300px;
          margin-top: 64px;
        }
        .viewProjects {
          cursor: pointer;
        }
      `}</style>
    </div>
  );
};

const Button = (imageSrc: string, href: string) => {
  return (
    <a href={href} target="_blank" rel="noreferrer">
      <Image src={imageSrc} width="70" height="70" />
    </a>
  );
};

export default Main;
