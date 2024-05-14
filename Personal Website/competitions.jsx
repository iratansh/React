import "./competitions.css";

export default function Competitions() {
  return (
    <>
      <div className="competitions1">
        <p id="competitions" className="headerForCompetitions">
          COMPETITIONS
        </p>

        <div className="container">
          <div className="box3">
            <p className="compHeader">
              Upper Bound 2024 (Alberta Machine Intelligence Institute)
            </p>
            <p className="comp">
              Applied Q-Learning and Proximal Policy Optimization (PPO)
              techniques to address a complex challenge: guiding an entity to
              navigate and discover the shortest path to a target destination
              over a continuous state space. Leveraging an array of powerful
              libraries such as Gym, Matplotlib, NumPy, and Stable Baslines3,
              meticulously trained an agent to dynamically explore and exploit
              its surroundings.
            </p>
          </div>

          <div className="box3">
            <p className="compHeader">
              Hack the Computer - Open the Box (Cybersecurity, Hacking, and
              Digital Security Club)
            </p>
            <p className="comp">
              Demonstrated expertise in exploiting vulnerabilities through SQL
              injection to bypass a website's login system, showcasing
              proficiency in penetration testing techniques. Additionally,
              adeptly tackled Netcat puzzles, showcasing problem-solving skills
              and an ability to navigate complex cybersecurity scenarios.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
