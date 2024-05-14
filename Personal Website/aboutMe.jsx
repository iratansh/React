import "./aboutMe.css";

function scrollToSection(sectionId) {
  const section = document.getElementById(sectionId);
  if (section) {
    section.scrollIntoView({ behavior: "smooth" });
  }
}

export default function AboutMe() {
  return (
    <>
      <p id="about" className="aboutMe">
        ABOUT ME
      </p>

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
        <button className="reachOut" onClick={() => scrollToSection("contact")}>
          Reach Out to Me
        </button>
      </div>
    </>
  );
}
