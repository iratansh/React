import "./home.css";
import githubImg from "./Images/github.png";
import linkedinImg from "./Images/linkedin.png";
import resume from "./Files/resume.pdf";

function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
}

export default function Home() {
  return (
    <>
      <header id="home" className="Header">
        Ishaan Ratanshi
      </header>
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
        <button className="contact" onClick={() => scrollToSection("contact")}>
          Contact Me
        </button>
        <a href={resume} download={resume}>
          <button className="resume">Resume/CV</button>
        </a>
      </div>
    </>
  );
}
