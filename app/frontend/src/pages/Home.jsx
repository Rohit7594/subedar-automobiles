import React from 'react';
import { Button } from '../components/ui/button';
import { Card } from '../components/ui/card';
import { Award, Users, CheckCircle, Heart, Phone, ArrowRight } from 'lucide-react';
import { services, whyChooseUs, contactInfo } from '../mockData';
import { useNavigate } from 'react-router-dom';

const iconMap = {
  Award: Award,
  Users: Users,
  CheckCircle: CheckCircle,
  Heart: Heart
};

export const Home = () => {
  const navigate = useNavigate();
  const [currentImageIndex, setCurrentImageIndex] = React.useState(0);

  const heroImages = [
    {
      url: 'https://customer-assets.emergentagent.com/job_fleetexperts/artifacts/vtdmwudi__backend_wp-content_uploads_2024_09_Defence-Range_Banner-Desktop-1440x620px.jpg',
      alt: 'Ashok Leyland Defence Range - Military fleet vehicles'
    },
    {
      url: 'https://customer-assets.emergentagent.com/job_fleetexperts/artifacts/4kzzi7y4__backend_wp-content_uploads_2024_02_02_5525-AU_Banner-Desktop-1440x620px.jpg',
      alt: 'Ashok Leyland heavy-duty truck in rugged terrain'
    },
    {
      url: 'https://customer-assets.emergentagent.com/job_fleetexperts/artifacts/ew0ejc11__backend_wp-content_uploads_2024_04_Super-Stallion-6x6-1.jpg',
      alt: 'Ashok Leyland Super Stallion 6x6 Defence Truck'
    },
    {
      url: 'https://customer-assets.emergentagent.com/job_fleetexperts/artifacts/ad8u9ihl__backend_wp-content_uploads_2024_02_1920-HU_HSD-2.jpg',
      alt: 'Ashok Leyland commercial truck on highway'
    },
    {
      url: 'https://customer-assets.emergentagent.com/job_fleetexperts/artifacts/ymhqi16l__backend_wp-content_uploads_2024_03_02_ATTV_Banner-Desktop-1440x620px.jpg',
      alt: 'Ashok Leyland All Terrain Tactical Vehicle (ATTV)'
    },
    {
      url: 'https://customer-assets.emergentagent.com/job_fleetexperts/artifacts/6o6f5hit__backend_wp-content_uploads_2024_09_backend_wp-content_uploads_2024_09_Bus_Range_Banner-Desktop-1440x620px-1.jpg',
      alt: 'Ashok Leyland bus range fleet'
    },
    {
      url: 'https://customer-assets.emergentagent.com/job_fleetexperts/artifacts/k9d5plum__backend_wp-content_uploads_2024_03_02_TFF-4x2_Banner-Desktop-1440x620px.jpg',
      alt: 'Ashok Leyland Tactical Fire Fighting Vehicle 4x2'
    },
    {
      url: 'https://customer-assets.emergentagent.com/job_fleetexperts/artifacts/hzsvxh2b__backend_wp-content_uploads_2025_06_ICV-range-updated-May-25_v2.jpg',
      alt: 'Ashok Leyland ICV range commercial vehicles'
    },
    {
      url: 'https://customer-assets.emergentagent.com/job_fleetexperts/artifacts/no84kcw1__backend_wp-content_uploads_2024_03_MPV-4x4-1.jpg',
      alt: 'Ashok Leyland Military Protected Vehicle 4x4'
    }
  ];

  React.useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % heroImages.length);
    }, 5000); // Change image every 5 seconds

    return () => clearInterval(interval);
  }, [heroImages.length]);

  return (
    <div className="home-page">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-background">
          {heroImages.map((image, index) => (
            <img 
              key={index}
              src={image.url} 
              alt={image.alt}
              className={`hero-image ${index === currentImageIndex ? 'active' : ''}`}
              style={{ opacity: index === currentImageIndex ? 1 : 0 }}
            />
          ))}
          <div className="hero-overlay"></div>
        </div>
        <div className="hero-content">
          <h1 className="hero-title">Certified Ashok Leyland Service You Can Trust</h1>
          <p className="body-large" style={{ maxWidth: '600px', marginBottom: '32px' }}>
            Expert maintenance, genuine parts, and reliable service for commercial vehicles.
          </p>
          <div className="hero-cta-group">
            <Button className="btn-primary" onClick={() => navigate('/booking')}>
              Book Service <ArrowRight className="ml-2" size={20} />
            </Button>
            <Button className="btn-secondary" onClick={() => window.location.href = `tel:${contactInfo.phone}`}>
              <Phone className="mr-2" size={20} /> Call Now
            </Button>
          </div>
          <div className="trust-badges">
            <div className="trust-badge">
              <CheckCircle size={24} className="text-brand-primary" />
              <span>Ashok Leyland Authorised</span>
            </div>
            <div className="trust-badge">
              <CheckCircle size={24} className="text-brand-primary" />
              <span>Genuine Spare Parts</span>
            </div>
          </div>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="intro-section">
        <div className="container">
          <div className="intro-content">
            <h2 className="heading-2">Your Trusted Partner for Commercial Vehicle Care</h2>
            <p className="body-medium">
              Subedar Automobiles is an official Ashok Leyland Authorised Service Centre located in Vadodara, Gujarat. 
              With years of expertise in commercial vehicle maintenance and repair, we provide comprehensive solutions 
              for truck owners, fleet operators, and logistics companies.
            </p>
            <p className="body-medium">
              Our state-of-the-art facility, certified technicians, and commitment to using only genuine Ashok Leyland 
              parts ensure your vehicles receive the highest quality service, minimizing downtime and maximizing reliability.
            </p>
          </div>
        </div>
      </section>

      {/* Services Preview Section */}
      <section className="services-preview-section">
        <div className="container">
          <div className="section-header">
            <h2 className="heading-2">Our Services</h2>
            <p className="body-medium">Comprehensive solutions for all your commercial vehicle needs</p>
          </div>
          <div className="services-grid">
            {services.slice(0, 6).map((service) => (
              <Card key={service.id} className="service-card">
                <div className="service-card-content">
                  <h3 className="heading-5">{service.title}</h3>
                  <p className="body-small">{service.description}</p>
                </div>
              </Card>
            ))}
          </div>
          <div className="text-center" style={{ marginTop: '48px' }}>
            <Button className="btn-primary" onClick={() => navigate('/services')}>
              View All Services <ArrowRight className="ml-2" size={20} />
            </Button>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="why-choose-section">
        <div className="container">
          <div className="section-header">
            <h2 className="heading-2">Why Choose Subedar Automobiles</h2>
            <p className="body-medium">Excellence in every aspect of commercial vehicle servicing</p>
          </div>
          <div className="features-grid">
            {whyChooseUs.map((feature) => {
              const IconComponent = iconMap[feature.icon];
              return (
                <div key={feature.id} className="feature-card">
                  <div className="feature-icon">
                    <IconComponent size={40} />
                  </div>
                  <h3 className="heading-5">{feature.title}</h3>
                  <p className="body-small">{feature.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <div className="container">
          <div className="cta-content">
            <h2 className="heading-2">Ready to Service Your Fleet?</h2>
            <p className="body-large">
              Get in touch with us today for expert service, genuine parts, and reliable maintenance solutions.
            </p>
            <div className="cta-buttons">
              <Button className="btn-primary" onClick={() => navigate('/booking')}>
                Book Service Now
              </Button>
              <Button className="btn-secondary" onClick={() => navigate('/contact')}>
                Contact Us
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};