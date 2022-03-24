import React from "react";
import file from "../assets/file.png";
import "./hero.css";

interface Props {}

export const Hero: React.FC<Props> = () => {
  return (
    <div className="hero">
      <div className="left">
        <h1>Meet W3bRes.</h1>
        <p>Applying and hiring for jobs is outdated.</p>
        <p>
          Let’s replace bullet points and headers with dynamic NFTs and make
          both the recruiting and application process simpler and more
          enjoyable!
        </p>
        <div className="buttons">
          <a
            className="btn"
            href="https://twitter.com/W3bRes"
            target="_blank"
            rel="noopener noreferer"
          >
            Twitter
          </a>
        </div>
      </div>
      <img src={file} alt="Boring Resume" />
    </div>
  );
};
