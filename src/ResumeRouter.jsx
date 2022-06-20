import React from "react";
import BHLogo from './BHLogo';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import Profile from "./Profile";
import WorkExperience from "./WorkExperience";
import Skillset from "./Skillset";
import ResumeSection from './ResumeSection';

import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";
import { faUserCircle, faBriefcase, faCode, faFileDownload } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function ResumeRouter() {
  return (
    <Router>
      <div style={{ display: "flex", width: "100%" }}>
        <div id="router-sidebar" style={{ width: "3.1em", backgroundColor: "#282C34" }}>
          <ul style={{ listStyleType: "none", padding: 0 }}>
            <li id="logo-li">
              <BHLogo className="App-logo" />
            </li>
              <ResumeSection route="/" icon={faUserCircle}/>
              <ResumeSection route="/work-experience" icon={faBriefcase}/>
              <ResumeSection route="/skillset" icon={faCode}/>
            <li>
              <a id="linkedin" href="https://www.linkedin.com/in/brianjhollingsworth" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faLinkedin} /></a>
            </li>
            <li>
              <a id="github" href="https://github.com/brianHollingsworth" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faGithub} /></a>
            </li>
            <li>
              <a id="resume" href="https://github.com/brianHollingsworth/brian-hollingsworth-dev/raw/master/public/Brian_Hollingsworth_Resume.pdf" target="_blank" rel="noopener noreferrer" download><FontAwesomeIcon icon={faFileDownload} /></a>
            </li>
          </ul>
        </div>

        <div id="router-switch" style={{ flex: 1, paddingRight: "1em" }}>
          <Routes>
            <Route path="/" element={<Profile />} sidebar={<div>Profile</div>} exact={true}/>
            <Route path="/work-experience" element={<WorkExperience/>} sidebar={<div>Work Experience</div>}/>
            <Route path="/skillset" element={<Skillset/>} sidebar={<div>Skillset</div>}/>
          </Routes>
        </div>
      </div>
    </Router>
  );
}