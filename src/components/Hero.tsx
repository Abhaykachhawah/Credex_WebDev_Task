import React from 'react';
import { ArrowRight } from 'lucide-react';

interface HeroProps {
  isLoaded: boolean;
}

const Hero: React.FC<HeroProps> = ({ isLoaded }) => {
  return (
    <section className="pt-32 pb-16 md:pt-40 md:pb-24 relative overflow-hidden">
      <div className="absolute inset-0 z-0 bg-gradient-to-b from-primary/50 to-transparent dark:from-primary/10"></div>
      
      <div className="container relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <h1 
            className={`text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl mb-6 text-foreground ${
              isLoaded ? 'animate-fadeIn' : 'opacity-0'
            }`}
            style={{ animationDelay: '0.1s' }}
          >
            Unlock the Value of Your Software Licenses
          </h1>
          
          <p 
            className={`text-lg md:text-xl text-foreground/80 max-w-2xl mx-auto mb-8 leading-relaxed ${
              isLoaded ? 'animate-fadeIn' : 'opacity-0'
            }`}
            style={{ animationDelay: '0.3s' }}
          >
            SoftSell helps businesses buy and sell unused software licenses at the best prices. 
            Get instant valuations and maximize your return on unused software assets.
          </p>
          
          <div 
            className={`flex flex-col sm:flex-row gap-4 justify-center ${
              isLoaded ? 'animate-fadeIn' : 'opacity-0'
            }`}
            style={{ animationDelay: '0.5s' }}
          >
            <a href="#contact" className="btn-primary">
              Sell Your Licenses
              <ArrowRight className="ml-2 h-5 w-5" />
            </a>
            <a href="#how-it-works" className="btn-secondary">
              Learn How It Works
            </a>
          </div>
        </div>
      </div>
      
      <div className="absolute -bottom-16 -left-16 w-64 h-64 bg-accent/10 rounded-full filter blur-3xl"></div>
      <div className="absolute -top-16 -right-16 w-64 h-64 bg-primary-foreground/10 rounded-full filter blur-3xl"></div>
    </section>
  );
};

export default Hero;