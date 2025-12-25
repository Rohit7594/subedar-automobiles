import React from 'react';
import { Card } from '../components/ui/card';
import { Button } from '../components/ui/button';
import { Phone, Clock, MapPin, Calendar } from 'lucide-react';

export const Booking = () => {
  return (
    <div className="booking-page">
      {/* Header Section */}
      <section className="page-header">
        <div className="container">
          <h1 className="heading-1">Book Your Service</h1>
          <p className="body-large">
            Schedule a service appointment for your commercial vehicle
          </p>
        </div>
      </section>

      {/* Booking Information Section */}
      <section className="booking-form-section">
        <div className="container">
          <div className="booking-layout">
            <div className="booking-form-container">
              <Card className="booking-card">
                <div className="booking-cta">
                  <Calendar size={64} className="text-brand-primary mb-4" />
                  <h2 className="heading-3">Ready to Book?</h2>
                  <p className="body-large mb-6">
                    Call us directly to schedule your service appointment. Our team is ready to assist you with all your commercial vehicle needs.
                  </p>
                  <Button asChild className="btn-primary btn-large">
                    <a href="tel:08320937948">
                      <Phone className="mr-2" size={20} />
                      Call to Book: 083209 37948
                    </a>
                  </Button>
                </div>
              </Card>

              <Card className="booking-info-card mt-6">
                <h3 className="heading-4">How to Book</h3>
                <ol className="booking-steps">
                  <li className="body-medium">Call us at 083209 37948</li>
                  <li className="body-medium">Provide your vehicle details and preferred date</li>
                  <li className="body-medium">Receive confirmation and service estimate</li>
                  <li className="body-medium">Bring your vehicle at the scheduled time</li>
                </ol>
              </Card>
            </div>

            <div className="booking-info">
              <Card className="info-card">
                <h3 className="heading-4">Service Hours</h3>
                <div className="flex items-center gap-2 mt-2">
                  <Clock size={20} className="text-brand-primary" />
                  <div>
                    <p className="body-medium">Monday - Saturday: 9:00 AM - 7:00 PM</p>
                    <p className="body-medium">Sunday: Closed</p>
                  </div>
                </div>
              </Card>

              <Card className="info-card">
                <h3 className="heading-4">Quick Contact</h3>
                <div className="flex items-center gap-2 mt-2">
                  <Phone size={20} className="text-brand-primary" />
                  <div>
                    <p className="body-medium">For urgent service needs, call us directly:</p>
                    <a href="tel:08320937948" className="contact-phone">083209 37948</a>
                  </div>
                </div>
              </Card>

              <Card className="info-card">
                <h3 className="heading-4">Our Location</h3>
                <div className="flex items-center gap-2 mt-2">
                  <MapPin size={20} className="text-brand-primary" />
                  <div>
                    <p className="body-small">Subedar Automobiles</p>
                    <p className="body-small">Ashok Leyland Authorised Service Centre</p>
                    <p className="body-small">Vadodara, Gujarat</p>
                  </div>
                </div>
              </Card>

              <Card className="info-card">
                <h3 className="heading-4">What to Expect</h3>
                <ul className="info-list">
                  <li className="body-small">Confirmation call within 24 hours</li>
                  <li className="body-small">Detailed service estimate</li>
                  <li className="body-small">Scheduled appointment time</li>
                  <li className="body-small">Professional service experience</li>
                </ul>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};