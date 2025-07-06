import { Github, Instagram, Linkedin } from "lucide-react";
import { useEffect, useRef, useState } from "react";

export function TeamSection() {
  const teamMembers = [
    {
      name: "Nandan Patel",
      role: "Vice Captain",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop&crop=face",
      socials: [
        { icon: Github, href: "#" },
        { icon: Instagram, href: "#" },
        { icon: Linkedin, href: "#" }
      ]
    },
    {
      name: "Ashwin Sivakumar", 
      role: "Advisor",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&h=300&fit=crop&crop=face",
      socials: [
        { icon: Github, href: "#" },
        { icon: Linkedin, href: "#" }
      ]
    },
    {
      name: "Rithika",
      role: "Vice Captain",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=300&h=300&fit=crop&crop=face",
      socials: [
        { icon: Instagram, href: "#" },
        { icon: Linkedin, href: "#" }
      ]
    },
    {
      name: "Harishankar K Nair",
      role: "Captain", 
      image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=300&h=300&fit=crop&crop=face",
      socials: [
        { icon: Instagram, href: "#" },
        { icon: Linkedin, href: "#" }
      ]
    },
    {
      name: "Kashish Mahendra",
      role: "Team Manager",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=300&h=300&fit=crop&crop=face",
      socials: [
        { icon: Github, href: "#" },
        { icon: Linkedin, href: "#" }
      ]
    },
    {
      name: "Kailash Shankar",
      role: "Designing Lead",
      image: "https://images.unsplash.com/photo-1507591064344-4c6ce005b128?w=300&h=300&fit=crop&crop=face",
      socials: [
        { icon: Github, href: "#" },
        { icon: Linkedin, href: "#" }
      ]
    },
    {
      name: "Aansh Sahni",
      role: "Volunteer", 
      image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=300&h=300&fit=crop&crop=face",
      socials: [
        { icon: Github, href: "#" },
        { icon: Instagram, href: "#" },
        { icon: Linkedin, href: "#" }
      ]
    },
    {
      name: "Aurum Joshi",
      role: "Project Lead",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&h=300&fit=crop&crop=face",
      socials: [
        { icon: Github, href: "#" },
        { icon: Linkedin, href: "#" }
      ]
    }
  ];

  const [visibleItems, setVisibleItems] = useState<Set<number>>(new Set());
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          // Trigger animations for all team members when section becomes visible
          setVisibleItems(new Set([0, 1, 2, 3, 4, 5, 6, 7]));
        }
      },
      {
        threshold: 0.3,
        rootMargin: '0px 0px -50px 0px'
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} id="team" className="py-20 quantum-network">
      <div className="container mx-auto px-4">
        <h2 className={`text-4xl md:text-5xl font-bold text-quantum-gradient mb-16 text-center transition-all duration-700 ease-out ${
          visibleItems.size > 0 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
        }`}>
          TEAM
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
          {teamMembers.map((member, index) => (
            <div 
              key={index}
              className={`card-quantum text-center transition-all duration-700 ease-out ${
                visibleItems.has(index) ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-12 scale-95'
              }`}
              style={{ animationDelay: visibleItems.has(index) ? `${index * 0.1}s` : "0s" }}
            >
              <div className="relative w-24 h-24 mx-auto mb-4">
                <img 
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full rounded-full object-cover border-4 border-primary/30"
                />
                <div className="absolute inset-0 rounded-full bg-quantum-gradient opacity-20"></div>
              </div>
              
              <h3 className="text-lg font-bold text-foreground mb-1">
                {member.name}
              </h3>
              
              <p className="text-primary font-medium mb-4 text-sm">
                {member.role}
              </p>
              
              <div className="flex justify-center space-x-3">
                {member.socials.map((social, socialIndex) => {
                  const Icon = social.icon;
                  return (
                    <a 
                      key={socialIndex}
                      href={social.href}
                      className="w-8 h-8 rounded-full bg-muted/20 border border-border/30 flex items-center justify-center quantum-glow hover:bg-primary/20 transition-colors"
                    >
                      <Icon className="w-4 h-4" />
                    </a>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}