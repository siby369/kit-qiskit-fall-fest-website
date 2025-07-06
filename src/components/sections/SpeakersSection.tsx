import { Github, Linkedin, Twitter } from "lucide-react";
import { useEffect, useRef, useState } from "react";

export function SpeakersSection() {
  const speakers = [
    {
      name: "Pawel Gora",
      title: "University of Warsaw",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop&crop=face",
      socials: [
        { icon: Twitter, href: "#" },
        { icon: Github, href: "#" },
        { icon: Linkedin, href: "#" }
      ],
      delay: "0.1s"
    },
    {
      name: "Alain Chancé", 
      title: "Founder CEO Alainquant LLC",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&h=300&fit=crop&crop=face",
      socials: [
        { icon: Twitter, href: "#" },
        { icon: Linkedin, href: "#" }
      ],
      delay: "0.3s"
    },
    {
      name: "L Venkata Subramaniam",
      title: "KIT Quantum India Leader", 
      image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=300&h=300&fit=crop&crop=face",
      socials: [
        { icon: Linkedin, href: "#" }
      ],
      delay: "0.5s"
    }
  ];

  const [visibleItems, setVisibleItems] = useState<Set<number>>(new Set());
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          // Trigger animations for all speakers when section becomes visible
          setVisibleItems(new Set([0, 1, 2]));
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
    <section ref={sectionRef} id="speakers" className="py-20 quantum-network">
      <div className="container mx-auto px-4">
        <h2 className={`text-4xl md:text-5xl font-bold text-quantum-gradient mb-16 text-center transition-all duration-700 ease-out ${
          visibleItems.size > 0 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
        }`}>
          SPEAKERS
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {speakers.map((speaker, index) => (
            <div 
              key={index}
              className={`card-quantum text-center transition-all duration-700 ease-out ${
                visibleItems.has(index) ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-12 scale-95'
              }`}
              style={{ animationDelay: visibleItems.has(index) ? speaker.delay : "0s" }}
            >
              <div className="relative w-32 h-32 mx-auto mb-6">
                <img 
                  src={speaker.image}
                  alt={speaker.name}
                  className="w-full h-full rounded-full object-cover border-4 border-primary/30"
                />
                <div className="absolute inset-0 rounded-full bg-quantum-gradient opacity-20"></div>
              </div>
              
              <h3 className="text-xl font-bold text-foreground mb-2">
                {speaker.name}
              </h3>
              
              <p className="text-primary font-medium mb-6">
                {speaker.title}
              </p>
              
              <div className="flex justify-center space-x-4">
                {speaker.socials.map((social, socialIndex) => {
                  const Icon = social.icon;
                  return (
                    <a 
                      key={socialIndex}
                      href={social.href}
                      className="w-10 h-10 rounded-full bg-muted/20 border border-border/30 flex items-center justify-center quantum-glow hover:bg-primary/20 transition-colors"
                    >
                      <Icon className="w-5 h-5" />
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