import React from 'react';
import './Projects.css';

const Projects = () => {
  return (
    <section id="projects" className="projects-section">
      <div className="projects-content">
        <h2>Projects</h2>
        <div className="projects-list">
          <div className="project-item">
            <h3>Customer Churn Prediction</h3>
            <p>Python, Random Forests, Pandas, Scikit-Learn</p>
            <p>• Built a customer churn prediction model using Python and Random Forests to analyze and predict attrition.</p>
            <p>• Conducted EDA and data preprocessing, including feature encoding and class balancing, for improved model
            performance with accuracy about 78%.</p>
            <p>• Utilized tools like pandas, Seaborn, and Scikit-Learn to generate actionable insights for retention strategies.</p>
            <a href="https://colab.research.google.com/drive/1j_dW-PYpxgIPI2xo17AKGgxx0SUb7Txi?usp=sharing" target="_blank" rel="noopener noreferrer">View Project</a>
          </div>
          <div className="project-item">
            <h3>Online Payment Fraud Detection</h3>
            <p>Python, Random Forest, Matplotlib</p>
            <p>• Implemented Random Forest classifier with 98% accuracy for fraud detection using Kaggle dataset.</p>
            <p>• Implemented real-time visualization with Matplotlib.</p>
            <a href="https://www.kaggle.com/code/vamsimohanbangale/onlinepaymentfrauddetection" target="_blank" rel="noopener noreferrer">View Project</a>
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