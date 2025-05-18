import React from 'react';
import { Shield, Clock, Percent as Percentage, Globe } from 'lucide-react';

const features = [
  {
    id: 1,
    title: 'Secure & Compliant',
    description: 'All transactions are fully compliant with software licensing regulations. We ensure secure and legal transfers of ownership.',
    icon: Shield,
    delay: '0.1s',
  },
  {
    id: 2,
    title: 'Fast Process',
    description: 'Get valuations instantly and complete transactions within 48 hours. Our streamlined process saves you time and resources.',
    icon: Clock,
    delay: '0.3s',
  },
  {
    id: 3,
    title: 'Best Market Rates',
    description: 'Our extensive network of buyers ensures you get the highest possible value for your unused software licenses.',
    icon: Percentage,
    delay: '0.5s',
  },
  {
    id: 4,
    title: 'Global Marketplace',
    description: 'Access a worldwide network of verified buyers and sellers. Our platform connects you with opportunities across the globe.',
    icon: Globe,
    delay: '0.7s',
  },
];

const WhyChooseUs: React.FC = () => {
  return (
    <section id="why-choose-us" className="section">
      <div className="container">
        <h2 className="section-title">Why Choose SoftSell</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature) => (
            <div 
              key={feature.id}
              className="fade-in flex flex-col p-6 bg-card rounded-lg shadow-sm border border-border transition-all hover:border-accent/50 hover:shadow-md"
              style={{ animationDelay: feature.delay }}
            >
              <div className="mb-4">
                <feature.icon className="h-10 w-10 text-accent" />
              </div>
              
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              
              <p className="text-foreground/70">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;