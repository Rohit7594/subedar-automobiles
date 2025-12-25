import React from 'react';
import { Card } from '../components/ui/card';
import { Button } from '../components/ui/button';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';
import { contactInfo } from '../mockData';

export const Contact = () => {
  return (
    <div className="contact-page">
      {/* Header Section */}
      <section className="page-header">
        <div className="container">
          <h1 className="heading-1">Contact Us</h1>
          <p className="body-large">
            Get in touch with us for any queries or service needs
          </p>
        </div>
      </section>

      {/* Contact Content */}
      <section className="contact-content-section">
        <div className="container">
          <div className="contact-layout-centered">
            {/* Contact Information */}
            <Card className="contact-info-card-large">
              <h2 className="heading-3 text-center mb-6">Get In Touch</h2>
              <p className="body-large text-center mb-8">
                We're here to help with all your commercial vehicle service needs. Reach out to us through any of the following channels.
              </p>

              <div className="contact-details-grid">
                <Card className="contact-item-card">
                  <Phone size={32} className="text-brand-primary mb-3" />
                  <p className="heading-5 mb-2">Phone</p>
                  <a href={`tel:${contactInfo.phone}`} className="link-text text-lg">{contactInfo.phone}</a>
                  <Button asChild className="btn-primary mt-4 w-full">
                    <a href={`tel:${contactInfo.phone}`}>
                      <Phone className="mr-2" size={18} />
                      Call Now
                    </a>
                  </Button>
                </Card>

                <Card className="contact-item-card">
                  <Mail size={32} className="text-brand-primary mb-3" />
                  <p className="heading-5 mb-2">Email</p>
                  <a href={`mailto:${contactInfo.email}`} className="link-text text-lg">{contactInfo.email}</a>
                  <Button asChild className="btn-outline mt-4 w-full">
                    <a href={`mailto:${contactInfo.email}`}>
                      <Mail className="mr-2" size={18} />
                      Send Email
                    </a>
                  </Button>
                </Card>

                <Card className="contact-item-card">
                  <MapPin size={32} className="text-brand-primary mb-3" />
                  <p className="heading-5 mb-2">Address</p>
                  <p className="body-medium mb-2">{contactInfo.address}</p>
                  <Button asChild className="btn-outline mt-4 w-full">
                    <a
                      href={contactInfo.mapUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <MapPin className="mr-2" size={18} />
                      View on Map
                    </a>
                  </Button>
                </Card>

                <Card className="contact-item-card">
                  <Clock size={32} className="text-brand-primary mb-3" />
                  <p className="heading-5 mb-2">Service Hours</p>
                  <p className="body-medium">{contactInfo.hours}</p>
                  <p className="body-small text-neutral-600 mt-2">Visit us during business hours</p>
                </Card>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="map-section">
        <div className="container">
          <h2 className="heading-3">Visit Our Service Centre</h2>
          <div className="map-container">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3690.8876134507987!2d73.28576647592488!3d22.342426379644845!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395fc926c21ef7e7%3A0x8c1d9c2e7c8f8b9a!2sSubedar%20Automobiles%20Ashok%20Leyland%20Authorised%20Service%20Centre!5e0!3m2!1sen!2sin!4v1234567890123!5m2!1sen!2sin"
              width="100%"
              height="450"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Subedar Automobiles Location"
            ></iframe>
          </div>
        </div>
      </section>
    </div>
  );
};