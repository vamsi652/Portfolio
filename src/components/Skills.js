import React from 'react';
import './Skills.css';

const Skills = () => {
  return (
    <section id="skills" className="skills-section">
      <div className="skills-content">
        <h2>Skills</h2>
        <div className="skills-list">
          <div className="skill-category">
            <h3>Programming Languages</h3>
            <p>C, C++, Java, Python, MySQL, JavaScript, HTML, CSS</p>
          </div>
          <div className="skill-category">
            <h3>Frameworks/Libraries</h3>
            <p>PyTorch, MERN Stack, Bootstrap</p>
          </div>
          <div className="skill-category">
            <h3>Interests</h3>
            <p>AI, Machine Learning, Deep Learning, Computer Vision, NLP</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
