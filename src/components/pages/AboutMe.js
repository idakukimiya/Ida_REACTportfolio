import React from 'react';
import profileImage from '../image/profilepic.jpg'

export default function AboutMe() {
  return (
    <div>
      <h1>About Me</h1>
      <div>
      <div className="d-flex justify-content-center">
        <img alt="Ida at the beach" src={profileImage} ></img>
      </div>
      <p>
      Kon'nichiwa, my name is Ida Kukimiya, I am an aspiring fullstack web developer, currently attending the UPENN LPS Coding Bootcamp. Once I am in the industry, my future development is to contiune my education in Computer Science. I am interested in one day developing my own game or get into cyber security.
      </p>
      </div>
    </div>
  );
}
