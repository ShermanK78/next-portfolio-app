import React from 'react';
import Layout from '../components/MyLayout';
import Link from 'next/link';

const Projects = () => {
  return (
    <div>
      {/* Include the Layout component to create a common layout structure */}
      <Layout>
        {/* Heading for the Projects page */}
        <h1>My Projects</h1>

        {/* Links to various projects */}
        <Link href="https://redux-banking-app-00889bed2f6f.herokuapp.com/" passHref>
          <p>Go to Redux Banking App</p>
        </Link>
        <Link href="https://github.com/ShermanK78/redux-react-hangman-app" passHref>
          <p>Go to Hangman App</p>
        </Link>
        <Link href="https://github.com/ShermanK78/customEcommerceStore" passHref>
          <p>Go to Ecommerce Store</p>
        </Link>
      </Layout>
    </div>
  );
};

export default Projects;
