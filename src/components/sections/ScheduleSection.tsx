import { Button } from "@/components/ui/button";
import { useEffect, useRef, useState } from "react";

export function ScheduleSection() {
  const scheduleItems = [
    {
      day: "DAY-1",
      date: "OCTOBER 1 2025",
      venue: "KIT Auditorium",
      delay: "0.1s"
    },
    {
      day: "DAY-2", 
      date: "OCTOBER 2 2025",
      venue: "Online - MS Teams",
      delay: "0.3s"
    },
    {
      day: "DAY-3",
      date: "OCTOBER 3 2025", 
      venue: "KIT Coimbatore Campus",
      delay: "0.5s"
    },
    {
      day: "DAY-4",
      date: "OCTOBER 4 2025",
      venue: "KIT Coimbatore Campus", 
      delay: "0.7s"
    }
  ];

  const [visibleItems, setVisibleItems] = useState<Set<number>>(new Set());
  const itemRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const index = parseInt(entry.target.getAttribute('data-index') || '0');
          if (entry.isIntersecting) {
            setVisibleItems(prev => new Set([...prev, index]));
          }
        });
      },
      {
        threshold: 0.3,
        rootMargin: '0px 0px -50px 0px'
      }
    );

    itemRefs.current.forEach((ref) => {
      if (ref) {
        observer.observe(ref);
      }
    });

    return () => observer.disconnect();
  }, []);

  return (
    <section id="schedule" className="py-20 quantum-network">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold text-quantum-gradient mb-16 text-center animate-fade-in-up">
          SCHEDULE
        </h2>
        
        <div className="max-w-3xl mx-auto mb-12">
          <p className="text-lg text-muted-foreground text-center leading-relaxed animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
            Qiskit Fall Fest is the world's largest collection of student-run quantum computing events. 
            As one of the 50 sponsored international universities selected to host it, we bring together 
            a collection of talented quantum enthusiasts along with KIT Quantum members to mark a 
            celebration of the advances that quantum computing has made in the past year, with experienced 
            quantum scientists and budding young quantum enthusiasts collaborating to showcase their 
            talents at the workshops and hackathons at the KIT Coimbatore campus. With open arms, we welcome 
            you to the event and are hoping to see you there!!
          </p>
        </div>

        <div className="relative timeline-quantum max-w-4xl mx-auto">
          {scheduleItems.map((item, index) => {
            const isVisible = visibleItems.has(index);
            const isEven = index % 2 === 0;
            
            return (
              <div 
                key={index}
                ref={(el) => (itemRefs.current[index] = el)}
                data-index={index}
                className={`flex flex-col md:flex-row items-center mb-16 transition-all duration-700 ease-out ${
                  isEven ? 'md:flex-row' : 'md:flex-row-reverse'
                } ${
                  isVisible 
                    ? 'opacity-100 translate-y-0' 
                    : 'opacity-0 translate-y-12'
                }`}
                style={{ 
                  animationDelay: isVisible ? item.delay : '0s',
                  transform: isVisible 
                    ? 'translateY(0)' 
                    : `translateY(${isEven ? '50px' : '-50px'})`
                }}
              >
                <div className={`flex-1 w-full md:w-auto ${isEven ? 'md:pr-8' : 'md:pl-8'} mb-4 md:mb-0`}>
                  <div className="card-quantum">
                    <h3 className="text-2xl font-bold text-foreground mb-2">
                      {item.day} {item.date}
                    </h3>
                    <p className="text-primary font-medium mb-4">
                      Venue: {item.venue}
                    </p>
                    <Button variant="outline" className="quantum-glow">
                      More Details
                    </Button>
                  </div>
                </div>
                
                <div className="flex-shrink-0 relative z-10">
                  <div className="quantum-dot"></div>
                </div>
                
                <div className="flex-1 hidden md:block"></div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}