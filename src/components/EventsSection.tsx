import AnimatedSection from './AnimatedSection';
import { CalendarBlank, MapPin, Clock } from 'phosphor-react';

const EventsSection = () => {
  const events = [
    {
      id: 1,
      title: 'Women in Tech Symposium 2024',
      image: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=600&h=400&fit=crop',
      date: 'March 15, 2024',
      time: '9:00 AM - 5:00 PM',
      venue: 'Engineering Auditorium',
      description: 'Join us for an inspiring day of keynote speeches, panel discussions, and networking opportunities with industry leaders and successful women engineers.'
    },
    {
      id: 2,
      title: 'Innovation Workshop Series',
      image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&h=400&fit=crop',
      date: 'March 22, 2024',
      time: '2:00 PM - 6:00 PM',
      venue: 'Innovation Lab, Room 301',
      description: 'Hands-on workshops covering emerging technologies including AI, IoT, and sustainable engineering practices. Perfect for students looking to expand their technical skills.'
    },
    {
      id: 3,
      title: 'Mentorship Program Launch',
      image: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=600&h=400&fit=crop',
      date: 'April 5, 2024',
      time: '6:00 PM - 8:00 PM',
      venue: 'Student Center',
      description: 'Launch event for our new mentorship program connecting students with industry professionals. Includes networking dinner and mentor-mentee matching.'
    },
    {
      id: 4,
      title: 'Engineering for Social Good',
      image: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=600&h=400&fit=crop',
      date: 'April 18, 2024',
      time: '1:00 PM - 4:00 PM',
      venue: 'Conference Room B',
      description: 'Panel discussion on how engineering can address global challenges, featuring speakers from humanitarian organizations and social impact startups.'
    }
  ];

  return (
    <section id="events" className="py-24 relative">
      <div className="container mx-auto px-6">
        <AnimatedSection>
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-light tracking-tighter mb-4">
              <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                Upcoming Events
              </span>
            </h2>
            <p className="text-foreground/70 text-lg font-light max-w-2xl mx-auto">
              Join us for exciting events designed to inspire, educate, and connect women in engineering
            </p>
          </div>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {events.map((event, index) => (
            <AnimatedSection key={event.id} animationType="scale-in">
              <div 
                className="glass-card rounded-2xl overflow-hidden group hover:scale-105 transition-all duration-500 hover:shadow-xl hover:shadow-primary/10"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <div className="relative overflow-hidden">
                  <img
                    src={event.image}
                    alt={event.title}
                    className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/60 via-transparent to-transparent" />
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-medium text-foreground mb-4 tracking-tight group-hover:text-primary transition-colors duration-300">
                    {event.title}
                  </h3>

                  <div className="space-y-3 mb-4">
                    <div className="flex items-center space-x-3 text-foreground/70">
                      <CalendarBlank size={16} weight="light" className="text-primary" />
                      <span className="text-sm font-light">{event.date}</span>
                    </div>
                    
                    <div className="flex items-center space-x-3 text-foreground/70">
                      <Clock size={16} weight="light" className="text-secondary" />
                      <span className="text-sm font-light">{event.time}</span>
                    </div>
                    
                    <div className="flex items-center space-x-3 text-foreground/70">
                      <MapPin size={16} weight="light" className="text-accent" />
                      <span className="text-sm font-light">{event.venue}</span>
                    </div>
                  </div>

                  <p className="text-foreground/80 font-light leading-relaxed text-sm">
                    {event.description}
                  </p>

                  <div className="mt-6 pt-4 border-t border-glass-border/20">
                    <button className="text-primary hover:text-primary-glow font-medium text-sm transition-colors duration-300">
                      Learn More →
                    </button>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>

        {/* CTA Section */}
        <AnimatedSection>
          <div className="mt-16 text-center">
            <div className="glass-card rounded-2xl p-8 max-w-2xl mx-auto">
              <h3 className="text-2xl font-medium mb-4 tracking-tight">
                Don't Miss Out!
              </h3>
              <p className="text-foreground/70 font-light mb-6">
                Stay updated with our latest events and opportunities
              </p>
              <button className="neomorphic-button px-8 py-3 text-foreground hover:text-primary transition-colors duration-300">
                Subscribe to Updates
              </button>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default EventsSection;