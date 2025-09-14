import { useState } from 'react';
import AnimatedSection from './AnimatedSection';
import facultyImage from 'C:/Users/vyoma/Desktop/VScode/IEEE WIE WEBSITE MAIN/wie-sparkle-web/images/wie website event pics/DurgaMam.jpg';

const FacultySection = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <section id="faculty" className="py-24 relative">
      <div className="container mx-auto px-6">
        <AnimatedSection>
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-light tracking-tighter mb-4">
              <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                Faculty Advisor
              </span>
            </h2>
            <p className="text-foreground/70 text-lg font-light max-w-2xl mx-auto">
              Meet our dedicated faculty advisor who guides and supports our mission
            </p>
          </div>
        </AnimatedSection>

        <AnimatedSection animationType="scale-in">
          <div className="flex justify-center">
            <div 
              className="relative group cursor-pointer max-w-sm"
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            >
              <div className="glass-card rounded-2xl overflow-hidden transition-all duration-500 group-hover:scale-105 group-hover:shadow-2xl group-hover:shadow-primary/20">
                <div className="relative overflow-hidden">
                  <img
                    src={facultyImage}
                    alt="Faculty Advisor"
                    className="w-full h-80 object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  
                  {/* Overlay that appears on hover */}
                  <div className={`absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent transition-opacity duration-500 ${
                    isHovered ? 'opacity-100' : 'opacity-0'
                  }`}>
                    <div className="absolute bottom-0 left-0 right-0 p-6 text-center">
                      <h3 className="text-2xl font-medium text-foreground mb-2 tracking-tight">
                        Durga Bhavani
                      </h3>
                      <p className="text-primary font-medium mb-3">Faculty Advisor</p>
                      <div className="text-foreground/80 text-sm font-light leading-relaxed">
                        <p>Mrs. Durga Bhavani Adla is an Assistant Professor in CSE and IEEE Region-10 Brand Ambassador, with research interests in Image Processing and Computer Vision.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Glow effect */}
              <div className={`absolute inset-0 rounded-2xl transition-opacity duration-500 pointer-events-none ${
                isHovered ? 'opacity-100' : 'opacity-0'
              }`} style={{
                background: 'linear-gradient(135deg, hsl(var(--primary) / 0.1), hsl(var(--secondary) / 0.1))',
                filter: 'blur(20px)',
                transform: 'scale(1.1)',
                zIndex: -1
              }} />
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default FacultySection;