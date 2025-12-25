import React, { useState } from 'react';
import { galleryImages } from '../mockData';

export const Gallery = () => {
  const [filter, setFilter] = useState('all');

  const filteredImages = filter === 'all' 
    ? galleryImages 
    : galleryImages.filter(img => img.category === filter);

  return (
    <div className="gallery-page">
      {/* Header Section */}
      <section className="page-header">
        <div className="container">
          <h1 className="heading-1">Our Facility</h1>
          <p className="body-large">
            Take a look at our professional service centre and team in action
          </p>
        </div>
      </section>

      {/* Filter Section */}
      <section className="gallery-filter-section">
        <div className="container">
          <div className="filter-buttons">
            <button 
              className={`filter-btn ${filter === 'all' ? 'active' : ''}`}
              onClick={() => setFilter('all')}
            >
              All
            </button>
            <button 
              className={`filter-btn ${filter === 'service' ? 'active' : ''}`}
              onClick={() => setFilter('service')}
            >
              Service Bays
            </button>
            <button 
              className={`filter-btn ${filter === 'team' ? 'active' : ''}`}
              onClick={() => setFilter('team')}
            >
              Our Team
            </button>
            <button 
              className={`filter-btn ${filter === 'vehicles' ? 'active' : ''}`}
              onClick={() => setFilter('vehicles')}
            >
              Vehicles
            </button>
            <button 
              className={`filter-btn ${filter === 'facility' ? 'active' : ''}`}
              onClick={() => setFilter('facility')}
            >
              Facility
            </button>
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="gallery-grid-section">
        <div className="container">
          <div className="gallery-grid">
            {filteredImages.map((image) => (
              <div key={image.id} className="gallery-item">
                <img src={image.url} alt={image.alt} />
                <div className="gallery-overlay">
                  <p className="body-small">{image.alt}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};