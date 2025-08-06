import { useState, useRef, useEffect } from 'react';
import { gsap } from 'gsap';

interface Member {
  id: number;
  name: string;
  role: string;
  description?: string;
  image: string;
}

interface HorizontalScrollMembersProps {
  teamLeads: Member[];
  members: Member[];
}

const HorizontalScrollMembers = ({ teamLeads, members }: HorizontalScrollMembersProps) => {
  const [selectedMember, setSelectedMember] = useState<number | null>(null);
  const leadsContainerRef = useRef<HTMLDivElement>(null);
  const membersContainerRef = useRef<HTMLDivElement>(null);
  const leadsScrollRef = useRef<HTMLDivElement>(null);
  const membersScrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // GSAP smooth scroll animations for desktop hover
    const setupHorizontalScroll = (containerRef: React.RefObject<HTMLDivElement>, scrollRef: React.RefObject<HTMLDivElement>) => {
      if (!containerRef.current || !scrollRef.current) return;

      const container = containerRef.current;
      const scrollContainer = scrollRef.current;
      let isScrolling = false;
      let scrollTween: gsap.core.Tween | null = null;

      const handleMouseEnter = () => {
        if (window.innerWidth < 768) return; // Skip on mobile/tablet
        
        const scrollWidth = scrollContainer.scrollWidth;
        const containerWidth = container.clientWidth;
        const maxScroll = scrollWidth - containerWidth;
        
        if (maxScroll <= 0) return;

        isScrolling = true;
        
        // Create smooth continuous scroll animation
        const createContinuousScroll = () => {
          scrollTween = gsap.to(scrollContainer, {
            scrollLeft: maxScroll,
            duration: maxScroll / 30, // Much faster, smoother speed
            ease: "none",
            repeat: -1, // Infinite repeat
            modifiers: {
              scrollLeft: gsap.utils.wrap(0, maxScroll + 1)
            }
          });
        };
        
        createContinuousScroll();
      };

      const handleMouseLeave = () => {
        if (scrollTween) {
          scrollTween.kill();
        }
        isScrolling = false;
      };

      container.addEventListener('mouseenter', handleMouseEnter);
      container.addEventListener('mouseleave', handleMouseLeave);

      return () => {
        container.removeEventListener('mouseenter', handleMouseEnter);
        container.removeEventListener('mouseleave', handleMouseLeave);
        if (scrollTween) {
          scrollTween.kill();
        }
      };
    };

    // Only apply horizontal scroll to members, not leadership team
    const membersCleanup = setupHorizontalScroll(membersContainerRef, membersScrollRef);

    return () => {
      membersCleanup?.();
    };
  }, []);

  return (
    <div className="space-y-20">
      {/* Team Leads */}
      <div>
        <h3 className="text-2xl font-medium text-center mb-12 tracking-tight">Leadership Team</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-8">
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

      {/* Team Members */}
      <div>
        <h3 className="text-2xl font-medium text-center mb-12 tracking-tight">Team Members</h3>
        <div 
          ref={membersContainerRef}
          className="relative overflow-hidden"
        >
          <div 
            ref={membersScrollRef}
            className="flex space-x-6 overflow-x-auto scrollbar-hide pb-4 snap-x snap-mandatory"
            style={{ 
              scrollBehavior: 'smooth',
              WebkitOverflowScrolling: 'touch'
            }}
          >
            {members.map((member, index) => (
              <div
                key={member.id}
                className="flex-none w-48 group cursor-pointer snap-start"
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
      </div>
    </div>
  );
};

export default HorizontalScrollMembers;