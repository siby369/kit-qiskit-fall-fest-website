import { Button } from "@/components/ui/button";
import { ParticleSystem, MorphingShape } from "@/components/ui/particle-system";

export function HeroSection() {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center quantum-network relative">
      <ParticleSystem />
      
      {/* Morphing Background Shapes */}
      <MorphingShape className="absolute top-10 left-10 w-32 h-32" />
      <MorphingShape className="absolute bottom-20 right-20 w-24 h-24" />
      <MorphingShape className="absolute top-1/3 right-1/4 w-16 h-16" />
      
      <div className="container mx-auto px-4 text-center relative z-10">
        <div className="max-w-4xl mx-auto space-y-8">
          
          {/* Main Title with Enhanced Animation */}
          <div className="space-y-6 animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
            <h1 className="text-6xl md:text-8xl font-bold">
              <span className="text-foreground hover:animate-text-shimmer transition-all duration-300">KIT </span>
              <span className="text-quantum-gradient relative">
                Qiskit
                <div className="absolute inset-0 bg-quantum-gradient opacity-20 blur-xl"></div>
              </span>
            </h1>
            <h2 className="text-4xl md:text-6xl font-bold relative">
              <span className="typing block text-quantum-gradient">Fall Fest 2025</span>
            </h2>
          </div>

          {/* Badge and Date with Enhanced Effects */}
          <div className="flex flex-col md:flex-row items-center justify-center gap-12 animate-scale-in" style={{ animationDelay: "0.4s" }}>
            <div className="relative animate-slide-in-left-fast">
              <div className="relative inline-block mx-auto">
                <img 
                  src="/logo.gif" 
                  alt="Event Logo" 
                  className="w-40 h-40 md:w-48 md:h-48 rounded-full block mx-auto"
                />
                <div className="orbit-ring"></div>
                <div className="orbit-ring secondary"></div>
                <div className="orbit-ring tertiary"></div>
              </div>
            </div>
            
            <div className="text-center relative animate-slide-in-right-fast">
              <div className="absolute inset-0 bg-quantum-gradient opacity-10 blur-xl rounded-lg"></div>
              <div className="relative z-10 p-6">
                <div className="text-4xl md:text-5xl font-bold text-foreground mb-4">
                  September
                </div>
                <div className="text-5xl md:text-7xl font-bold mb-2 text-secondary">
                  1st - 4th
                </div>
                <div className="text-lg text-muted-foreground">
                  KIT Coimbatore
                </div>
              </div>
            </div>
          </div>

          {/* Enhanced CTA Button */}
          <div className="animate-fade-in-up" style={{ animationDelay: "0.6s" }}>
            <Button size="lg" className="btn-quantum text-2xl px-16 py-8 relative overflow-hidden group">
              <span className="relative z-10">REGISTER NOW</span>
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
            </Button>
          </div>

          {/* Enhanced Quantum Elements */}
          <div className="absolute top-20 left-10 w-24 h-24 hover-card-enhance" style={{ animationDelay: "1s" }}>
            <div className="w-full h-full bg-quantum-gradient rounded-full opacity-20 blur-sm relative">
              <div className="absolute inset-2 border border-primary/30 rounded-full"></div>
            </div>
          </div>
          <div className="absolute bottom-32 right-16 w-20 h-20 hover-card-enhance" style={{ animationDelay: "2s" }}>
            <div className="w-full h-full bg-secondary/30 rounded-full opacity-30 blur-sm relative">
              <div className="absolute inset-2 border border-secondary/40 rounded-full"></div>
            </div>
          </div>
          <div className="absolute top-1/3 right-20 w-16 h-16 hover-card-enhance" style={{ animationDelay: "3s" }}>
            <div className="w-full h-full bg-primary/20 rounded-full opacity-40 blur-sm relative">
              <div className="absolute inset-1 border border-primary/50 rounded-full"></div>
            </div>
          </div>
          
          {/* Additional Quantum Orbs */}
          <div className="absolute top-2/3 left-1/4 w-12 h-12 hover-card-enhance" style={{ animationDelay: "4s" }}>
            <div className="w-full h-full bg-accent/25 rounded-full opacity-50 blur-sm pulse-glow"></div>
          </div>
          <div className="absolute bottom-20 left-1/3 w-8 h-8 hover-card-enhance" style={{ animationDelay: "5s" }}>
            <div className="w-full h-full bg-primary/30 rounded-full opacity-60 blur-sm pulse-glow"></div>
          </div>
        </div>
      </div>
    </section>
  );
}