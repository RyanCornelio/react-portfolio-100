import React from "react";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import GithubIcon from "@material-ui/icons/GitHub";
import YoutubeIcon from "@material-ui/icons/YouTube";
import "../styles/Home.css";

const Home = () => {
  return (
    <div className="home">
      <div className="about">
        <h2>Hi, My Name Is Ryan</h2>
        <div className="prompt">
          <p>A software developer with a passion for learning & creating.</p>
          <a href="https://www.linkedin.com/in/ryan-phillips-iserhills-cornelio/">
            <LinkedInIcon />
          </a>
          <a href="https://www.youtube.com/channel/UCOg3PF76vT3K6DMGcU7-XzA">
            <YoutubeIcon />
          </a>

          <a href="https://github.com/RyanCornelio">
            <GithubIcon />
          </a>
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
