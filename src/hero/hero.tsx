import React, { useState } from "react";
import file from "../assets/file.png";
import block from "../assets/blockchain.svg";
import "./hero.css";

interface Props {}

export const Hero: React.FC<Props> = () => {
  const [theSrc, setSrc] = useState([file, "Boring Resume"]);

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
          <a href="">Join our waiting list</a>
        </div>
      </div>
      <div
        className="right"
        onMouseEnter={() => setSrc([block, "Amazing Resume"])}
        onMouseLeave={() => setSrc([file, "Boring Resume"])}
      >
        <img src={theSrc[0]} width="100%" alt={theSrc[1]} />
      </div>
    </div>
  );
};
