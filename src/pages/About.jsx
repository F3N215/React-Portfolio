import date from "../assets/images/DanielJohnBW.jpg";

// Define About functional component
const About = () => {
  // Return JSX for About page display
  return (
    <div className="mt-10 pt-5">
      {/* about me container */}
      <div className="container flex bg-white bg-opacity-5 backdrop-filter backdrop-blur-lg rounded-lg shadow-[rgba(0,_0,_0,_1)_0px_30px_90px] mx-auto mb-8 p-6 mt-5">
        {/* background image */}
        <img
          src={date}
          alt="bridge in florence"
          className="w-1/2 h-auto rounded-lg shadow-lg mr-4"
          style={{ maxWidth: "450px", height: "350px" }}
        />
        {/* text containert */}
        <div className="text-lg flex flex-col justify-center">
          {/* intro */}
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
        </div>
      </div>
    </div>
  );
};

export default About; // Export About component as default