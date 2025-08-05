import { useEffect } from 'react';
import Navigation from '@/components/Navigation';
import HeroSection from '@/components/HeroSection';
import FacultySection from '@/components/FacultySection';
import MembersSection from '@/components/MembersSection';
import AchievementsSection from '@/components/AchievementsSection';
import EventsSection from '@/components/EventsSection';
import GoalsSection from '@/components/GoalsSection';
import ContactSection from '@/components/ContactSection';

const Index = () => {
  useEffect(() => {
    // Initialize intersection observer for animations
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('in-view');
        }
      });
    }, observerOptions);

    // Observe all animated elements
    const animatedElements = document.querySelectorAll('.animate-fade-up, .animate-blur-in');
    animatedElements.forEach((el) => observer.observe(el));

    return () => {
      animatedElements.forEach((el) => observer.unobserve(el));
    };
  }, []);

  return (
    <div className="min-h-screen bg-background font-inter">
      <Navigation />
      <main>
        <HeroSection />
        <FacultySection />
        <MembersSection />
        <AchievementsSection />
        <EventsSection />
        <GoalsSection />
        <ContactSection />
      </main>
      
      {/* Footer */}
      <footer className="py-12 border-t border-glass-border/20">
        <div className="container mx-auto px-6 text-center">
          <div className="glass-card rounded-2xl p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-light tracking-tight mb-4">
              <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                IEEE WIE
              </span>
            </h3>
            <p className="text-foreground/70 font-light mb-6">
              Empowering women engineers to lead innovation and drive positive change
            </p>
            <div className="flex justify-center space-x-8 text-sm text-foreground/60">
              <span>© 2024 IEEE WIE</span>
              <span>•</span>
              <span>All rights reserved</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
