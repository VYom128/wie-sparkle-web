import AnimatedSection from './AnimatedSection';
import { Trophy, Medal, Star, Crown } from 'phosphor-react';

const AchievementsSection = () => {
  const achievements = [
    {
      id: 1,
      title: '🌍 IEEE Region 10 Brand Ambassador',
      description: 'One of our students proudly represented us as an IEEE Region 10 Brand Ambassador. This prestigious role amplified our voice across India, showcasing the strength of our student branch.',
      icon: Trophy,
      year: '2024',
      color: 'from-primary to-primary-glow'
    },
    {
      id: 2,
      title: '🏅 IEEE ACEI Ambassadors',
      description: 'Two of our exceptional members were selected as IEEE ACEI Entrepreneurship Ambassadors under Region 10. Their selection highlights our focus on innovation and entrepreneurial spirit within the WIE community.',
      icon: Star,
      year: '2025',
      color: 'from-secondary to-secondary-glow'
    },
    {
      id: 3,
      title: '🎉 IEEE WIE Day 2025 Ambassadors',
      description: 'Three of our dedicated students were chosen as IEEE WIE Day 2025 Ambassadors. This global recognition celebrates their active contribution to promoting women in engineering and leadership.',
      icon: Medal,
      year: '2025',
      color: 'from-accent to-accent-glow'
    },
    {
      id: 4,
      title: '🎤 Hosted IEEE WIE Congress 2024',
      description: 'We proudly hosted the IEEE WIE Congress 2024 under the Hyderabad Section at Anurag University, bringing together innovators and leaders from across the region.It was a milestone event filled with impactful sessions, collaboration, and empowerment.',
      icon: Crown,
      year: '2024',
      color: 'from-primary to-secondary'
    }
  ];

  return (
    <section id="achievements" className="py-24 relative">
      <div className="container mx-auto px-6">
        <AnimatedSection>
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-light tracking-tighter mb-4">
              <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                Our Journey of Success
              </span>
            </h2>
            <p className="text-foreground/70 text-lg font-light max-w-2xl mx-auto">
              Celebrating our milestones and the impact we've made in the engineering community
            </p>
          </div>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {achievements.map((achievement, index) => (
            <AnimatedSection key={achievement.id} animationType="scale-in">
              <div 
                className="glass-card rounded-2xl p-8 group hover:scale-105 transition-all duration-500 hover:shadow-xl hover:shadow-primary/10"
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <div className="flex items-start space-x-6">
                  <div className={`p-4 rounded-xl bg-gradient-to-br ${achievement.color} group-hover:scale-110 transition-transform duration-300`}>
                    <achievement.icon size={32} weight="light" className="text-white" />
                  </div>
                  
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-3">
                      <h3 className="text-xl font-medium text-foreground tracking-tight group-hover:text-primary transition-colors duration-300">
                        {achievement.title}
                      </h3>
                      <span className="text-sm font-medium text-primary bg-primary/10 px-3 py-1 rounded-full">
                        {achievement.year}
                      </span>
                    </div>
                    
                    <p className="text-foreground/70 font-light leading-relaxed">
                      {achievement.description}
                    </p>
                  </div>
                </div>

                {/* Decorative element */}
                <div className="mt-6 w-full h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent" />
              </div>
            </AnimatedSection>
          ))}
        </div>

        {/* Statistics */}
        <AnimatedSection>
          <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            {[
              { label: 'Total Attendees', value: '1034' },
              { label: 'Total Events Hosted', value: '6+' },
              { label: 'Awards Won', value: '6' },
              { label: 'Years Active', value: '1+' }
            ].map((stat, index) => (
              <div key={stat.label} className="text-center">
                <div className="glass-card rounded-xl p-6 group hover:scale-105 transition-all duration-300">
                  <div className="text-3xl md:text-4xl font-light mb-2 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                    {stat.value}
                  </div>
                  <div className="text-foreground/70 font-light text-sm">
                    {stat.label}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default AchievementsSection;