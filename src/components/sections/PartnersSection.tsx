import { useEffect, useRef, useState } from "react";
// Using public asset for IBM Qiskit logo

export function PartnersSection() {
  const [visibleItems, setVisibleItems] = useState<Set<number>>(new Set());
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          // Trigger animations for all items when section becomes visible
          setVisibleItems(new Set([0, 1]));
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
    <section ref={sectionRef} id="partners" className="py-20 quantum-network">
      <div className="container mx-auto px-4">
        <div className={`text-center mb-16 transition-all duration-700 ease-out ${
          visibleItems.size > 0 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
        }`}>
          <h2 className="text-5xl md:text-6xl font-bold text-quantum-gradient mb-6 relative">
            PARTNERS
            <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 w-32 h-1 bg-quantum-gradient rounded-full"></div>
          </h2>
          <div className="w-20 h-20 mx-auto mb-8">
            <div className="w-full h-full bg-quantum-gradient rounded-full opacity-20 blur-lg pulse-glow"></div>
          </div>
        </div>
        
        <div className="space-y-16">
          {/* Quantumplators */}
          <div className={`flex flex-col md:flex-row items-center gap-8 transition-all duration-700 ease-out ${
            visibleItems.has(0) ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-12'
          }`} style={{ animationDelay: visibleItems.has(0) ? "0.2s" : "0s" }}>
            <div className="flex-shrink-0">
              <div className="w-32 h-32 md:w-40 md:h-40">
                <img 
                  src="/Quantumplators.webp" 
                  alt="Quantumplators Logo" 
                  className="w-full h-full object-contain pulse-glow hover-card-enhance"
                />
              </div>
            </div>
            
            <div className="flex-1 text-center md:text-left">
              <h3 className="text-3xl md:text-4xl font-bold text-quantum-gradient mb-6">
                Quantumplators
              </h3>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Introducing Quantumplators, the pioneering Quantum Computing Special Team at KIT Coimbatore. 
                Quantumplators is a dynamic force driven by passionate college students, charting new 
                territories in the ever-expanding world of quantum computing. Our mission is to propel 
                KIT Coimbatore into the quantum era by fostering quantum literacy, preparing for cutting-edge 
                quantum hackathons, and providing ample research opportunities. With our dedicated student 
                leaders at the helm, we aim to lead the charge in quantum exploration.
              </p>
            </div>
          </div>

          {/* KIT Qiskit */}
          <div className={`flex flex-col md:flex-row-reverse items-center gap-8 transition-all duration-700 ease-out ${
            visibleItems.has(1) ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-12'
          }`} style={{ animationDelay: visibleItems.has(1) ? "0.4s" : "0s" }}>
            <div className="flex-shrink-0">
              <div className="w-32 h-32 md:w-40 md:h-40">
                <img 
                  src="/IBM%20Qiskit.png" 
                  alt="IBM Qiskit" 
                  className="w-full h-full object-contain pulse-glow hover-card-enhance" 
                />
              </div>
            </div>
            
            <div className="flex-1 text-center md:text-right">
              <h3 className="text-3xl md:text-4xl font-bold text-quantum-gradient mb-6">
                IBM Qiskit
              </h3>
              <p className="text-lg text-muted-foreground leading-relaxed">
                IBM Qiskit is an open-source quantum computing framework that enables researchers, 
                developers, and quantum enthusiasts to work with quantum computers. Through partnerships 
                with educational institutions worldwide, IBM Qiskit fosters quantum education and research, 
                making quantum computing accessible to the next generation of innovators and scientists.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}