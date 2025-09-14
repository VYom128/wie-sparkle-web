import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, CalendarBlank, Clock, MapPin } from 'phosphor-react';
import Navigation from '@/components/Navigation';

import WieCongressMain from "/images/wie website event pics/wie congress main pic.jpg";
import WieCongress1 from "/images/wie website event pics/wie c.jpg";
import WieCongress2 from "/images/wie website event pics/wie c1.jpg";
import WieCongress3 from "/images/wie website event pics/wie c3.jpg";

import InaugMain from "/images/wie website event pics/inaug main.jpg";
import Inaug1 from "/images/wie website event pics/inaug 2.jpg";
import Inaug2 from "/images/wie website event pics/inaug 3.jpg";
import Inaug3 from "/images/wie website event pics/inaug 4.jpg";

import JobQuestMain from "/images/wie website event pics/jobquest main pic.jpg";
import JobQuest1 from "/images/wie website event pics/jobquest 1.jpg";
import JobQuest2 from "/images/wie website event pics/job quest 2.jpg";
import JobQuest3 from "/images/wie website event pics/jobquest 3.png";

import InnovateHerMain from "/images/wie website event pics/InnovateHerMian.jpg";
import InnovateHer1 from "/images/wie website event pics/InnovateHer.jpg";
import InnovateHer2 from "/images/wie website event pics/InnovateHer2.jpg";
import InnovateHer3 from "/images/wie website event pics/InnovateHer3.jpg";



const EventDetail = () => {
  const { id } = useParams();

  // Event data - in real app this would come from an API
  const events = {
    '1': {
      title: 'IEEE WIE Congress 2024',
      date: 'November 23, 2024',
      time: '9:00 AM - 4:00 PM',
      venue: 'D-Block Auditorium, Anurag University',
      description: 'Join us for an inspiring day of keynote speeches, panel discussions, and networking opportunities with industry leaders and successful women engineers.',
      fullDescription: `The IEEE WIE Congress 2024 was successfully hosted by the IEEE WIE AG of Anurag University under the Hyderabad Section. This prestigious event brought together students, professionals, and leaders from various IEEE Student Branches for a day of knowledge exchange, leadership talks, and empowering workshops. With keynote sessions from industry experts, panel discussions on women in STEM, and hands-on activities, the congress served as a powerful platform to inspire and ignite innovation among participants.
      
The event encouraged inter-collegiate networking, promoted the core values of IEEE WIE, and celebrated the power of women in engineering. It concluded with enthusiastic feedback and a call to action for future collaborations.`,
      images: [
        WieCongressMain,
        WieCongress1,
        WieCongress2,
        WieCongress3
      ]
    },
    '2': {
      title: 'InnovateHer – Women’s Day Special 2024',
      date: 'March 8, 2025',
      time: '9:30 PM - 1:00 PM',
      venue: 'G-Block Seminar Hall, Anurag University',
      description: 'Hands-on workshops covering emerging technologies including AI, IoT, and sustainable engineering practices. Perfect for students looking to expand their technical skills.',
      fullDescription: `Held on International Women’s Day, InnovateHer was a celebration of innovation, empowerment, and inclusivity. This unique event featured inspiring talks by women professionals, brainstorming activities, and fun challenges designed to ignite creativity and confidence among participants. It created a safe and supportive space for women to express their ideas, share stories, and learn from each other. 
      
The event also included a mini innovation pitch competition where participants showcased their solutions to real-world problems. It concluded with a reflection on the role of women in reshaping the future of technology and engineering.`,
      images: [
        InnovateHerMain,
        InnovateHer1,
        InnovateHer2,
        InnovateHer3
      ]
    },
    '3': {
      title: 'JobQuest – Aptitude Webinar',
      date: 'February 28, 2025',
      time: '1:30 PM - 3:45 PM',
      venue: 'E-Block Auditorium, Anurag University',
      description: 'Launch event for our new mentorship program connecting students with industry professionals. Includes networking dinner and mentor-mentee matching.',
      fullDescription: `CodeQuest was an interactive online webinar organized to strengthen students' aptitude skills crucial for placement drives. The session focused on topics like problem-solving techniques, logical reasoning, and shortcuts for quantitative aptitude, which are key components in most campus recruitment tests. Delivered by an expert in aptitude training, the webinar provided valuable tips, practice questions, and real-time problem-solving demonstrations. 
      
Students actively engaged in the session, clarified doubts, and gained confidence to approach competitive exams. The initiative was especially appreciated by final-year students preparing for upcoming job interviews.
`,
      images: [
        JobQuestMain,
        JobQuest1,
        JobQuest2,
        JobQuest3
      ]
    },
    '4': {
      title: 'Inauguration Ceremony of IEEE WIE AG - AU',
      date: 'June 19, 2024',
      time: '10:00 PM - 4:00 PM',
      venue: 'D-Block Seminar-Hall, Anurag University',
      description: 'Panel discussion on how engineering can address global challenges, featuring speakers from humanitarian organizations and social impact startups.',
      fullDescription: `On June 18, 2024, the IEEE WIE Affinity Group at Anurag University was officially inaugurated in a grand ceremony attended by students, faculty, and IEEE dignitaries. The event began with the lighting of the lamp followed by speeches from respected IEEE officials and faculty advisors who highlighted the vision and goals of IEEE WIE. 
      
The newly formed team was introduced, and a roadmap for upcoming activities was shared. The launch symbolized a commitment to creating opportunities, providing mentorship, and fostering a supportive environment for women in STEM. The event concluded with a networking session and cultural performances that added vibrancy to the celebration.`,
      images: [
        InaugMain,
        Inaug1,
        Inaug2,
        Inaug3
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

      </main>
    </div>
  );
};

export default EventDetail;