import React from "react";
import { Link } from "react-router-dom";

const sideLinks = [
  <Link to="/">
    <i className="fas fa-home" />
  </Link>,
  <Link to="/about">
    <i className="far fa-address-card" />
  </Link>,
  <Link to="/portfolio">
    <i className="fas fa-briefcase" />
  </Link>,
  <Link to="/blogs">
    <i className="far fa-file-word" />
  </Link>,
  <Link to="/contact">
    <i className="fas fa-envelope-open-text" />
  </Link>,
  <a href="https://github.com/LaSkilzs">
    <i className="fab fa-github-alt" />
  </a>,
  <a href="https://www.linkedin.com/in/la-fountain-649253112/">
    <i className="fab fa-linkedin" />
  </a>,
  <a href="https://twitter.com/Laskilzs">
    <i className="fab fa-twitter" />
  </a>
];

export default sideLinks;
