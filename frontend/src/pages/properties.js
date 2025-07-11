import React from 'react';
import './properties.css';

const realProperties = [
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
  {
    id: 7,
    title: 'Tata Eureka Park - 2 BHK Smart Home',
    location: 'Sector 150, Noida',
    price: '₹75 Lakh',
    status: 'Under Construction',
    completionDate: 'Possession by Q4 2025',
    returns: 'ROI: 8.5%',
    image: 'https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?auto=format&fit=crop&w=800&q=80',
    link: 'https://www.tatarealty.in/eureka-park/'
  },
  {
    id: 8,
    title: 'Mahindra Happinest - 1 BHK Flat',
    location: 'Kalyan, Mumbai',
    price: '₹45 Lakh',
    status: 'Ready to move-in',
    completionDate: 'Completed in 2023',
    returns: 'Rental yield: 6% + capital gains 5%',
    image: 'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&w=800&q=80',
    link: 'https://www.mahindrahousing.com/happinest/'
  },
  {
    id: 9,
    title: 'Sobha City - 3 BHK Apartment',
    location: 'Dwarka Expressway, Gurugram',
    price: '₹1.8 Cr',
    status: 'Under Construction',
    completionDate: 'Expected by Dec 2026',
    returns: 'ROI: 10% annually',
    image: 'https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=800&q=80',
    link: 'https://www.sobhainternational.com/sobha-city/'
  },
  {
    id: 10,
    title: 'Ajnara Ambrosia - 2 BHK Flat',
    location: 'Sector 118, Noida',
    price: '₹68 Lakh',
    status: 'Ready to move-in',
    completionDate: 'Completed in 2020',
    returns: 'Rental yield: 5‑6%',
    image: 'https://images.unsplash.com/photo-1600607687644-aac4c3eac7f4?auto=format&fit=crop&w=800&q=80',
    link: 'https://www.ajnara.com/ajnara-ambrosia/'
  }
];

const Properties = () => (
  <div className="properties-page">
    <h2>Available Properties</h2>
    <div className="properties-grid">
      {realProperties.map((p) => (
        <a
          key={p.id}
          href={p.link}
          target="_blank"
          rel="noopener noreferrer"
          className="property-card"
        >
          <img src={p.image} alt={p.title} />
          <div className="property-info">
            <h3>{p.title}</h3>
            <p>{p.location}</p>
            <p>{p.price}</p>
            <p>Status: {p.status}</p>
            <p>Completion: {p.completionDate}</p>
            <p>{p.returns}</p>
          </div>
        </a>
      ))}
    </div>
  </div>
);

export default Properties;