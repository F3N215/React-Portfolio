import React from "react";
import { VscGithubAlt } from "react-icons/vsc";
import { AiOutlineLinkedin } from "react-icons/ai";
import { FaInstagram } from "react-icons/fa";

function Footer() {
  return (
    <footer>
      <h2>Crafted by Daniel John©</h2>
      <p>
        <ul>
          <a href="https://github.com/F3N215">
            <li className="logo">
              <VscGithubAlt />
            </li>
          </a>
          <a href="www.linkedin.com/in/dan-campo">
            <li className="logo">
              <AiOutlineLinkedin />
            </li>
          </a>
          <a href="https://www.instagram.com/direpike/">
            <li className="logo">
              <FaInstagram />
            </li>
          </a>
        </ul>
      </p>
    </footer>
  );
}

export default Footer;
