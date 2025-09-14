import { useState, useEffect } from "react";
import { List, X } from "phosphor-react";
// Add your logo imports here
import leftLogo from "C:/Users/vyoma/Desktop/VScode/IEEE WIE WEBSITE MAIN/wie-sparkle-web/src/assets/cropped_circle_image.png"; // Update path as needed

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { label: "Home", href: "#home" },
    { label: "Faculty", href: "#faculty" },
    { label: "Members", href: "#members" },
    { label: "Achievements", href: "#achievements" },
    { label: "Events", href: "#events" },
    { label: "Goals", href: "#goals" },
    { label: "Contact", href: "#contact" },
  ];

  const handleNavClick = (href: string) => {
    setIsMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled ? "nav-blur py-4" : "py-6"
        }`}
      >
        <div className="container mx-auto px-6 flex items-center justify-between">
          <div className="text-2xl font-semibold tracking-tight">
            <div className="text-2xl font-semibold tracking-tight">
              <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent flex items-center gap-2">
                <img
                  src={leftLogo}
                  alt="Left Logo"
                  className="w-8 h-auto" // Adjust size as needed
                />
                IEEE WIE
              </span>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <button
                key={item.label}
                onClick={() => handleNavClick(item.href)}
                className="text-foreground/80 hover:text-foreground transition-colors duration-300 font-light tracking-tight"
              >
                {item.label}
              </button>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 text-foreground hover:text-primary transition-colors duration-300"
          >
            <List size={24} weight="light" />
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 z-40 transition-opacity duration-300 ${
          isMenuOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
      >
        <div
          className="absolute inset-0 bg-background/50 backdrop-blur-sm"
          onClick={() => setIsMenuOpen(false)}
        />

        {/* Mobile Menu Tray */}
        <div
          className={`absolute top-0 right-0 h-full w-80 max-w-sm glass-card transform transition-transform duration-500 ease-out ${
            isMenuOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <div className="p-6">
            <div className="flex items-center justify-between mb-8">
              <span className="text-xl font-semibold tracking-tight bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                Menu
              </span>
              <button
                onClick={() => setIsMenuOpen(false)}
                className="p-2 text-foreground hover:text-primary transition-colors duration-300"
              >
                <X size={24} weight="light" />
              </button>
            </div>

            <div className="space-y-4">
              {navItems.map((item, index) => (
                <button
                  key={item.label}
                  onClick={() => handleNavClick(item.href)}
                  className="block w-full text-left py-3 px-4 text-foreground/80 hover:text-foreground hover:bg-glass/50 rounded-lg transition-all duration-300 font-light tracking-tight"
                  style={{ animationDelay: `${index * 50}ms` }}
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navigation;
