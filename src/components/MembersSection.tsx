import AnimatedSection from "./AnimatedSection";
import HorizontalScrollMembers from "./HorizontalScrollMembers";
import AnushaImage from "/images/meet the team pics individual/meet the team pics individual/anusha.jpg";
import RakshithImage from "/images/meet the team pics individual/meet the team pics individual/rakshith mtt.jpg";
import SanjanaImage from "/images/meet the team pics individual/meet the team pics individual/Sanjana.jpg";
import GagandeepImage from "/images/meet the team pics individual/meet the team pics individual/Gagandeep.jpg";
import KeerthiImage from "/images/meet the team pics individual/meet the team pics individual/keerthi mtt.jpg";
import TripuraImage from "/images/meet the team pics individual/meet the team pics individual/tsr mtt.jpg";
import BindhuImage from "/images/meet the team pics individual/meet the team pics individual/bindu mtt.jpg";
import SahitiImage from "/images/meet the team pics individual/meet the team pics individual/sahiti mtt.jpg";
import HarshithaImage from "/images/meet the team pics individual/meet the team pics individual/harshitha mtt.jpg";
import AbhishekImage from "/images/meet the team pics individual/meet the team pics individual/abhishek.jpg";

import LaasyaImage from "/images/meet the team pics individual/meet the team pics individual/laasya mtt.jpg";
import TharunImage from "/images/meet the team pics individual/meet the team pics individual/tarun.jpg";
import SnehaImage from "/images/meet the team pics individual/meet the team pics individual/sneha mtt.jpg";
import SupriyaImage from "/images/meet the team pics individual/meet the team pics individual/supriya.jpg";
import BhargavImage from "/images/meet the team pics individual/meet the team pics individual/bhargav.jpg";
import VyomakeshImage from "/images/meet the team pics individual/meet the team pics individual/vyom.jpg";
import ShashankImage from "/images/meet the team pics individual/meet the team pics individual/shashank.jpg";
import AdityaImage from "/images/meet the team pics individual/meet the team pics individual/aditya.jpg";
import SriHarshithaImage from "/images/meet the team pics individual/meet the team pics individual/harshitha mtt.jpg";
import SaashaImage from "/images/meet the team pics individual/meet the team pics individual/saasha mtt.jpg";
import VipulImage from "/images/meet the team pics individual/meet the team pics individual/vipul mtt.jpg";



// ...existing code...
const MembersSection = () => {
  // Mock data - in real app this would come from an API
  const teamLeads = [
    {
      id: 1,
      name: "K.N.L.Anusha",
      role: "Chair",
      description: "Inspiring excellence, shaping the future.",
      image: AnushaImage,
    },
    {
      id: 2,
      name: "Rakshith",
      role: "Vice Chair",
      description:
        "Guiding progress, one step at a time.",
      image: RakshithImage,
    },
    {
      id: 3,
      name: "Sanjana Maurya",
      role: "Secretary",
      description:
        "Turning ideas into action, words into results.",
      image: SanjanaImage,
    },
    {
      id: 4,
      name: "Gagandeep Kaur",
      role: "Treasurer",
      description:
        "Where careful planning meets bold aspirations.",
      image: GagandeepImage,
    },
    {
      id: 4,
      name: "Abhishek",
      role: "Web Master",
      description:
        "Bringing ideas to life in the digital realm.",
      image: AbhishekImage,
    },
    {
      id: 6,
      name: "Keerthi Yabaluri",
      role: "PR & Branding Lead",
      description:
        "The voice of our club, crafting connections that resonate far beyond words.",
      image: KeerthiImage,
    },
    {
      id: 7,
      name: "Tripura Simha Reddy",
      role: "Designing Lead",
      description:
        "I am not Cunning, My Gole is to be Ontrepenure",
      image: TripuraImage,
    },
    {
      id: 8,
      name: "Bindhu Gandrakota",
      role: "Social Media Lead",
      description:
        "Curators of digital presence, sparking conversations in the virtual world.",
      image: BindhuImage,
    },
    {
      id: 9,
      name: "P.Sahiti Reddy",
      role: "Technical Lead",
      description:
        "The backbone of innovation, ensuring seamless experiences powered by expertise.",
      image: SahitiImage,
    },
    {
      id: 10,
      name: "Depa Harshitha",
      role: "Content Writing Lead",
      description:
        "Wordsmiths weaving stories, creating content that inspires action and ignites curiosity.",
      image: HarshithaImage,
    },
  ];

  // Updated members array with imported images
  const members = [
    {
      id: 11,
      name: "V.Laasya Reddy",
      role: "Social Media Team Member",
      image: LaasyaImage,
    },
    {
      id: 12,
      name: "V.Tharun Reddy",
      role: "Social Media Team Member",
      image: TharunImage,
    },
    {
      id: 13,
      name: "Y.Sneha",
      role: "PR &Branding Team Member",
      image: SnehaImage,
    },
    {
      id: 14,
      name: "K.Supriya",
      role: "PR &Branding Team Member",
      image: SupriyaImage,
    },
    {
      id: 15,
      name: "Bhargav Nune",
      role: "Technical Team Member",
      image: BhargavImage,
    },
    {
      id: 16,
      name: "T.Vyomakesh",
      role: "Designing Team Member",
      image: VyomakeshImage,
    },
    {
      id: 17,
      name: "P.Shashank Reddy",
      role: "Designing Team Member",
      image: ShashankImage,
    },
    {
      id: 18,
      name: "K.Aditya",
      role: "Designing Team Member",
      image: AdityaImage,
    },
    {
      id: 19,
      name: "Balsuguri Sri Harshitha",
      role: "Content Writing Team Member",
      image: SriHarshithaImage,
    },
    {
      id: 20,
      name: "A.Saasha",
      role: "Content Writing Team Member",
      image: SaashaImage,
    },
    {
      id: 21,
      name: "G.Vipul Karthik Reddy",
      role: "PR & Branding Team Member",
      image: VipulImage,
    },
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
              Meet the passionate members leading IEEE WIE and driving innovation
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
