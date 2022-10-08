import React from "react";
import EDMPhoto from "../Images/2015_bmw_m4_motogp_safety_bike-1920x1200.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";

export default function Info() {
  return (
    <div className="info">
      <img className="info--photo" src={EDMPhoto} alt="BMW" />
      <h1 className="info--fullname">Hemanth Kumar</h1>
      <h5 className="info--role">Junior Front End Developer</h5>
      <p className="info--website">
        {/* <a
          className="info--websiteLink"
          target="_blank"
          rel="noopener noreferrer"
        >
          Hemanth Kumar S
        </a> */}
        Hemanth kumar 
      </p>
      <div className="info--buttons">
        <address>
          <a href="mailto:hemanth77kumar97@gmail.com">
            {" "}
            <button className="button button--email">
              <FontAwesomeIcon icon={faEnvelope} className="info--icon" />
              Email
            </button>
          </a>
        </address>
        <a
          href="https://www.linkedin.com/in/hemanth-kumar-s-7539321b0/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <button className="button button--linkedin">
            <FontAwesomeIcon icon={faLinkedin} className="info--icon" />
            LinkedIn
          </button>
        </a>
      </div>
    </div>
  );
}