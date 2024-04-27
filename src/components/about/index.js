import React from "react";
import profileImage from "../../assets/large/Profile/Profile_Pic.png";
function About() {
  return (
    <section id="about-me" className="my-5 intro">
      <div class="flex-row">
        <h1 id="about" className="section-title primary-border">
          About Me
        </h1>
      </div>
      <div className="flex-row">
        <div class="intro-info">
          <div class="intro-img">
            <img src={profileImage} style={{ width: "100%" }} alt="profile" />
          </div>

          <p>
            Hello! My name is <strong>Daniel John</strong> and I am a (junior)
            full stack web developer. I'm currently attending the University of
            Toronto's coding bootcamp!
          </p>

          <p>
            Originally I took on this journey to learn more about web
            development and to gain a better understanding of the technologies
            that generate the web. I have always been fascinated by technology
            and by creating new things. I have prior experience with HTML and
            CSS using a 56k modem and a dial-up connection, back in the day.
          </p>

          <p>
            Thanks to this incredibly challenging bootcamp I now have
            JavaScript, Node.js, Express, MySQL, MongoDB, React, and more. I am
            excited to continue to learn and grow as a developer. But wow, what
            a journey it has been!
          </p>

          <p>more bio</p>

          <p>more bio</p>
        </div>
      </div>
    </section>
  );
}

export default About;
