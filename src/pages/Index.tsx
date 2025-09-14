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
      
      
    </div>
  );
};

export default Index;
