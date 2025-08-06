import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, CalendarBlank, Clock, MapPin } from 'phosphor-react';
import Navigation from '@/components/Navigation';

const EventDetail = () => {
  const { id } = useParams();

  // Event data - in real app this would come from an API
  const events = {
    '1': {
      title: 'Women in Tech Symposium 2024',
      date: 'March 15, 2024',
      time: '9:00 AM - 5:00 PM',
      venue: 'Engineering Auditorium',
      description: 'Join us for an inspiring day of keynote speeches, panel discussions, and networking opportunities with industry leaders and successful women engineers.',
      fullDescription: `Our annual Women in Tech Symposium brings together the brightest minds in engineering and technology. This year's theme focuses on "Breaking Barriers, Building Futures" with sessions covering cutting-edge research, leadership development, and career advancement strategies.

The symposium features keynote speakers from major tech companies, interactive workshops on emerging technologies, and unparalleled networking opportunities. Attendees will gain insights into the latest industry trends, connect with like-minded professionals, and leave inspired to drive innovation in their respective fields.`,
      images: [
        'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800&h=600&fit=crop',
        'https://images.unsplash.com/photo-1591115765373-5207764f72e7?w=400&h=300&fit=crop',
        'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=400&h=300&fit=crop',
        'https://images.unsplash.com/photo-1531545514256-b1400bc00f31?w=400&h=300&fit=crop'
      ]
    },
    '2': {
      title: 'Innovation Workshop Series',
      date: 'March 22, 2024',
      time: '2:00 PM - 6:00 PM',
      venue: 'Innovation Lab, Room 301',
      description: 'Hands-on workshops covering emerging technologies including AI, IoT, and sustainable engineering practices. Perfect for students looking to expand their technical skills.',
      fullDescription: `Our Innovation Workshop Series is designed to provide hands-on experience with the technologies shaping the future of engineering. Participants will work with state-of-the-art equipment and software under the guidance of industry experts and faculty members.

The workshop covers practical applications of artificial intelligence in engineering, Internet of Things (IoT) device development, and sustainable engineering practices. Each session includes both theoretical foundations and practical implementation, ensuring participants leave with actionable skills and knowledge.`,
      images: [
        'https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&h=600&fit=crop',
        'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=400&h=300&fit=crop',
        'https://images.unsplash.com/photo-1518611012118-696072aa579a?w=400&h=300&fit=crop',
        'https://images.unsplash.com/photo-1565043589221-1a6fd9ae45c7?w=400&h=300&fit=crop'
      ]
    },
    '3': {
      title: 'Mentorship Program Launch',
      date: 'April 5, 2024',
      time: '6:00 PM - 8:00 PM',
      venue: 'Student Center',
      description: 'Launch event for our new mentorship program connecting students with industry professionals. Includes networking dinner and mentor-mentee matching.',
      fullDescription: `The IEEE WIE Mentorship Program Launch marks the beginning of a transformative journey for engineering students. This comprehensive program pairs students with accomplished professionals who provide guidance, support, and insights into career development.

The launch event features a networking dinner where participants can meet potential mentors, learn about program expectations, and begin building meaningful professional relationships. The program focuses on career development, technical skill enhancement, and leadership opportunities within the engineering field.`,
      images: [
        'https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=800&h=600&fit=crop',
        'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=400&h=300&fit=crop',
        'https://images.unsplash.com/photo-1515187029135-18ee286d815b?w=400&h=300&fit=crop',
        'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=300&fit=crop'
      ]
    },
    '4': {
      title: 'Engineering for Social Good',
      date: 'April 18, 2024',
      time: '1:00 PM - 4:00 PM',
      venue: 'Conference Room B',
      description: 'Panel discussion on how engineering can address global challenges, featuring speakers from humanitarian organizations and social impact startups.',
      fullDescription: `Engineering for Social Good explores how technical innovation can address pressing global challenges. This panel discussion brings together engineers working in humanitarian sectors, social impact startups, and NGOs to share their experiences and insights.

The session covers topics including sustainable development, disaster relief engineering, accessible technology design, and ethical considerations in engineering practice. Attendees will learn about career opportunities in social impact engineering and how to apply their technical skills to create positive change in communities worldwide.`,
      images: [
        'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=800&h=600&fit=crop',
        'https://images.unsplash.com/photo-1586953208448-b95a79798f07?w=400&h=300&fit=crop',
        'https://images.unsplash.com/photo-1573164713988-8665fc963095?w=400&h=300&fit=crop',
        'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=300&fit=crop'
      ]
    }
  };

  const event = events[id as keyof typeof events];

  if (!event) {
    return (
      <div className="min-h-screen bg-background font-inter flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-light mb-4">Event not found</h1>
          <Link to="/" className="text-primary hover:text-primary-glow">
            Return to home
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background font-inter">
      <Navigation />
      
      <main className="pt-24">
        {/* Back button */}
        <div className="container mx-auto px-6 mb-8">
          <Link 
            to="/"
            className="inline-flex items-center space-x-2 text-foreground/70 hover:text-primary transition-colors duration-300"
          >
            <ArrowLeft size={20} weight="light" />
            <span className="font-light">Back to Events</span>
          </Link>
        </div>

        {/* Hero section */}
        <section className="container mx-auto px-6 mb-16">
          <div className="glass-card rounded-2xl overflow-hidden">
            <div className="relative">
              <img
                src={event.images[0]}
                alt={event.title}
                className="w-full h-96 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />
              <div className="absolute bottom-8 left-8 right-8">
                <h1 className="text-4xl md:text-5xl font-light tracking-tighter text-foreground mb-4">
                  {event.title}
                </h1>
                <div className="flex flex-wrap gap-6 text-foreground/80">
                  <div className="flex items-center space-x-2">
                    <CalendarBlank size={20} weight="light" className="text-primary" />
                    <span className="font-light">{event.date}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Clock size={20} weight="light" className="text-secondary" />
                    <span className="font-light">{event.time}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <MapPin size={20} weight="light" className="text-accent" />
                    <span className="font-light">{event.venue}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Content section */}
        <section className="container mx-auto px-6 mb-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Description */}
            <div className="space-y-6">
              <h2 className="text-2xl font-light tracking-tight text-foreground">
                About This Event
              </h2>
              <div className="space-y-4 text-foreground/80 font-light leading-relaxed">
                {event.fullDescription.split('\n\n').map((paragraph, index) => (
                  <p key={index}>{paragraph}</p>
                ))}
              </div>
            </div>

            {/* Photo collage */}
            <div className="space-y-6">
              <h2 className="text-2xl font-light tracking-tight text-foreground">
                Event Gallery
              </h2>
              <div className="grid grid-cols-2 gap-4">
                {event.images.slice(1).map((image, index) => (
                  <div key={index} className="glass-card rounded-xl overflow-hidden group">
                    <img
                      src={image}
                      alt={`${event.title} ${index + 1}`}
                      className="w-full h-40 object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CTA section */}
        <section className="container mx-auto px-6 mb-16">
          <div className="glass-card rounded-2xl p-8 text-center max-w-2xl mx-auto">
            <h3 className="text-2xl font-light tracking-tight mb-4">
              Interested in Attending?
            </h3>
            <p className="text-foreground/70 font-light mb-6">
              Register now to secure your spot at this exciting event
            </p>
            <button className="neomorphic-button px-8 py-3 text-foreground hover:text-primary transition-colors duration-300">
              Register Now
            </button>
          </div>
        </section>
      </main>
    </div>
  );
};

export default EventDetail;