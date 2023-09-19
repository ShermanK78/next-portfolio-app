import React from 'react';
import Layout from '../components/MyLayout';

const About = () => {
  return (
    <div>
      {/* Include the Layout component to create a common layout structure */}
      <Layout>
        {/* Heading for the About Me page */}
        <h1>About Me</h1>

        {/* Educational history section */}
        <h3>Education</h3>
        <p>SAIFM - South African Institute of Financial Markets</p>
        <p>Wealth Management - University of Stellenbosch</p>
        <p>Digital Marketing & Search Engine Optimization - Google</p>

        {/* Employment history section */}
        <h3>Employment History</h3>
        <p>Affinity Asset Management - Asset Management</p>
        <p>Alain Jacques Renard - Currency Hedging Firm</p>
        <p>GTE Online - Digital Marketing & Strategy Development</p>

        {/* Personal biography section */}
        <h3>Personal Biography</h3>
        <p>I have worked across numerous industries and sectors, with a passion for strategy and technology.</p>
      </Layout>
    </div>
  );
};

export default About;
