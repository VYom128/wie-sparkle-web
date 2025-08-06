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
  const [isScrollingPaused, setIsScrollingPaused] = useState(false);
  const leadsContainerRef = useRef<HTMLDivElement>(null);
  const membersContainerRef = useRef<HTMLDivElement>(null);
  const membersScrollRef = useRef<HTMLDivElement>(null);
  const scrollTween = useRef<gsap.core.Tween | null>(null);
  const duplicatedMembers = useRef<Member[]>([]);
  const currentProgress = useRef<number>(0);

  useEffect(() => {
    // Duplicate members for seamless looping (minimum 3 sets for smooth infinite scroll)
    const minSets = Math.max(3, Math.ceil(24 / members.length)); // Ensure at least 24 cards for smooth scrolling
    duplicatedMembers.current = Array(minSets).fill(members).flat();
  }, [members]);

  useEffect(() => {
    const setupContinuousScroll = () => {
      if (!membersScrollRef.current || !membersContainerRef.current) return;

      const scrollContainer = membersScrollRef.current;
      const container = membersContainerRef.current;
      
      // Wait for images to load and get accurate measurements
      const timer = setTimeout(() => {
        const firstCard = scrollContainer.querySelector('.member-card') as HTMLElement;
        if (!firstCard) return;

        const cardWidth = firstCard.offsetWidth + 24; // Include gap
        const totalOriginalWidth = cardWidth * members.length;
        
        // Create seamless infinite scroll
        const createInfiniteScroll = (fromProgress = 0) => {
          if (scrollTween.current) {
            scrollTween.current.kill();
          }

          const startX = -totalOriginalWidth * fromProgress;
          
          scrollTween.current = gsap.fromTo(scrollContainer, 
            { x: startX },
            {
              x: startX - totalOriginalWidth,
              duration: members.length * 3 * (1 - fromProgress), // Adjust duration based on progress
              ease: "none",
              repeat: -1,
              modifiers: {
                x: gsap.utils.unitize(gsap.utils.wrap(-totalOriginalWidth, 0), "px")
              },
              onUpdate: () => {
                if (scrollTween.current) {
                  currentProgress.current = scrollTween.current.progress();
                }
              }
            }
          );
        };

        // Start animation if not paused
        if (!isScrollingPaused) {
          createInfiniteScroll();
        }

        // Handle click to pause/resume
        const handleClick = () => {
          setIsScrollingPaused(prev => {
            const newPaused = !prev;
            
            if (newPaused) {
              // Pause animation
              if (scrollTween.current) {
                scrollTween.current.pause();
              }
            } else {
              // Resume animation from current progress
              createInfiniteScroll(currentProgress.current);
            }
            
            return newPaused;
          });
        };

        // Add click listener
        container.addEventListener('click', handleClick);

        // Handle touch/mobile swiping
        let startX = 0;
        let currentX = 0;
        let isDragging = false;

        const handleTouchStart = (e: TouchEvent | MouseEvent) => {
          if (window.innerWidth >= 768) return; // Only on mobile
          
          isDragging = true;
          startX = 'touches' in e ? e.touches[0].clientX : e.clientX;
          
          // Pause auto-scroll on mobile interaction
          if (scrollTween.current) {
            scrollTween.current.pause();
          }
        };

        const handleTouchMove = (e: TouchEvent | MouseEvent) => {
          if (!isDragging || window.innerWidth >= 768) return;
          
          e.preventDefault();
          currentX = 'touches' in e ? e.touches[0].clientX : e.clientX;
          const deltaX = currentX - startX;
          
          gsap.set(scrollContainer, { x: `+=${deltaX * 0.5}` });
          startX = currentX;
        };

        const handleTouchEnd = () => {
          if (!isDragging || window.innerWidth >= 768) return;
          
          isDragging = false;
          
          // Resume auto-scroll after a delay
          setTimeout(() => {
            if (!isScrollingPaused && scrollTween.current) {
              scrollTween.current.resume();
            }
          }, 2000);
        };

        // Add touch listeners for mobile
        container.addEventListener('touchstart', handleTouchStart, { passive: false });
        container.addEventListener('touchmove', handleTouchMove, { passive: false });
        container.addEventListener('touchend', handleTouchEnd);
        container.addEventListener('mousedown', handleTouchStart);
        container.addEventListener('mousemove', handleTouchMove);
        container.addEventListener('mouseup', handleTouchEnd);
      }, 100);
      
      return () => {
        clearTimeout(timer);
        const container = membersContainerRef.current;
        if (container) {
          // Remove all event listeners
          container.removeEventListener('click', () => {});
          container.removeEventListener('touchstart', () => {});
          container.removeEventListener('touchmove', () => {});
          container.removeEventListener('touchend', () => {});
          container.removeEventListener('mousedown', () => {});
          container.removeEventListener('mousemove', () => {});
          container.removeEventListener('mouseup', () => {});
        }
        
        if (scrollTween.current) {
          scrollTween.current.kill();
        }
      };
    };

    const cleanup = setupContinuousScroll();

    return cleanup;
  }, [members.length, isScrollingPaused]);

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
          className="relative overflow-hidden cursor-pointer select-none"
          style={{ height: '200px' }}
        >
          <div 
            ref={membersScrollRef}
            className="flex space-x-6 absolute left-0 top-0"
            style={{ 
              width: 'max-content',
              willChange: 'transform'
            }}
          >
            {duplicatedMembers.current.map((member, index) => (
              <div
                key={`${member.id}-${index}`}
                className="member-card flex-none w-48 group"
              >
                <div className="glass-card rounded-xl overflow-hidden transition-all duration-700 group-hover:scale-105 group-hover:shadow-xl group-hover:shadow-primary/30">
                  <div className="relative">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-40 object-cover transition-transform duration-700 group-hover:scale-110"
                      draggable={false}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />
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