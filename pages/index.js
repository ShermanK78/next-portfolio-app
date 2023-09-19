import React from 'react';
import Layout from '../components/MyLayout';

const Index = () => {
  return (
    <div>
      {/* Use the Layout component for consistent page layout */}
      <Layout>
        {/* Page title */}
        <h1>Web Developer Portfolio</h1>
        
        {/* Image with alternative text */}
        <img src="/static/webDevImage.jpg" alt="my image" />
      </Layout>
    </div>
  );
};

export default Index;
