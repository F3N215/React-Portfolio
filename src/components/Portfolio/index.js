import React from "react";
import trackerImage from "../../assets/portfolio/Employee_Tracker.png";
import weatherDashImage from "../../assets/portfolio/Weather_Dashboard.png";
import noteTakerImage from "../../assets/portfolio/NoteTaker.png";
import sculptImage from "../../assets/portfolio/Password_Sculptor.png";

function Portfolio() {
  return (
    <div>
      <section id="work" className="jobs">
        <div className="flex-row">
          <h2 className="section-title secondary-border">Work</h2>
        </div>

        <div className="job">
          <div className="job-info">
            <div className="job-img">
              <a href="https://github.com/F3N215/React-Portfolio/blob/main/Assets/portfolio/Employee_Tracker.png">
                {" "}
                <img
                  src={trackerImage}
                  className="my-2"
                  style={{ width: "100%" }}
                  alt="Employee-Tracker-Image"
                />
              </a>
            </div>
            <div className="job-text">
              <h4>Employee Tracker</h4>
              <p>
                A MySQL application that enables the user to manage a company's
                employee roster. Using terminal commands, the user can view all
                employees, roles, and departments. The user can add employees,
                roles, and departments. The user can also update employee roles
                and managers of employees.{" "}
              </p>
            </div>
          </div>
        </div>

        <div className="job">
          <div className="job-info">
            <div className="job-img">
              <a href="https://github.com/F3N215/React-Portfolio/blob/main/Assets/portfolio/NoteTaker.png">
                {" "}
                <img
                  src={noteTakerImage}
                  className="my-2"
                  style={{ width: "100%" }}
                  alt="Note-Taker-Image"
                />
              </a>
            </div>
            <div className="job-text">
              <h4>Expess NoteTaker</h4>
              <p>
                A simple note-taking application that uses Express.js to record,
                save and delete notes. NoteTaker has a clean, simplified UI, and
                makes use of GET, POST, and DELETE routes. Each post is assigned
                a unique ID using npm packages.{" "}
              </p>
            </div>
          </div>
        </div>

        <div className="job">
          <div className="job-info">
            <div className="job-img">
              <a href="https://github.com/F3N215/React-Portfolio/blob/main/Assets/portfolio/Weather_Dashboard.png">
                {" "}
                <img
                  src={weatherDashImage}
                  className="my-2"
                  style={{ width: "100%" }}
                  alt="Weather-Dashboard"
                />
              </a>
            </div>
            <div className="job-text">
              <h4>Five-Day Forecast App</h4>
              <p>
                A weather dashboard that created using third-party APIs from
                OpenWeatherMap, FontAwesome & Bootstrap. The app shows a 5 day
                forecast for the city that the user searches for. The app also
                shows the current weather conditions for the city of your
                choice!{" "}
              </p>
            </div>
          </div>
        </div>

        <div className="job">
          <div className="job-info">
            <div className="job-img">
              <a href="https://github.com/F3N215/React-Portfolio/blob/main/Assets/portfolio/Password_Sculptor.png">
                {" "}
                <img
                  src={sculptImage}
                  className="my-2"
                  style={{ width: "100%" }}
                  alt="Password-Sculptor"
                />
              </a>
            </div>
            <div className="job-text">
              <h4>Password Sculptor</h4>
              <p>
                A simple and fun password generator project as a way to better
                understand JavaScript functions and operators. This was a way to
                practice JavaScript skills ahead of a similar challenge for
                Bootcamp, with a focus on style, making the design look clean
                and modern, with humorous elements and themes capable of being
                swapped in or out.{" "}
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Portfolio;
