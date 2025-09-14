import { useEffect, useState } from 'react';
import Button from './Button';
import AnimatedSection from './AnimatedSection';
// Add your logo imports here
// import leftLogo from 'C:/Users/vyoma/Desktop/VScode/IEEE WIE WEBSITE MAIN/wie-sparkle-web/src/assets/cropped_circle_image.png' // Update path as needed

const HeroSection = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const handleJoinCommunity = () => {
    const contactSection = document.querySelector('#contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen relative flex items-center justify-center overflow-hidden">
      {/* Background Elements */}

       {/* Logo containers */}
    {/* <div className="absolute top-5 left-4 z-20">
        <img 
          src={leftLogo} 
          alt="Left Logo" 
          className="w-9 h-auto" // Increased size for better visibility
        />
      </div> */}

      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-glass/20" />
      
      {/* Animated background orbs */}
      <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary/10 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-accent/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }} />

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center max-w-4xl mx-auto">
          <AnimatedSection animationType="fade-up">
            <h1 className={`text-5xl md:text-7xl lg:text-8xl font-light tracking-tighter leading-tight mb-6 transition-all duration-1000 ${
              isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}>
              <span className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent animate-glow">
                Women in Engineering
              </span>
              <br />
              <span className="text-foreground/90">Affinity Group</span>
            </h1>
          </AnimatedSection>

          <AnimatedSection animationType="fade-up">
            <p className={`text-xl md:text-2xl text-foreground/70 font-light leading-relaxed mb-12 max-w-2xl mx-auto transition-all duration-1000 delay-300 ${
              isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}>
              Join us in our mission to foster creativity, leadership and excellence
            </p>
          </AnimatedSection>

          <AnimatedSection animationType="scale-in">
            <div className={`transition-all duration-1000 delay-600 ${
              isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}>
              <Button
                variant="neomorphic"
                size="lg"
                onClick={handleJoinCommunity}
                className="text-lg font-medium hover:animate-pulse"
              >
                Join our Community
              </Button>
            </div>
          </AnimatedSection>
        </div>
      </div>

      {/* Floating particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-primary/30 rounded-full animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${2 + Math.random() * 2}s`
            }}
          />
        ))}
      </div>
    </section>
  );
};

export default HeroSection;