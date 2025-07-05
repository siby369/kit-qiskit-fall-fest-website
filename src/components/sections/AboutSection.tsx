import { useEffect, useRef, useState } from "react";

export function AboutSection() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
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
    <section ref={sectionRef} id="about" className="py-20 quantum-network">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className={`text-center mb-12 transition-all duration-700 ease-out ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
          }`}>
            <h2 className="text-5xl md:text-6xl font-bold text-quantum-gradient mb-6 relative">
              ABOUT THE EVENT
              <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 w-32 h-1 bg-quantum-gradient rounded-full"></div>
            </h2>
            <div className="w-24 h-24 mx-auto mb-8">
              <div className="w-full h-full bg-quantum-gradient rounded-full opacity-20 blur-lg pulse-glow"></div>
            </div>
          </div>
          
          <div className={`card-quantum hover-card-enhance transition-all duration-700 ease-out ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
          }`} style={{ animationDelay: isVisible ? "0.2s" : "0s" }}>
            <p className="text-lg md:text-xl leading-relaxed text-muted-foreground">
              Qiskit Fall Fest is the world's largest collection of student-run quantum computing events. 
              As one of the 50 sponsored international universities selected to host it, we bring together 
              a collection of talented quantum enthusiasts along with IBM Quantum members to mark a 
              celebration of the advances that quantum computing has made in the past year, with experienced 
              quantum scientists and budding young quantum enthusiasts collaborating to showcase their 
              talents at the workshops and hackathons at the KIT Coimbatore campus. With open arms, we welcome 
              you to the event and are hoping to see you there!!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}