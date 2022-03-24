import React from "react";
import logo from "../assets/logo.svg";
import "./header.css";

interface Props {}

export const Header: React.FC<Props> = () => {
  return (
    <div className="hhh">
      <a className="logo" href="/">
        <img src={logo} aria-hidden="true" />
        <span>W3bRes</span>
      </a>
      <ul>
        <li>
          <a href="#why">Why</a>
        </li>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>
    </div>
  );
};
