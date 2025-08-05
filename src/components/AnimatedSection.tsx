import { useEffect, useRef, useState } from 'react';

interface AnimatedSectionProps {
  children: React.ReactNode;
  className?: string;
  animationType?: 'fade-up' | 'blur-in' | 'scale-in';
}

const AnimatedSection = ({ 
  children, 
  className = '', 
  animationType = 'fade-up' 
}: AnimatedSectionProps) => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      {
        threshold: 0.1,
        rootMargin: '50px 0px -50px 0px',
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <div
      ref={sectionRef}
      className={`${animationType === 'fade-up' ? 'animate-fade-up' : ''} ${
        animationType === 'blur-in' ? 'animate-blur-in' : ''
      } ${
        animationType === 'scale-in' ? 'animate-scale-in' : ''
      } ${isVisible ? 'in-view' : ''} ${className}`}
    >
      {children}
    </div>
  );
};

export default AnimatedSection;