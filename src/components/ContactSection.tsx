import { useState } from 'react';
import AnimatedSection from './AnimatedSection';
import Button from './Button';
import { EnvelopeSimple, Phone, MapPin, PaperPlaneTilt } from 'phosphor-react';
import { useToast } from '@/hooks/use-toast';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      toast({
        title: "Message Sent!",
        description: "Thank you for your interest. We'll get back to you soon.",
      });
      
      setFormData({ name: '', email: '', message: '' });
      setIsSubmitting(false);
    }, 1000);
  };

  return (
    <section id="contact" className="py-24 relative">
      <div className="container mx-auto px-6">
        <AnimatedSection>
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-light tracking-tighter mb-4">
              <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                Get In Touch
              </span>
            </h2>
            <p className="text-foreground/70 text-lg font-light max-w-2xl mx-auto">
              Ready to join our community or have questions? We'd love to hear from you
            </p>
          </div>
        </AnimatedSection>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Information */}
          <AnimatedSection animationType="fade-up">
            <div className="space-y-8">
              <div className="glass-card rounded-2xl p-8">
                <h3 className="text-2xl font-medium mb-6 tracking-tight">
                  Club President
                </h3>
                
                <div className="space-y-6">
                  <div className="flex items-center space-x-4">
                    <div className="p-3 rounded-lg bg-gradient-to-br from-primary to-primary-glow">
                      <EnvelopeSimple size={20} weight="light" className="text-white" />
                    </div>
                    <div>
                      <p className="text-foreground font-medium">Emily Chen</p>
                      <p className="text-foreground/70 text-sm">emily.chen@ieee.wie.edu</p>
                    </div>
                  </div>

                  <div className="flex items-center space-x-4">
                    <div className="p-3 rounded-lg bg-gradient-to-br from-secondary to-secondary-glow">
                      <Phone size={20} weight="light" className="text-white" />
                    </div>
                    <div>
                      <p className="text-foreground font-medium">Phone</p>
                      <p className="text-foreground/70 text-sm">+1 (555) 123-4567</p>
                    </div>
                  </div>

                  <div className="flex items-center space-x-4">
                    <div className="p-3 rounded-lg bg-gradient-to-br from-accent to-accent-glow">
                      <MapPin size={20} weight="light" className="text-white" />
                    </div>
                    <div>
                      <p className="text-foreground font-medium">Office</p>
                      <p className="text-foreground/70 text-sm">Engineering Building, Room 205</p>
                    </div>
                  </div>
                </div>

                <div className="mt-8 pt-6 border-t border-glass-border/20">
                  <h4 className="text-lg font-medium mb-4 tracking-tight">Office Hours</h4>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-foreground/70">Monday - Wednesday</span>
                      <span className="text-foreground">2:00 PM - 5:00 PM</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-foreground/70">Friday</span>
                      <span className="text-foreground">1:00 PM - 4:00 PM</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Quick Stats */}
              <div className="glass-card rounded-2xl p-6">
                <h4 className="text-lg font-medium mb-4 tracking-tight">Why Join Us?</h4>
                <div className="space-y-3">
                  {[
                    'Networking with industry professionals',
                    'Leadership development opportunities',
                    'Technical workshops and seminars',
                    'Research collaboration projects',
                    'Mentorship program access'
                  ].map((benefit, index) => (
                    <div key={index} className="flex items-center space-x-3">
                      <div className="w-2 h-2 rounded-full bg-primary" />
                      <span className="text-foreground/80 text-sm font-light">{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </AnimatedSection>

          {/* Contact Form */}
          <AnimatedSection animationType="scale-in">
            <div className="glass-card rounded-2xl p-8">
              <h3 className="text-2xl font-medium mb-6 tracking-tight">
                Send Us a Message
              </h3>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-foreground/80 mb-2">
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-glass/50 border border-glass-border/30 rounded-lg text-foreground placeholder-foreground/50 focus:outline-none focus:border-primary/50 focus:bg-glass/70 transition-all duration-300"
                    placeholder="Enter your full name"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-foreground/80 mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-glass/50 border border-glass-border/30 rounded-lg text-foreground placeholder-foreground/50 focus:outline-none focus:border-primary/50 focus:bg-glass/70 transition-all duration-300"
                    placeholder="Enter your email address"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-foreground/80 mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={5}
                    className="w-full px-4 py-3 bg-glass/50 border border-glass-border/30 rounded-lg text-foreground placeholder-foreground/50 focus:outline-none focus:border-primary/50 focus:bg-glass/70 transition-all duration-300 resize-none"
                    placeholder="Tell us about your interest in IEEE WIE, questions, or how you'd like to get involved..."
                  />
                </div>

                <Button
                  type="submit"
                  variant="neomorphic"
                  size="lg"
                  className={`w-full ${isSubmitting ? 'opacity-70 cursor-not-allowed' : ''}`}
                >
                  {isSubmitting ? (
                    <span className="flex items-center space-x-2">
                      <div className="w-4 h-4 border-2 border-foreground/30 border-t-foreground rounded-full animate-spin" />
                      <span>Sending...</span>
                    </span>
                  ) : (
                    <span className="flex items-center space-x-2">
                      <PaperPlaneTilt size={20} weight="light" />
                      <span>Send Message</span>
                    </span>
                  )}
                </Button>
              </form>
            </div>
          </AnimatedSection>
        </div>

        {/* Call to Action */}
        <AnimatedSection>
          <div className="mt-16 text-center">
            <div className="glass-card rounded-2xl p-8 max-w-2xl mx-auto">
              <h3 className="text-2xl font-medium mb-4 tracking-tight">
                Ready to Make a Difference?
              </h3>
              <p className="text-foreground/70 font-light mb-6">
                Join IEEE WIE and be part of a community that's shaping the future of engineering
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button variant="primary" size="md">
                  Join Now
                </Button>
                <Button variant="secondary" size="md">
                  Learn More
                </Button>
              </div>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default ContactSection;