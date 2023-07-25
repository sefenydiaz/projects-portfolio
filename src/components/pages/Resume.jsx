export default function Resume() {
    return (
      <div>
        <h1 id="resume">Resume</h1>
        <h2>Download my resume using the link below!</h2>
        <div id="resume-cont">
        <a
        href="https://docs.google.com/document/d/1ucvhyEvJ8At0YTavNhSitA2prAyS4RM8RpMBDGryGpA/edit"
        // target="_blank"
        // key="./resume.png"
        className="resume-image"
        >
        <img src="./images/resume.png" alt="resume image" id="resume-img">
        </img>
        </a>
        </div>
        <h2 id="front">Front-end Proficiencies</h2>
        <ul>
          <li>HTML</li>
          <li>CSS</li>
          <li>JavaScript</li>
          <li>JQuery</li>
          <li>Responsive Design</li>
          <li>React</li>
          <li>Bootstrap</li>
        </ul>
        <h2 id="back">Back-end Proficiencies</h2>
          <ul>
          <li>APIs</li>
          <li>Node</li>
          <li>Express</li>
          <li>MySQL, Sequelize</li>
          <li>NoSQL</li>
          <li>MongoDB, Mongoose</li>
          <li>GraphQL</li>
         </ul>
      </div>
    );
  }
  