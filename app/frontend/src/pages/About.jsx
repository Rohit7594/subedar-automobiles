import React from 'react';
import { Card } from '../components/ui/card';
import { Award, Shield, Users, Wrench } from 'lucide-react';
import { contactInfo } from '../mockData';

export const About = () => {
  return (
    <div className="about-page">
      {/* Header Section */}
      <section className="page-header">
        <div className="container">
          <h1 className="heading-1">About Subedar Automobiles</h1>
          <p className="body-large">Your trusted Ashok Leyland authorized service partner in Vadodara</p>
        </div>
      </section>

      {/* Main Content */}
      <section className="about-content-section">
        <div className="container">
          <div className="about-intro">
            <h2 className="heading-3">Excellence in Commercial Vehicle Servicing</h2>
            <p className="body-medium">
              Subedar Automobiles is a premier Ashok Leyland Authorised Service Centre located in Vadodara, Gujarat. 
              We specialize in providing comprehensive maintenance, repair, and diagnostic services for commercial 
              vehicles, with a particular focus on Ashok Leyland trucks and heavy-duty vehicles.
            </p>
            <p className="body-medium">
              Our commitment to quality, reliability, and customer satisfaction has made us the preferred choice for 
              fleet operators, logistics companies, and individual truck owners across Gujarat. With state-of-the-art 
              facilities and a team of highly trained technicians, we ensure your vehicles receive the best care possible.
            </p>
          </div>

          {/* Authorization Section */}
          <Card className="authorization-card">
            <div className="auth-content">
              <Award size={64} className="text-brand-primary" />
              <div>
                <h3 className="heading-4">Official Ashok Leyland Authorization</h3>
                <p className="body-medium">
                  As an officially authorized service centre, we have direct access to Ashok Leyland's technical 
                  expertise, genuine spare parts, and manufacturer-approved service procedures. This authorization 
                  ensures that your vehicles are serviced to the highest standards, maintaining warranty coverage 
                  and optimal performance.
                </p>
              </div>
            </div>
          </Card>

          {/* Our Strengths */}
          <div className="strengths-section">
            <h2 className="heading-3">Our Core Strengths</h2>
            <div className="strengths-grid">
              <Card className="strength-card">
                <Users size={48} className="text-brand-primary" />
                <h3 className="heading-5">Experienced Team</h3>
                <p className="body-small">
                  Our technicians are certified by Ashok Leyland and have extensive experience in diagnosing and 
                  repairing commercial vehicles. Regular training ensures they stay updated with the latest 
                  technologies and repair techniques.
                </p>
              </Card>

              <Card className="strength-card">
                <Shield size={48} className="text-brand-primary" />
                <h3 className="heading-5">Quality Assurance</h3>
                <p className="body-small">
                  We use only genuine Ashok Leyland spare parts and follow manufacturer-approved procedures for 
                  all repairs. This commitment to quality ensures long-lasting results and maintains your vehicle's 
                  warranty coverage.
                </p>
              </Card>

              <Card className="strength-card">
                <Wrench size={48} className="text-brand-primary" />
                <h3 className="heading-5">Advanced Equipment</h3>
                <p className="body-small">
                  Our facility is equipped with modern diagnostic tools, specialized equipment, and well-maintained 
                  service bays. This infrastructure enables us to handle everything from routine maintenance to 
                  complex repairs efficiently.
                </p>
              </Card>
            </div>
          </div>

          {/* Commitment Section */}
          <div className="commitment-section">
            <h2 className="heading-3">Our Commitment to You</h2>
            <div className="commitment-content">
              <p className="body-medium">
                At Subedar Automobiles, we understand that commercial vehicles are critical to your business operations. 
                Every hour of downtime translates to lost revenue and delayed deliveries. That's why we prioritize:
              </p>
              <ul className="commitment-list">
                <li className="body-medium"><strong>Timely Service:</strong> Quick turnaround times without compromising quality</li>
                <li className="body-medium"><strong>Transparent Pricing:</strong> Clear estimates and honest recommendations</li>
                <li className="body-medium"><strong>Preventive Care:</strong> Proactive maintenance to prevent costly breakdowns</li>
                <li className="body-medium"><strong>Customer Support:</strong> Dedicated assistance and ongoing service guidance</li>
                <li className="body-medium"><strong>Safety First:</strong> Thorough inspections to ensure vehicle and road safety</li>
              </ul>
            </div>
          </div>

          {/* Location & Facility */}
          <div className="facility-section">
            <h2 className="heading-3">Our Facility</h2>
            <p className="body-medium">
              Located in Ranoli, Vadodara, our service centre is easily accessible for commercial vehicle operators 
              throughout Gujarat. The facility features multiple service bays, a well-stocked parts inventory, and 
              a comfortable waiting area for customers.
            </p>
            <Card className="location-card">
              <div className="location-details">
                <h4 className="heading-5">{contactInfo.businessName}</h4>
                <p className="body-small">{contactInfo.tagline}</p>
                <p className="body-small" style={{ marginTop: '16px' }}>{contactInfo.address}</p>
                <p className="body-small" style={{ marginTop: '8px' }}>Phone: {contactInfo.phone}</p>
              </div>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
};