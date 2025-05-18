import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    name: 'Sarah',
    role: 'IT Director',
    company: 'Innovate Tech Solutions',
    avatar: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=150',
    quote: 'SoftSell completely transformed how we manage our software assets. We were able to recover over $50,000 from unused licenses that were just sitting in our inventory. The process was fast and transparent.',
    stars: 5,
  },
  {
    id: 2,
    name: 'Mark',
    role: 'CTO',
    company: 'DataFlex Systems',
    avatar: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=150',
    quote: 'When our company downsized, we had dozens of expensive software licenses we no longer needed. SoftSell\'s valuation was 30% higher than competitors, and they completed the transaction in just two days.',
    stars: 5,
  },
  {
    id: 3,
    name: ' Sarah',
    role: 'Procurement Manager',
    company: 'Global Healthcare Inc.',
    avatar: 'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=150',
    quote: 'As a large organization, managing software licenses was always a challenge. SoftSell made it easy to both sell unused licenses and find pre-owned ones at great prices. Their compliance guarantee gives us peace of mind.',
    stars: 4,
  },
];

const Testimonials: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const nextTestimonial = () => {
    setActiveIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const activeTestimonial = testimonials[activeIndex];

  return (
    <section id="testimonials" className="section bg-secondary/50">
      <div className="container">
        <h2 className="section-title">What Our Clients Say</h2>
        
        <div className="max-w-4xl mx-auto fade-in">
          <div className="relative bg-card rounded-xl shadow-md p-8 md:p-10">
            <div className="flex flex-col items-center text-center">
              <img 
                src={activeTestimonial.avatar} 
                alt={activeTestimonial.name}
                className="w-20 h-20 object-cover rounded-full border-4 border-white shadow-sm"
              />
              
              <div className="mt-4 flex">
                {[...Array(5)].map((_, i) => (
                  <Star 
                    key={i}
                    size={20}
                    className={i < activeTestimonial.stars ? 'text-warning fill-warning' : 'text-gray-300'}
                  />
                ))}
              </div>
              
              <blockquote className="mt-6 text-lg italic text-foreground/90">
                "{activeTestimonial.quote}"
              </blockquote>
              
              <div className="mt-6">
                <div className="font-semibold text-lg">{activeTestimonial.name}</div>
                <div className="text-foreground/70">
                  {activeTestimonial.role}, {activeTestimonial.company}
                </div>
              </div>
            </div>
            
            {/* Navigation controls */}
            <div className="flex justify-between absolute -bottom-6 left-1/2 transform -translate-x-1/2 space-x-4">
              <button 
                onClick={prevTestimonial}
                className="p-3 rounded-full bg-background shadow-md hover:bg-secondary transition-colors border border-border"
                aria-label="Previous testimonial"
              >
                <ChevronLeft size={20} />
              </button>
              <button 
                onClick={nextTestimonial}
                className="p-3 rounded-full bg-background shadow-md hover:bg-secondary transition-colors border border-border"
                aria-label="Next testimonial"
              >
                <ChevronRight size={20} />
              </button>
            </div>
          </div>
          
          <div className="flex justify-center mt-10 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveIndex(index)}
                className={`w-3 h-3 rounded-full transition-colors ${
                  index === activeIndex ? 'bg-accent' : 'bg-border hover:bg-accent/50'
                }`}
                aria-label={`View testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;