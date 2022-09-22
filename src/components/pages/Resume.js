import React from 'react';
import resume from './resume/Ida_Resume.pdf'

export default function Home() {
  return (
    <div>
      <h2>My Resume</h2>
      <br />
      <div className="text-center">
        <h3>My Languages/Proficiencies</h3>
        <ul className="me-4">
          <li>HTML5</li>
          <li>CSS3</li>
          <li>Bootstrap</li>
          <li>Javascript</li>
          <li>jQuery</li>
          <li>MySQL</li>
          <li>MongoDB</li>
          <li>Mongoose</li>
          <li>Express.js</li>
          <li>Node.js</li>
          <li>React.js</li>
        </ul>
        <br />
        <a href={resume} download="Ida_Resume"><button className="btn btn-warning">Download My Resume</button></a>
      </div>
    </div>
  );
}
