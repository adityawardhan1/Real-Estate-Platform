import React from 'react';
import './properties.css'; // CSS styling

const dummyProperties = [
  {
    id: 1,
    title: 'Luxury Villa in Goa',
    location: 'Goa',
    price: '₹1.2 Cr',
    image: 'https://images.unsplash.com/photo-1572120360610-d971b9b78837?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 2,
    title: '2 BHK Flat in Mumbai',
    location: 'Mumbai',
    price: '₹85 Lakh',
    image: 'https://images.unsplash.com/photo-1598460855116-4f3c52e38133?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 3,
    title: 'Farmhouse in Punjab',
    location: 'Ludhiana',
    price: '₹65 Lakh',
    image: 'https://images.unsplash.com/photo-1592743453234-fd76d5e8b3a6?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 4,
    title: 'Studio Apartment in Bangalore',
    location: 'Bangalore',
    price: '₹45 Lakh',
    image: 'https://images.unsplash.com/photo-1580587771525-78b9dba3b914?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 5,
    title: 'Modern Flat in Delhi',
    location: 'New Delhi',
    price: '₹95 Lakh',
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 6,
    title: 'Penthouse in Noida',
    location: 'Noida',
    price: '₹1.5 Cr',
    image: 'https://images.unsplash.com/photo-1596421250711-73b4ec8bcbd4?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 7,
    title: 'Duplex in Hyderabad',
    location: 'Hyderabad',
    price: '₹1.1 Cr',
    image: 'https://images.unsplash.com/photo-1600585153907-4e3a09fabe9d?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 8,
    title: 'Budget Flat in Pune',
    location: 'Pune',
    price: '₹35 Lakh',
    image: 'https://images.unsplash.com/photo-1600585154041-d8bded80b7a1?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 9,
    title: 'Cottage in Manali',
    location: 'Manali',
    price: '₹70 Lakh',
    image: 'https://images.unsplash.com/photo-1613977257592-4871e5fcd7b6?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 10,
    title: '3 BHK Flat in Jaipur',
    location: 'Jaipur',
    price: '₹60 Lakh',
    image: 'https://images.unsplash.com/photo-1560185127-6ecb7b43a7cc?auto=format&fit=crop&w=800&q=80',
  },
];

const Properties = () => {
  return (
    <div className="properties-page">
      <h2>Available Properties</h2>
      <div className="properties-grid">
        {dummyProperties.map((property) => (
          <div key={property.id} className="property-card">
            <img src={property.image} alt={property.title} />
            <h3>{property.title}</h3>
            <p>{property.location}</p>
            <p>{property.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Properties;
