import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithubSquare } from "@fortawesome/free-brands-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faFacebook } from "@fortawesome/free-brands-svg-icons";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";

export default function Footer() {
  return (
    <div className="footer">
      <a
        href="https://github.com/Hemanth-097"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FontAwesomeIcon icon={faGithubSquare} className="footer--icon" />
      </a>
      <a
        href="https://www.linkedin.com/in/hemanth-kumar-s-7539321b0/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FontAwesomeIcon icon={faLinkedin} className="footer--icon" />
      </a>
      <a
        href="#"
        target="_blank"
        rel="noopener noreferrer"
        >
          <FontAwesomeIcon icon= {faFacebook} className="footer--icon" />
      </a>
      <a 
        href="#"
        target="_blank"
        rel="nooperner noreferrer"
        >
          <FontAwesomeIcon icon= {faInstagram} className="footer--icon" />
      </a>
    </div>
  );
}