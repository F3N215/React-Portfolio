// Importing necessary icons from react-icons library
import { SiGithub, SiLinkedin, SiInstagram } from "react-icons/si";

// Getting the current year
const currentYear = new Date().getFullYear();

// Define FooterWithSocialLinks functional component
export function FooterWithSocialLinks() {
  // Return JSX for FooterWithSocialLinks component
  return (
    <footer className="fixed bottom-0 left-0 right-0 flex justify-between items-center mx-auto p-7 text-lg w-full z-10">
      {/* Left section containing name and copyright */}
      <div className="flex items-center text-white">

        {/* Link to GitHub profile */}
        <a
          href="https://github.com/F3N215"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white hover:text-accent"
        >
          Daniel John
        </a>
        {/* Display current year */}
        <div className="ml-2 text-xs flex items-center">
          <span>&copy; {currentYear}</span>
          <span className="heart-symbol text-accent text-sm ml-1 animate__animated animate__heartBeat animate__slow animate__infinite">
            &#x2665;
          </span>
          <span className="font-bold ml-1">Made with love</span>
        </div>
      </div>
      {/* Right section containing social links */}
      <div className="flex gap-4">
        {/* Link to LinkedIn profile */}
        <a
          href="https://www.linkedin.com/in/dan-campo"
          target="_blank"
          rel="noopener noreferrer"
          className="text-myaccent hover:text-accent"
          title="Linkedin Profile"
        >
          <SiLinkedin size={36} style={{ color: 'white' }} />
        </a>
        {/* Link to Frontend Mentor profile */}
        <a
          href="https://www.instagram.com/direpikeblackandwhite"
          target="_blank"
          rel="noopener noreferrer"
          className="text-myaccent hover:text-accent"
          title="Instagram Profile"
        >
          <SiInstagram size={36} style={{ color: 'white' }} />
        </a>
        {/* Link to GitHub profile */}
        <a
          href="https://github.com/F3N215"
          target="_blank"
          rel="noopener noreferrer"
          className="text-myaccent hover:text-accent"
          title="Github Profile"
        >
          <SiGithub size={36} style={{ color: 'white' }} />
        </a>
      </div>
    </footer>
  );
}
