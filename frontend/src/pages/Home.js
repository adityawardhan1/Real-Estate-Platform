import React from 'react';
import './Home.css'; // optional CSS if you want custom styles

const featuredProperties = [
  {
    id: 1,
    title: 'DLF The Crest - 4 BHK Apartment',
    location: 'DLF Phase 5, Gurugram',
    price: '₹4.2 Cr',
    status: 'Ready to move-in',
    completionDate: 'Completed in 2022',
    returns: 'Expected ROI: 7‑9% annually',
    image: 'https://images.unsplash.com/photo-1613977257363-707ba9348227?auto=format&fit=crop&w=800&q=80', 
    link: 'https://www.dlfhomes.co.in/dlf-crest/'
  },
  {
    id: 2,
    title: 'Lodha Bella Vita - 2/3 BHK Flat',
    location: 'NIBM Road, Pune',
    price: '₹89 Lakh',
    status: 'Under Construction',
    completionDate: 'Expected by Dec 2025',
    returns: 'Expected ROI: 10% post‑completion',
    image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=800&q=80',
    link: 'https://www.lodhagroup.in/pune/lodha-bella-vita/'
  },
  {
    id: 3,
    title: 'Godrej Woods - Studio Apartment',
    location: 'Sector 43, Noida',
    price: '₹65 Lakh',
    status: 'Under Construction',
    completionDate: 'Expected by June 2026',
    returns: 'ROI: ~12% annually',
    image: 'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&w=800&q=80',
    link: 'https://www.godrejproperties.com/'
  },
  {
    id: 4,
    title: 'Prestige Falcon City - 3 BHK Flat',
    location: 'Kanakapura Road, Bangalore',
    price: '₹1.1 Cr',
    status: 'Ready to move-in',
    completionDate: 'Completed in 2021',
    returns: 'ROI: 6‑7%',
    image: 'https://images.unsplash.com/photo-1580587771525-78b9dba3b914?auto=format&fit=crop&w=800&q=80',
    link: 'https://www.prestigeconstructions.com/falconcity/'
  },
  {
    id: 5,
    title: 'Runwal Bliss - 2 BHK Flat',
    location: 'Kanjurmarg East, Mumbai',
    price: '₹1.3 Cr',
    status: 'Under Construction',
    completionDate: 'Expected by Mar 2026',
    returns: 'ROI: ~11%',
    image: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=800&q=80',
    link: 'https://runwal.com/r-build/'
  },
  {
    id: 6,
    title: 'Emaar Palm Heights - 3 BHK Flat',
    location: 'Sector 77, Gurugram',
    price: '₹1.5 Cr',
    status: 'Under Construction',
    completionDate: 'Expected by Jan 2025',
    returns: 'ROI: 9‑10%',
    image: 'https://images.unsplash.com/photo-1570129477492-45c003edd2be?auto=format&fit=crop&w=800&q=80',
    link: 'https://www.emaarindia.com/palm-heights/'
  },
];

const Home = () => {
  return (
    <div className="home">
  <section className="hero">
    <div className="hero-content">
      <h1>Welcome to Real Estate Platform</h1>
      <p>Find your dream property with us</p>
      <button className="cta-button">Explore Properties</button>
    </div>
  </section>
  
 

      
      <section className="featured-properties">
        <h2>Featured Properties</h2>
        <div className="properties-grid">
          {featuredProperties.map((property, index) => (
            <div className="property-card" key={index}>
              <img src={property.image} alt={property.name} className="property-image" />
              <div className="property-info">
                <h3>{property.name}</h3>
                <p>{property.location}</p>
                <p className="price">{property.price}</p>
                <span className="status">{property.status}</span>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Home;
