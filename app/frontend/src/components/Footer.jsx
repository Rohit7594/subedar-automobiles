import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Facebook, Instagram, Twitter } from 'lucide-react';
import { contactInfo, services } from '../mockData';

export const Footer = () => {
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer-content">
          {/* Company Info */}
          <div className="footer-column">
            <h3 className="footer-heading">{contactInfo.businessName}</h3>
            <p className="body-small">{contactInfo.tagline}</p>
            <p className="body-small" style={{ marginTop: '16px' }}>
              Your trusted partner for commercial vehicle maintenance and repair in Vadodara, Gujarat.
            </p>
            <div className="social-links">
              <a href="#" className="social-link" aria-label="Facebook">
                <Facebook size={20} />
              </a>
              <a href="#" className="social-link" aria-label="Instagram">
                <Instagram size={20} />
              </a>
              <a href="#" className="social-link" aria-label="Twitter">
                <Twitter size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="footer-column">
            <h3 className="footer-heading">Quick Links</h3>
            <ul className="footer-links">
              <li><Link to="/" className="footer-link">Home</Link></li>
              <li><Link to="/about" className="footer-link">About Us</Link></li>
              <li><Link to="/services" className="footer-link">Services</Link></li>
              <li><Link to="/gallery" className="footer-link">Gallery</Link></li>
              <li><Link to="/testimonials" className="footer-link">Testimonials</Link></li>
              <li><Link to="/contact" className="footer-link">Contact</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div className="footer-column">
            <h3 className="footer-heading">Our Services</h3>
            <ul className="footer-links">
              {services.slice(0, 4).map((service) => (
                <li key={service.id}>
                  <Link to="/services" className="footer-link">{service.title}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="footer-column">
            <h3 className="footer-heading">Contact Us</h3>
            <div className="footer-contact">
              <div className="footer-contact-item">
                <Phone size={16} />
                <a href={`tel:${contactInfo.phone}`} className="footer-link">{contactInfo.phone}</a>
              </div>
              <div className="footer-contact-item">
                <Mail size={16} />
                <a href={`mailto:${contactInfo.email}`} className="footer-link">{contactInfo.email}</a>
              </div>
              <div className="footer-contact-item">
                <MapPin size={16} />
                <p className="body-small">{contactInfo.address}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="footer-bottom">
          <p className="body-small">
            © {new Date().getFullYear()} {contactInfo.businessName}. All rights reserved.
          </p>
          <p className="body-small">
            Ashok Leyland Authorised Service Centre | Vadodara, Gujarat
          </p>
        </div>
      </div>
    </footer>
  );
};