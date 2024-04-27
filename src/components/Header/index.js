import React from "react";
import Nav from "../Nav";

function Header(props) {
  const { currentTab, handleTabChange } = props;

  return (
    <div>
      <section>
        <header className="flex-row px-1">
          <div>
            <h1>Lindsey Martin's Portfolio</h1>
          </div>
          <div>
            <Nav
              currentTab={currentTab}
              handleTabChange={handleTabChange}
            ></Nav>
          </div>
        </header>
      </section>
      <section class="hero">
        <div class="hero-cta">
          <h2>Salutations!</h2>
          <p>
            Welcome to Daniel John's portfolio page built with React. Below, you
            can find a selection of projects I've worked on throughout the
            bootcamp. Feel free to reach out to me on LinkedIn or GitHub!
          </p>
        </div>
      </section>
    </div>
  );
}

export default Header;
