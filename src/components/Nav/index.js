import React, { useEffect } from "react";
import { capitalizeFirstLetter } from "../../utils/helpers";

// using object descructuring, we can assign the props object to the variable currentTab and give their own variable names to the properties of the object
function Nav(props) {
  const { currentTab, handleTabChange } = props;

  useEffect(() => {
    document.title = capitalizeFirstLetter(currentTab.name);
  }, [currentTab]);

  return (
    <nav>
      <ul className="nav nav-tabs">
        <li className="nav-item">
          <a
            href="#about"
            onClick={() => handleTabChange("About")}
            // checks if the current tab is 'About' and if so, sets the class to 'nav-link active', otherwise it sets it to 'nav-link'
            className={currentTab === "About" ? "nav-link active" : "nav-link"}
          >
            About
          </a>
        </li>
        <li className="nav-item">
          <a
            href="#portfolio"
            onClick={() => handleTabChange("Portfolio")}
            // checks if the current tab is 'Portfolio' and if so, sets the class to 'nav-link active', otherwise it sets it to 'nav-link'
            className={
              currentTab === "Portfolio" ? "nav-link active" : "nav-link"
            }
          >
            Portfolio
          </a>
        </li>
        <li className="nav-item">
          <a
            href="#contact"
            onClick={() => handleTabChange("Contact")}
            // checks if the current tab is 'Contact' and if so, sets the class to 'nav-link active', otherwise it sets it to 'nav-link'
            className={
              currentTab === "Contact" ? "nav-link active" : "nav-link"
            }
          >
            Contact
          </a>
        </li>
        <li className="nav-item">
          <a
            href="#resume"
            onClick={() => handleTabChange("Resume")}
            // checks if the current tab is 'Resume' and if so, sets the class to 'nav-link active', otherwise it sets it to 'nav-link'
            className={currentTab === "Resume" ? "nav-link active" : "nav-link"}
          >
            Resume
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default Nav;
