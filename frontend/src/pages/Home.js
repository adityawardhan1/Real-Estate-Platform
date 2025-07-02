import React from 'react';

const Home = () => {
  return (
    <div className="home">
      <section className="hero">
        <h1>Welcome to Real Estate Platform</h1>
        <p>Find your dream property with us</p>
      </section>
      
      <section className="featured-properties">
        <h2>Featured Properties</h2>
        <div className="properties-grid">
          {/* Property cards will be added here */}
        </div>
      </section>
    </div>
  );
};

export default Home; 