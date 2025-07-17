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
            <p>Python, C++, Java, SQL</p>
          </div>
          <div className="skill-category">
            <h3>Machine Learning & Deep Learning</h3>
            <p>scikit-learn, PyTorch, CNNs, RNNs, Transfer Learning, YOLOv5</p>
          </div>
          <div className="skill-category">
            <h3>Computer Vision</h3>
            <p>OpenCV, MediaPipe, Image Processing, OCR</p>
          </div>
          <div className="skill-category">
            <h3>Tools</h3>
            <p>Git, NumPy, Pandas, Matplotlib</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
