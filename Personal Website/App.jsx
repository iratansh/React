import "./App.css";
import githubImg from "./github.png";
import linkedinImg from "./linkedin.png";
import resume from "./resume.pdf";
import React from "react";
import { useRef } from "react";
import emailjs from "@emailjs/browser";
import NavigationBar from "./navbar";

function App() {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_6meyomh", "template_d581cmw", form.current, {
        publicKey: "BNCxEmdpAWd2bBgXW",
      })
      .then(
        () => {
          console.log("SUCCESS!");
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
    form.current.reset();
  };

  return (
    <div className="App">
      <NavigationBar></NavigationBar>
      <header className="Header">Ishaan Ratanshi</header>
      <p className="subHeader">
        Computing Science Student at University of Alberta
      </p>

      <div className="links">
        <a
          href="https://github.com/iratansh"
          target="blank"
          rel="noopener noreferrer"
        >
          <img src={githubImg} alt="GitHub" className="github" />
        </a>

        <a
          href="https://www.linkedin.com/in/ishaan-ratanshi/"
          target="blank"
          rel="noopener noreferrer"
        >
          <img src={linkedinImg} alt="LinkedIn" className="linkedin" />
        </a>
      </div>

      <div className="information">
        <button className="contact">Contact Me</button>
        <a href={resume} download={resume}>
          <button className="resume">Resume/CV</button>
        </a>
      </div>

      <p className="aboutMe">ABOUT ME</p>

      <div className="container">
        <div className="box">
          <p className="sinfoHeader">Computing Science:</p>
          <p className="sinfo">University of Alberta</p>
        </div>

        <div className="box">
          <p className="sinfoHeader">Availability:</p>
          <p className="sinfo">Starting May 2025</p>
        </div>
      </div>

      <div className="container2">
        <div className="box2">
          <p className="sinfo">
            Hello, I'm Ishaan Ratanshi, a first-year Computing Science student
            at the University of Alberta. Welcome to my website, where I
            showcase my proficiency in React.js and front-end development. I
            created this website in a day and will continue to update it in the
            future. This website reflects my dedication to refining my skills, a
            journey I'm committed to continuing during my spare time. My passion
            lies in programming, particularly in Full-Stack Development,
            Artificial Intelligence, and App Development. I invest my spare time
            in deepening my understanding of these domains, constantly expanding
            my knowledge base. Beyond coding, I find joy in weightlifting and
            exploring opportunities in the stock market. This website provides a
            glimpse into who I am; for more insights, feel free to explore my
            LinkedIn and GitHub profiles.
          </p>
        </div>
        <div className="box2">
          <p className="sinfo">Goals:</p>
        </div>
      </div>

      <div>
        <button className="reachOut">Reach Out to Me</button>
      </div>

      <div className="projects1">
        <p className="projectsHeader">MY PORTFOLIO</p>

        <div className="container">
          <div className="box3">
            <p className="sinfoHeader">Stocker</p>
            <p className="sinfo">
              Stocker is a stock market trend predictor leveraging machine
              learning techniques such as XGBoost and Bayesian Neural Networks.
              The program is integrated with sentiment analysis and risk
              strategies, Stocker makes investing easy. Developed user-friendly
              interfaces in ReactJS and Swift for seamless access to dynamic
              stock market predictions.
            </p>

            <a href="" target="blank" rel="noopener noreferrer">
              <button className="repo">GITHUB REPO</button>
            </a>
          </div>

          <div className="box3">
            <p className="sinfoHeader">DocumentGPT:</p>
            <p className="sinfo">
              DocumentGPT is an AI-powered document analysis and summarization
              tool designed to assist users in efficiently extracting key
              insights from a wide range of documents, including reports,
              articles, research papers, and more. OpenAi's GPT 3.5 is used in
              the generation of a response.
            </p>
            <a
              href="https://github.com/iratansh/Python/tree/main/DocumentGPT"
              target="blank"
              rel="noopener noreferrer"
            >
              <button className="repo">GITHUB REPO</button>
            </a>
          </div>

          <div className="box3">
            <p className="sinfoHeader">Movie Database Web Application:</p>
            <p className="sinfo">
              This program is a React application that fetches movie data from
              The Movie Database (TMDb) API and displays it in a user interface.
              It allows users to search for movies, displays trending movies by
              default, and presents movie posters, titles, ratings, and
              overviews in a visually appealing layout. The program also
              includes CSS styling for layout, colors, and hover effects, and it
              has a test case to ensure the main component renders without
              errors.
            </p>
            <a
              href="https://github.com/iratansh/React/tree/main/Movie%20React"
              target="blank"
              rel="noopener noreferrer"
            >
              <button className="repo">GITHUB REPO</button>
            </a>
          </div>
        </div>
      </div>

      <div className="projects2">
        <div className="container2">
          <div className="box4">
            <p className="sinfoHeader">
              NLP+ML Project: Advanced Safety and Risk Management System for
              Asian Industry Web Application (Data Analyst):{" "}
            </p>
            <p className="sinfo">
              Implemented K-Nearest Neighbors (KNN) machine learning algorithm
              for missing data imputation with a 94% accuracy. Conducted
              thorough analysis of safety reports, adeptly using diverse
              graphical representations to communicate correlations efficiently.{" "}
            </p>
            <a
              href="https://github.com/iratansh/Python/tree/main/UAIS%20Project"
              target="blank"
              rel="noopener noreferrer"
            >
              <button className="repo">GITHUB REPO</button>
            </a>
          </div>

          <div className="box4">
            <p className="sinfoHeader">
              Reinforcement Learning with the Puddle World Environment:
            </p>
            <p className="sinfo">
              Applied Deep Q-Learning (DQL) techniques to address a complex
              challenge: guiding an entity to navigate and discover the shortest
              path to a target destination on a continuous observation space.
              Leveraging an array of powerful libraries such as Gym, Matplotlib,
              NumPy, and PyTorch, I meticulously trained the agent to
              dynamically explore and exploit its surroundings.{" "}
            </p>
            <a
              href="https://github.com/iratansh/Python/tree/main/Upper%20Bound%202024"
              target="blank"
              rel="noopener noreferrer"
            >
              <button className="repo">GITHUB REPO</button>
            </a>
          </div>

          <div className="box4">
            <p className="sinfoHeader">Personal Website:</p>
            <p className="sinfo">
              I've crafted a personal project using React, Vite, and JavaScript.
              This platform serves as a showcase for my web development skills,
              and features my projects and my goals in programming.
            </p>
            <a
              href="https://github.com/iratansh/React/tree/main/Personal%20Website"
              target="blank"
              rel="noopener noreferrer"
            >
              <button className="repo">GITHUB REPO</button>
            </a>
          </div>
        </div>
      </div>

      <div className="final">
        <p>GET IN TOUCH</p>
        <div className="container-parent">
          <div className="container3">
            <div className="box5">
              <div className="informationBoxes">
                <p className="sinfo">EMAIL</p>
                <p className="sinfo">iratansh@ualberta.ca</p>
                <button className="contactButtons">
                  <a
                    href="mailto:iratansh@ualberta.ca"
                    target="blank"
                    rel="noopener noreferrer"
                    className="contactButtons"
                  >
                    Email Me
                  </a>
                </button>
              </div>
            </div>

            <div className="box5">
              <div className="informationBoxes">
                <p className="sinfo">LINKEDIN</p>
                <p className="sinfo">Ishaan Ratanshi</p>
                <button className="contactButtons">
                  <a
                    href="https://www.linkedin.com/in/ishaan-ratanshi/"
                    target="blank"
                    rel="noopener noreferrer"
                    className="contactButtons"
                  >
                    Connect with Me
                  </a>
                </button>
              </div>
            </div>

            <div className="box5">
              <div className="informationBoxes">
                <p className="sinfo">GITHUB</p>
                <p className="sinfo">iratansh</p>

                <button className="contactButtons">
                  <a
                    href="https://github.com/iratansh"
                    target="blank"
                    rel="noopener noreferrer"
                    className="contactButtons"
                  >
                    Collaborate With Me
                  </a>
                </button>
              </div>
            </div>
          </div>

          <div className="container4">
            <form id="name" ref={form} onSubmit={sendEmail} className="form">
              <input
                type="text"
                placeholder="Enter your name"
                className="inputs"
                name="user_name"
                required
              />
              <input
                type="text"
                placeholder="Enter your Email Address"
                className="inputs"
                name="user_email"
                required
              />
              <textarea
                name="message"
                cols="35"
                rows="10"
                placeholder="Enter your Message"
                className="inputs"
                required
              ></textarea>
              <button type="submit" className="emailButton">
                Send Message
              </button>
            </form>
          </div>

          </div>
        <div className="end">
            <div className="bottomContainer">
              <div className="box6">
                <p className="websiteName">ISHAAN'S WEBSITE</p>
                <p className="quickFind">HOME ABOUT PORTFOLIO CONTACT</p>
              </div>
            </div>
          </div>

      </div>
    </div>
  );
}

export default App;

}

export default App;

