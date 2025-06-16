import React from 'react';
import './Projects.css';

const Projects = () => {
  return (
    <section id="projects" className="projects-section">
      <div className="projects-content">
        <h2>Projects</h2>
        <div className="projects-list">
          <div className="project-item">
            <h3>AI-Powered Health Analysis</h3>
            <p>Python, Random Forest, LSTM, KMeans</p>
            <p>• Built a backend system to analyze 60 days of health data using ML models (Random Forest, LSTM, KMeans).</p>
            <p>• Achieved 85%+ accuracy in classifying daily health status and predicting health trends.</p>
            <p>• Automated generation of daily health summaries with AI insights, exporting to CSV for user reports.</p>
            <a href="https://www.kaggle.com/code/vamsimohanbangale/healthcare" target="_blank" rel="noopener noreferrer">View Project</a>
          </div>
          <div className="project-item">
            <h3>Secure Traffic AI</h3>
            <p>Python, YOLOv5, OpenCV, PyTorch</p>
            <p>• Built a real-time traffic violation detection system using YOLOv5 and custom CNNs to identify helmetless riders and
extract number plates with 90%+ accuracy.</p>
            <p>• Processed video streams using OpenCV and PyTorch, integrating object detection with image classification for
actionable enforcement alerts.</p>
            <p>• Automated violation logging with OCR and real-time alerting, enabling scalable, efficient monitoring for smart
traffic management systems.</p>
            <a href="https://github.com/vamsi652/Helmet-and-number-plate-detection" target="_blank" rel="noopener noreferrer">View Project</a>
          </div>
          <div className="project-item">
            <h3>Online Proctoring System</h3>
            <p>Python, OpenCV</p>
            <p>• Developed a system using Python, OpenCV, MediaPipe, and sounddevice for audio and head pose detection.</p>
            <p>• Implemented real-time visualization with Matplotlib and created a user interface using Tkinter.</p>
            <p>• Utilized Python threading for concurrent execution, with signal handling and logging for robust management.</p>
            <a href="https://github.com/vamsi652/online_proctoring" target="_blank" rel="noopener noreferrer">View Project</a>
          </div>
          <div className="project-item">
            <h3>Blockchain-based Supply Chain Management</h3>
            <p>MERN Stack, Solidity, Smart Contracts</p>
            <p>• Developed a web application using MERN Stack, providing a secure, transparent supply chain management system.</p>
            <p>• Implemented smart contracts with Solidity to manage logistics and supply chain operations, ensuring immutability and transparency.</p>
            <p>• Implemented smart contracts with Solidity to manage logistics and supply chain operations, ensuring immutability and transparency.</p>
            <a href="https://github.com/vamsi652/ASC-SCM" target="_blank" rel="noopener noreferrer">View Project</a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
