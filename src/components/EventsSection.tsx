import AnimatedSection from './AnimatedSection';
import { CalendarBlank, MapPin, Clock } from 'phosphor-react';
import WieCongressMain from '/images/wie website event pics/wie congress main pic.jpg';
import InaugMain from '/images/wie website event pics/inaug main.jpg';
import JobQuestMain from '/images/wie website event pics/jobquest main pic.jpg';
import InnovateHerMain from '/images/wie website event pics/InnovateHerMian.jpg';
const EventsSection = () => {
  const events = [
    {
      id: 1,
      title: 'IEEE WIE Congress 2024',
      image: WieCongressMain,
      date: 'November 23, 2024',
      time: '9:00 AM - 4:00 PM',
      venue: 'D-Block Auditorium, Anurag University',
      description: 'IEEE WIE Congress 2024 was a flagship event hosted at Anurag University, uniting leaders and innovators across the Hyderabad Section. The event empowered students through impactful sessions, networking, and collaboration.'
    },
    {
      id: 2,
      title: 'InnovateHer – Women’s Day Special 2024',
      image: InnovateHerMain,
      date: 'March 8, 2025',
      time: '9:30 PM - 1:00 PM',
      venue: 'G-Block Seminar Hall, Anurag University',
      description: 'InnovateHer was organized on Women’s Day to honor, uplift, and engage women in STEM through inspiring sessions and interactive challenges. The event encouraged creativity and leadership among young women.'
    },
    {
      id: 3,
      title: 'JobQuest – Aptitude Webinar',
      image: JobQuestMain,
      date: 'February 28, 2025',
      time: '1:30 PM - 3:45 PM',
      venue: 'E-Block Auditorium, Anurag University',
      description: 'JobQuest was an online webinar focused on Quantitative Aptitude, tailored to help students enhance their placement preparation skills. It was an informative session guided by an experienced trainer.'
    },
    {
      id: 4,
      title: 'Inauguration Ceremony of IEEE WIE AG - AU',
      image: InaugMain,
      date: 'June 19, 2024',
      time: '10:00 PM - 4:00 PM',
      venue: 'D-Block Seminar-Hall, Anurag University',
      description: 'The inauguration ceremony of the IEEE WIE AG at Anurag University was held on June 18, 2024. It marked the beginning of an empowering journey to uplift and support women in engineering.'
    }
  ];

  return (
    <section id="events" className="py-24 relative">
      <div className="container mx-auto px-6">
        <AnimatedSection>
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-light tracking-tighter mb-4">
              <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                Events Organized
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
                    <a 
                      href={`/events/${event.id}`}
                      className="text-primary hover:text-primary-glow font-medium text-sm transition-colors duration-300"
                    >
                      Learn More →
                    </a>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>

      </div>
    </section>
  );
};

export default EventsSection;