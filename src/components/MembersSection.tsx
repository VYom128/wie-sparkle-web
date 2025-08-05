import { useState } from 'react';
import AnimatedSection from './AnimatedSection';

const MembersSection = () => {
  const [selectedMember, setSelectedMember] = useState<number | null>(null);

  // Mock data - in real app this would come from an API
  const teamLeads = [
    {
      id: 1,
      name: 'Emily Chen',
      role: 'President',
      description: 'Computer Engineering major with passion for AI and robotics. Leading IEEE WIE initiatives for the past 2 years.',
      image: 'https://images.unsplash.com/photo-1494790108755-2616b612b647?w=400&h=400&fit=crop&crop=face'
    },
    {
      id: 2,
      name: 'Maria Rodriguez',
      role: 'Vice President',
      description: 'Electrical Engineering student specializing in renewable energy systems and sustainable technology.',
      image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=400&fit=crop&crop=face'
    },
    {
      id: 3,
      name: 'Aisha Patel',
      role: 'Secretary',
      description: 'Software Engineering major focused on cybersecurity and women in tech advocacy.',
      image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&h=400&fit=crop&crop=face'
    }
  ];

  const members = [
    {
      id: 4,
      name: 'Jessica Liu',
      role: 'Treasurer',
      image: 'https://images.unsplash.com/photo-1489424731084-a5d8b219a5bb?w=300&h=300&fit=crop&crop=face'
    },
    {
      id: 5,
      name: 'Rachel Smith',
      role: 'Event Coordinator',
      image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=300&h=300&fit=crop&crop=face'
    },
    {
      id: 6,
      name: 'Zara Ahmed',
      role: 'Outreach Lead',
      image: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?w=300&h=300&fit=crop&crop=face'
    },
    {
      id: 7,
      name: 'Nicole Johnson',
      role: 'Tech Lead',
      image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=300&h=300&fit=crop&crop=face'
    },
    {
      id: 8,
      name: 'Sophia Kim',
      role: 'Design Lead',
      image: 'https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?w=300&h=300&fit=crop&crop=face'
    }
  ];

  return (
    <section id="members" className="py-24 relative">
      <div className="container mx-auto px-6">
        <AnimatedSection>
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-light tracking-tighter mb-4">
              <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                Our Team
              </span>
            </h2>
            <p className="text-foreground/70 text-lg font-light max-w-2xl mx-auto">
              Meet the passionate women leading IEEE WIE and driving innovation
            </p>
          </div>
        </AnimatedSection>

        {/* Team Leads */}
        <AnimatedSection>
          <div className="mb-20">
            <h3 className="text-2xl font-medium text-center mb-12 tracking-tight">Leadership Team</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              {teamLeads.map((lead, index) => (
                <div
                  key={lead.id}
                  className="group cursor-pointer"
                  onClick={() => setSelectedMember(selectedMember === lead.id ? null : lead.id)}
                >
                  <div className="glass-card rounded-2xl overflow-hidden transition-all duration-500 group-hover:scale-105 group-hover:shadow-xl group-hover:shadow-primary/20">
                    <div className="relative">
                      <img
                        src={lead.image}
                        alt={lead.name}
                        className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />
                      <div className="absolute bottom-4 left-4 right-4">
                        <h4 className="text-xl font-medium text-foreground mb-1 tracking-tight">{lead.name}</h4>
                        <p className="text-primary font-medium text-sm">{lead.role}</p>
                      </div>
                    </div>
                    
                    {/* Expandable description */}
                    <div className={`transition-all duration-500 overflow-hidden ${
                      selectedMember === lead.id ? 'max-h-40 opacity-100' : 'max-h-0 opacity-0'
                    }`}>
                      <div className="p-6 pt-4">
                        <p className="text-foreground/80 text-sm font-light leading-relaxed">
                          {lead.description}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </AnimatedSection>

        {/* Team Members */}
        <AnimatedSection>
          <div>
            <h3 className="text-2xl font-medium text-center mb-12 tracking-tight">Team Members</h3>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 max-w-6xl mx-auto">
              {members.map((member, index) => (
                <div
                  key={member.id}
                  className="group cursor-pointer"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="glass-card rounded-xl overflow-hidden transition-all duration-500 group-hover:scale-105 group-hover:shadow-lg group-hover:shadow-secondary/20">
                    <div className="relative">
                      <img
                        src={member.image}
                        alt={member.name}
                        className="w-full h-40 object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-background/70 via-transparent to-transparent" />
                      <div className="absolute bottom-2 left-2 right-2">
                        <h5 className="text-sm font-medium text-foreground mb-1 tracking-tight">{member.name}</h5>
                        <p className="text-primary font-medium text-xs">{member.role}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default MembersSection;