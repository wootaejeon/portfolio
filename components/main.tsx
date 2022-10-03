import React from "react";
import Image from "next/image";

import linkedinLogo from "../assets/linkedin.png";
import githubLogo from "../assets/github.png";
import resumeLogo from "../assets/resume.png";

const Main = () => {
  return (
    <div className="container">
      <h1> Wootae Jeon </h1>
      <h2> Software Engineer </h2>
      <div className="buttons">
        {Button(linkedinLogo.src, "https://www.linkedin.com/in/jeonwt7/")}
        {Button(githubLogo.src, "https://github.com/jeonwt7")}
        {Button(resumeLogo.src, "./resume.docx")}
      </div>

      <style jsx>{`
        h1 {
          font-size: 60px;
          font-weight: 700;
          line-height: 1.5;

          border-bottom: 1px solid white;
        }
        h2 {
          font-size: 35px;
          font-weight: 700;
          line-height: 1.5;
        }
        h3 {
          line-height: 1.6;
          font-size: 18px;
          font-weight: 100;

          margin-top: 20px;
        }

        .container {
          margin-top: 300px;
        }
        .buttons {
          flex-direction: row;
          justify-content: space-between;
          width: 300px;
          margin-top: 64px;
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
