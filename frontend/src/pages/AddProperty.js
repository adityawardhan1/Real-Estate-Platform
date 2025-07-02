import React, { useState } from 'react';
import './AddProperty.css';

const AddProperty = () => {
  const [formData, setFormData] = useState({
    title: '',
    location: '',
    price: '',
    image: '',
    description: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('New Property:', formData);
    alert('Property added! (Not saved to DB yet)');
    setFormData({ title: '', location: '', price: '', image: '', description: '' });
  };

  return (
    <div className="add-property-page">
      <h2>Add New Property</h2>
      <form className="property-form" onSubmit={handleSubmit}>
        <input type="text" name="title" placeholder="Property Title" value={formData.title} onChange={handleChange} required />
        <input type="text" name="location" placeholder="Location" value={formData.location} onChange={handleChange} required />
        <input type="text" name="price" placeholder="Price" value={formData.price} onChange={handleChange} required />
        <input type="text" name="image" placeholder="Image URL" value={formData.image} onChange={handleChange} required />
        <textarea name="description" placeholder="Description" value={formData.description} onChange={handleChange} required />
        <button type="submit">Add Property</button>
      </form>
    </div>
  );
};

export default AddProperty;
