import React from "react";
import Image from "next/image";

import footageScreenshot from "../assets/footage.png";
import aldoggoScreenshot from "../assets/aldoggo.png";

const Projects = () => {
  return (
    <div className="projects">
      {CardWithBackground(Footage())}
      {CardWithBackground(Aldoggo())}

      <style jsx>{`
        .projects {
        }
        .buttons {
          flex-direction: row;
        }
      `}</style>
    </div>
  );
};

const CardWithBackground = (element: JSX.Element) => {
  return (
    <div>
      {element}

      <style jsx>{`
        div {
          border-radius: 30px;
          height: 630px;
          width: 1000px;
          margin-bottom: 100px;

          background-image: linear-gradient(#222237, #14141f);
        }
      `}</style>
    </div>
  );
};

const Footage = () => {
  return (
    <div>
      <p className="title">
        <h2 className="italic"> 01. </h2> <h2> Footage </h2>
      </p>
      <div className="textAndImage">
        <p className="description">
          <h4> 14th overall paid on the Korean App Store </h4>
          <h4>
            {" "}
            <br /> Oct 2020{" "}
          </h4>
        </p>
        <a
          href="https://www.instagram.com/official.footage/"
          target="_blank"
          rel="noreferrer"
        >
          <Image src={footageScreenshot.src} height="450px" width="677px" />
        </a>
      </div>

      <style jsx>{`
        .title {
          display: flex;
          width: 100%;
          margin-top: 30px;
        }
        h2 {
          font-size: 60px;
        }
        .italic {
          font-weight: 100;
          font-style: italic;
          margin-right: 20px;
        }
        .textAndImage {
          flex-direction: row;
          align-items: start;
          width: 100%;
        }
        .description {
          width: 200px;
          text-align: right;
          margin-right: 50px;
        }
        h4 {
          font-size: 30px;
          font-weight: 100;
          line-height: 1.2;
          font-style: italic;
        }
      `}</style>
    </div>
  );
};

const Aldoggo = () => {
  return (
    <div>
      <p className="title">
        <h2 className="italic"> 02. </h2> <h2> Aldoggo Studio </h2>
      </p>
      <div className="textAndImage">
        <a href="https://www.aldoggo.academy" target="_blank" rel="noreferrer">
          <Image src={aldoggoScreenshot.src} height="450px" width="677px" />
        </a>
      </div>

      <style jsx>{`
        .title {
          display: flex;
          width: 1000px;
          margin-left: 30px;
          margin-top: 30px;
          text-align: left;
        }
        h2 {
          font-size: 60px;
        }
        .italic {
          font-weight: 100;
          font-style: italic;
          margin-right: 20px;
        }
        .textAndImage {
          flex-direction: row;
          align-items: start;
          width: 1000px;
          padding-left: 50px;
        }
        .description {
          width: 200px;
          text-align: right;
          margin-right: 50px;
        }
        h4 {
          font-size: 30px;
          font-weight: 100;
          line-height: 1.2;
          font-style: italic;
        }
      `}</style>
    </div>
  );
};

export default Projects;
