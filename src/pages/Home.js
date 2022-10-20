import React from "react";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import EmailIcon from "@material-ui/icons/Email";
import GithubIcon from "@material-ui/icons/GitHub";
import "../styles/Home.css";

const Home = () => {
  return (
    <div className="home">
      <div className="about">
        <h2>Hi, My Name Is Ryan</h2>
        <div className="prompt">
          <p>A software developer with a passion for learning & creating.</p>
          <LinkedInIcon />
          <EmailIcon />
          <GithubIcon />
        </div>
      </div>
      <div className="skills">
        <h1>Skills</h1>
        <ol className="list">
          <li className="item">
            <h2>Front-End</h2>
            <span>React.JS, HTML, CSS, Bootstrap, MaterialUI.</span>
          </li>
          <li className="item">
            <h2>Back-End</h2>
            <span>Node.JS, MySQL.</span>
          </li>
          <li className="item">
            <h2>Stacks</h2>
            <span>Javascript, Typescript, Wordpress.</span>
          </li>
        </ol>
      </div>
    </div>
  );
};

export default Home;
