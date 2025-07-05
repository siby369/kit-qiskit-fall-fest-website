import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Instagram, Linkedin, Send } from "lucide-react";
import { useEffect, useRef, useState } from "react";

export function VenueSection() {
  const coordinators = [
    { name: "Nandan Patel", phone: "9099906520" },
    { name: "Hari Shankar K Nair", phone: "6282382764" },
    { name: "Ashwin Sivakumar", phone: "6360910426" },
    { name: "Rithika N", phone: "9345459249" }
  ];

  const [visibleItems, setVisibleItems] = useState<Set<number>>(new Set());
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          // Trigger animations for all sections when venue section becomes visible
          setVisibleItems(new Set([0, 1, 2, 3]));
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
    <section ref={sectionRef} id="venue" className="py-20 quantum-network">
      <div className="container mx-auto px-4">
        <h2 className={`text-4xl md:text-5xl font-bold text-quantum-gradient mb-16 text-center transition-all duration-700 ease-out ${
          visibleItems.size > 0 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
        }`}>
          VENUE
        </h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 max-w-7xl mx-auto">
          {/* Contact Us */}
          <div className={`transition-all duration-700 ease-out ${
            visibleItems.has(0) ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-12'
          }`} style={{ animationDelay: visibleItems.has(0) ? "0.2s" : "0s" }}>
            <h3 className="text-2xl font-bold text-quantum-gradient mb-8">
              CONTACT US
            </h3>
            
            <div className="space-y-6">
              <div>
                <h4 className="text-lg font-semibold text-foreground mb-4">
                  STUDENT COORDINATOR
                </h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {coordinators.map((coordinator, index) => (
                    <div key={index} className="card-quantum">
                      <p className="font-medium text-foreground">{coordinator.name}</p>
                      <p className="text-primary">{coordinator.phone}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Map */}
          <div className={`transition-all duration-700 ease-out ${
            visibleItems.has(1) ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-12 scale-95'
          }`} style={{ animationDelay: visibleItems.has(1) ? "0.4s" : "0s" }}>
            <div className="card-quantum h-80">
              <div className="w-full h-full rounded-lg overflow-hidden border border-border/30">
                <iframe
                  title="Venue Location Map"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3916.5224232695145!2d77.08176877608413!3d10.999375089163308!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba85695d582db7b%3A0x55286f9c43c3294d!2sKalaignarKarunanidhi%20Institute%20Of%20Technology!5e0!3m2!1sen!2sin!4v1755590624344!5m2!1sen!2sin"
                  className="w-full h-full"
                  style={{ border: 0 }}
                  loading="lazy"
                  allowFullScreen
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </div>
          </div>

          {/* Get in Touch */}
          <div className={`transition-all duration-700 ease-out ${
            visibleItems.has(2) ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-12'
          }`} style={{ animationDelay: visibleItems.has(2) ? "0.6s" : "0s" }}>
            <h3 className="text-2xl font-bold text-foreground mb-8">
              Get in Touch
            </h3>
            
            <div className="card-quantum space-y-6">
              <div className="flex gap-2">
                <Input 
                  placeholder="Your Email" 
                  className="flex-1 bg-background/50 border-border/30"
                />
                <Button className="quantum-glow">
                  <Send className="w-4 h-4" />
                </Button>
              </div>
              
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <Instagram className="w-5 h-5 text-primary" />
                  <span className="text-muted-foreground">@the_quantumplators</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Linkedin className="w-5 h-5 text-primary" />
                  <span className="text-muted-foreground">quantumplators</span>
                </div>
              </div>
            </div>
          </div>
        </div>


      </div>
    </section>
  );
}