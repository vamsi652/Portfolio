import React from 'react';
import './Home.css';

const Home = () => {
  return (
    <section id="home" className="home-section">
      <div className="home-content">
        <h1>Vamsi Mohan Bangale</h1>
        <p>AI & ML Enthusiast | Problem Solver | Lifelong Learner</p>
        <a href="#about" className="btn">Learn More</a>
      </div>
    </section>
  );
};

export default Home;