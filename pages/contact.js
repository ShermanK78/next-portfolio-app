import React from 'react';
import Layout from '../components/MyLayout';

const Contact = () => {
  return (
    <div>
      {/* Include the Layout component to create a common layout structure */}
      <Layout>
        {/* Heading for the Contact Me page */}
        <h1>Contact Me</h1>

        {/* Mobile contact information */}
        <h3>Mobile</h3>
        <p>+27797022249</p>

        {/* Email contact information */}
        <h3>Email</h3>
        <p>sherman_kasaval@outlook.com</p>
      </Layout>
    </div>
  );
};

export default Contact;
