import AnimatedSection from './AnimatedSection';
import { Target, Users, Lightbulb, Heart } from 'phosphor-react';

const GoalsSection = () => {
  const goals = [
    {
      id: 1,
      title: 'Empowerment',
      description: 'Foster an inclusive environment where women in engineering can thrive, develop leadership skills, and reach their full potential.',
      icon: Users,
      color: 'from-primary to-primary-glow'
    },
    {
      id: 2,
      title: 'Innovation',
      description: 'Encourage creative thinking and innovation in engineering solutions that address real-world challenges and make a positive impact.',
      icon: Lightbulb,
      color: 'from-secondary to-secondary-glow'
    },
    {
      id: 3,
      title: 'Community',
      description: 'Build a strong network of support, mentorship, and collaboration among women engineers across all disciplines and career stages.',
      icon: Heart,
      color: 'from-accent to-accent-glow'
    },
    {
      id: 4,
      title: 'Excellence',
      description: 'Promote academic and professional excellence through workshops, research opportunities, and continuous learning initiatives.',
      icon: Target,
      color: 'from-primary to-secondary'
    }
  ];

  return (
    <section id="goals" className="py-24 relative">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-0 w-80 h-80 bg-secondary/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <AnimatedSection>
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-light tracking-tighter mb-4">
              <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                Our Vision & Mission
              </span>
            </h2>
            <p className="text-foreground/70 text-lg font-light max-w-3xl mx-auto leading-relaxed">
              We are committed to creating a future where women engineers lead innovation, 
              drive positive change, and inspire the next generation of problem-solvers
            </p>
          </div>
        </AnimatedSection>

        {/* Mission Statement */}
        <AnimatedSection animationType="scale-in">
          <div className="glass-card rounded-3xl p-8 md:p-12 mb-20 max-w-4xl mx-auto text-center">
            <h3 className="text-2xl md:text-3xl font-light tracking-tight mb-6">
              <span className="bg-gradient-to-r from-accent to-primary bg-clip-text text-transparent">
                Our Mission
              </span>
            </h3>
            <p className="text-foreground/80 text-lg font-light leading-relaxed">
              To advance women in engineering by providing opportunities for professional development, 
              technical excellence, and leadership growth while fostering an inclusive community that 
              celebrates diversity and drives innovation in engineering solutions.
            </p>
          </div>
        </AnimatedSection>

        {/* Goals Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {goals.map((goal, index) => (
            <AnimatedSection key={goal.id} animationType="fade-up">
              <div 
                className="glass-card rounded-2xl p-8 group hover:scale-105 transition-all duration-500 hover:shadow-xl hover:shadow-primary/10"
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <div className="flex flex-col items-center text-center">
                  <div className={`p-6 rounded-2xl bg-gradient-to-br ${goal.color} mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <goal.icon size={40} weight="light" className="text-white" />
                  </div>
                  
                  <h4 className="text-2xl font-medium text-foreground mb-4 tracking-tight group-hover:text-primary transition-colors duration-300">
                    {goal.title}
                  </h4>
                  
                  <p className="text-foreground/70 font-light leading-relaxed">
                    {goal.description}
                  </p>
                </div>

                {/* Decorative border */}
                <div className="mt-8 w-full h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent" />
              </div>
            </AnimatedSection>
          ))}
        </div>

        {/* Vision Statement */}
        <AnimatedSection>
          <div className="mt-20 text-center">
            <div className="glass-card rounded-3xl p-8 md:p-12 max-w-4xl mx-auto">
              <h3 className="text-2xl md:text-3xl font-light tracking-tight mb-6">
                <span className="bg-gradient-to-r from-secondary to-accent bg-clip-text text-transparent">
                  Our Vision
                </span>
              </h3>
              <p className="text-foreground/80 text-lg font-light leading-relaxed mb-6">
                A world where women engineers are recognized as leaders in innovation, 
                where gender equality in STEM is the norm, and where the next generation 
                of young women see engineering as an exciting and accessible career path.
              </p>
              
              <div className="flex flex-wrap justify-center gap-4 mt-8">
                {['Leadership', 'Innovation', 'Equality', 'Inspiration'].map((value, index) => (
                  <span 
                    key={value}
                    className="px-4 py-2 bg-gradient-to-r from-primary/10 to-secondary/10 border border-primary/20 rounded-full text-primary font-medium text-sm tracking-tight"
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    {value}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default GoalsSection;