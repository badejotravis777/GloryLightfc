// import React, { useState } from "react";
import { motion } from "framer-motion";
import '../components/Career.css';

const Career = () => {



  return (
    <motion.div 
      className="career-page"
      initial={{ opacity: 0, y: 50 }} 
      animate={{ opacity: 1, y: 0 }} 
      transition={{ duration: 1 }}
    >
      <header className="career-header">
        <h1>Join the Glory Light FC Team</h1>
        <p>Be part of a team that values growth, teamwork, and impact!</p>
      </header>

      <section className="why-work">
        <motion.h2 
          initial={{ opacity: 0, x: -50 }} 
          animate={{ opacity: 1, x: 0 }} 
          transition={{ duration: 1 }}
        >
          Why Work With Us?
        </motion.h2>
        <p>At Glory Light FC, we believe in excellence and community. Working with us means being part of a team that changes lives and inspires future generations.</p>
      </section>

      <section className="job-listings">
        <h2>Available Job Positions</h2>
        <div className="job-card">
          <h3>Marketing Manager</h3>
          <p>Location: Lagos, Nigeria</p>
          <p>Requirements: Degree in Marketing, 3+ years experience.</p>
          <button className="apply-btn" onClick={() => window.location.href = 'apply'}>Apply Now</button>
        </div>

        <div className="job-card">
          <h3>Fitness Trainer</h3>
          <p>Location: Lagos, Nigeria</p>
          <p>Requirements: Certification in fitness training, 2+ years experience.</p>
          <button className="apply-btn" onClick={() => window.location.href = 'apply'}>Apply Now</button>
        </div>
      </section>

         </motion.div>
  );
};

export default Career;
