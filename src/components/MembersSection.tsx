import AnimatedSection from './AnimatedSection';
import HorizontalScrollMembers from './HorizontalScrollMembers';

const MembersSection = () => {

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
    },
    {
      id: 9,
      name: 'Maya Rodriguez',
      role: 'Research Lead',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop&crop=face'
    },
    {
      id: 10,
      name: 'Anna Thompson',
      role: 'Marketing Lead',
      image: 'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=300&h=300&fit=crop&crop=face'
    },
    {
      id: 11,
      name: 'Sarah Williams',
      role: 'Community Manager',
      image: 'https://images.unsplash.com/photo-1531123897727-8f129e1688ce?w=300&h=300&fit=crop&crop=face'
    },
    {
      id: 12,
      name: 'Lisa Chang',
      role: 'Workshop Coordinator',
      image: 'https://images.unsplash.com/photo-1551836022-d5d88e9218df?w=300&h=300&fit=crop&crop=face'
    },
    {
      id: 13,
      name: 'Emma Davis',
      role: 'Partnership Lead',
      image: 'https://images.unsplash.com/photo-1590086782792-42dd2350140d?w=300&h=300&fit=crop&crop=face'
    },
    {
      id: 14,
      name: 'Priya Sharma',
      role: 'Innovation Lead',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=300&h=300&fit=crop&crop=face'
    },
    {
      id: 15,
      name: 'Jennifer Lee',
      role: 'Social Media Manager',
      image: 'https://images.unsplash.com/photo-1494790108755-2616b612b647?w=300&h=300&fit=crop&crop=face'
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

        {/* Horizontal Scrolling Members */}
        <AnimatedSection>
          <HorizontalScrollMembers teamLeads={teamLeads} members={members} />
        </AnimatedSection>
      </div>
    </section>
  );
};

export default MembersSection;