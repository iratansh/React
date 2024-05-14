import "./aboutMe.css";

export default function Portfolio() {
  return (
    <>
      <div className="projects1">
        <p id="portfolio" className="projectsHeader">
          MY PORTFOLIO
        </p>

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

            <a
              href="https://github.com/iratansh/Python/tree/main/Stocker"
              target="blank"
              rel="noopener noreferrer"
            >
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
    </>
  );
}
