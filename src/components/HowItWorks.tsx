import React from 'react';
import { Upload, DollarSign, CreditCard } from 'lucide-react';

const steps = [
  {
    id: 1,
    title: 'Upload Your Licenses',
    description: 'Submit details about your software licenses through our secure system. We support major vendors including Microsoft, Adobe, and more.',
    icon: Upload,
    delay: '0.1s',
  },
  {
    id: 2,
    title: 'Get a Valuation',
    description: 'Receive an instant valuation based on current market rates and demand. We use proprietary algorithms to ensure you get the best price.',
    icon: DollarSign,
    delay: '0.3s',
  },
  {
    id: 3,
    title: 'Get Paid Quickly',
    description: 'Accept our offer and get paid within 48 hours. We handle all the compliance and transfer details so you don\'t have to worry.',
    icon: CreditCard,
    delay: '0.5s',
  },
];

const HowItWorks: React.FC = () => {
  return (
    <section id="how-it-works" className="section bg-secondary/50">
      <div className="container">
        <h2 className="section-title">How It Works</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {steps.map((step) => (
            <div 
              key={step.id}
              className="fade-in flex flex-col items-center text-center p-6 bg-card rounded-lg shadow-sm border border-border transition-all hover:shadow-md"
              style={{ animationDelay: step.delay }}
            >
              <div className="w-16 h-16 flex items-center justify-center rounded-full bg-primary mb-4">
                <step.icon className="h-8 w-8 text-primary-foreground" />
              </div>
              
              <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
              
              <p className="text-foreground/70">{step.description}</p>
              
              <div className="mt-auto pt-4">
                <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-accent text-white font-medium">
                  {step.id}
                </span>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-12 text-center fade-in">
          <a href="#contact" className="btn-primary">
            Start Now
          </a>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;