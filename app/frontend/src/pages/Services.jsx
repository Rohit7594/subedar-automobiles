import React from 'react';
import { Card } from '../components/ui/card';
import { Wrench, Settings, Search, Package, Shield, Truck } from 'lucide-react';
import { services } from '../mockData';
import { Button } from '../components/ui/button';
import { useNavigate } from 'react-router-dom';

const iconMap = {
  Wrench: Wrench,
  Settings: Settings,
  Search: Search,
  Package: Package,
  Shield: Shield,
  Truck: Truck
};

export const Services = () => {
  const navigate = useNavigate();

  return (
    <div className="services-page">
      {/* Header Section */}
      <section className="page-header">
        <div className="container">
          <h1 className="heading-1">Our Services</h1>
          <p className="body-large">
            Comprehensive maintenance and repair solutions for your commercial fleet
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="services-detail-section">
        <div className="container">
          <div className="services-detail-grid">
            {services.map((service) => {
              const IconComponent = iconMap[service.icon];
              return (
                <Card key={service.id} className="service-detail-card">
                  <div className="service-icon-large">
                    <IconComponent size={56} />
                  </div>
                  <h3 className="heading-4">{service.title}</h3>
                  <p className="body-medium">{service.description}</p>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Additional Services Info */}
      <section className="services-info-section">
        <div className="container">
          <Card className="services-info-card">
            <h2 className="heading-3">Why Choose Our Services</h2>
            <div className="services-benefits">
              <div className="benefit-item">
                <h4 className="heading-5">Manufacturer-Approved Procedures</h4>
                <p className="body-medium">
                  All repairs and maintenance follow Ashok Leyland's recommended procedures and specifications, 
                  ensuring optimal performance and maintaining warranty coverage.
                </p>
              </div>
              <div className="benefit-item">
                <h4 className="heading-5">Genuine Parts Guarantee</h4>
                <p className="body-medium">
                  We exclusively use authentic Ashok Leyland spare parts. Genuine parts ensure proper fit, 
                  durability, and reliability, preventing premature failures and costly repeat repairs.
                </p>
              </div>
              <div className="benefit-item">
                <h4 className="heading-5">Expert Diagnostics</h4>
                <p className="body-medium">
                  Our advanced diagnostic equipment can quickly identify issues, saving time and ensuring 
                  accurate repairs. This technology-driven approach minimizes guesswork and prevents unnecessary part replacements.
                </p>
              </div>
              <div className="benefit-item">
                <h4 className="heading-5">Flexible Service Packages</h4>
                <p className="body-medium">
                  From single-vehicle repairs to comprehensive fleet maintenance contracts, we offer flexible 
                  service options tailored to your business needs and budget.
                </p>
              </div>
            </div>
          </Card>
        </div>
      </section>

      {/* CTA Section */}
      <section className="services-cta-section">
        <div className="container">
          <div className="cta-content">
            <h2 className="heading-2">Schedule Your Service Today</h2>
            <p className="body-large">
              Keep your commercial vehicles running smoothly with expert maintenance and genuine parts.
            </p>
            <Button className="btn-primary" onClick={() => navigate('/booking')}>
              Book Service Now
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};