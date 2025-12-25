import React from 'react';
import { Card } from '../components/ui/card';
import { Star } from 'lucide-react';
import { testimonials } from '../mockData';
import { Button } from '../components/ui/button';
import { useNavigate } from 'react-router-dom';

export const Testimonials = () => {
  const navigate = useNavigate();

  return (
    <div className="testimonials-page">
      {/* Header Section */}
      <section className="page-header">
        <div className="container">
          <h1 className="heading-1">Customer Testimonials</h1>
          <p className="body-large">
            Hear what our clients say about our service quality and professionalism
          </p>
        </div>
      </section>

      {/* Testimonials Grid */}
      <section className="testimonials-section">
        <div className="container">
          <div className="testimonials-grid">
            {testimonials.map((testimonial) => (
              <Card key={testimonial.id} className="testimonial-card">
                <div className="rating">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} size={20} fill="#FFC107" stroke="#FFC107" />
                  ))}
                </div>
                <p className="body-medium testimonial-comment">"{testimonial.comment}"</p>
                <div className="testimonial-author">
                  <p className="heading-6">{testimonial.name}</p>
                  <p className="caption">{testimonial.company}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="testimonials-cta-section">
        <div className="container">
          <Card className="cta-card">
            <h2 className="heading-3">Join Our Satisfied Customers</h2>
            <p className="body-large">
              Experience the same quality service and professionalism that our clients trust.
            </p>
            <Button className="btn-primary" onClick={() => navigate('/booking')}>
              Book Your Service Today
            </Button>
          </Card>
        </div>
      </section>
    </div>
  );
};