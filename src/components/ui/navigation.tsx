import { useState } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  const eventItems = [
    { label: "About", href: "#about" },
    { label: "Partners", href: "#partners" },
    { label: "Schedule", href: "#schedule" },
    { label: "Speakers", href: "#speakers" },
    { label: "Venue", href: "#venue" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border/20">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center space-x-3 animate-fade-in-up">
            <div className="relative">
              <img
                src="/logo.gif"
                alt="KIT Coimbatore Logo" 
                className="w-12 h-12 hover-card-enhance"
              />
              <div className="absolute inset-0 bg-quantum-gradient rounded-full opacity-20 blur-sm"></div>
            </div>
            <div>
              <span className="text-lg font-bold text-quantum-gradient block">
                Qiskit Fall Fest
              </span>
              <span className="text-xs text-muted-foreground">
                KIT Coimbatore
              </span>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#home" className="quantum-glow text-foreground hover:text-primary transition-colors">
              Home
            </a>

            <DropdownMenu>
              <DropdownMenuTrigger className="flex items-center space-x-1 quantum-glow text-foreground hover:text-primary transition-colors">
                <span>Event</span>
                <ChevronDown className="w-4 h-4" />
              </DropdownMenuTrigger>
              <DropdownMenuContent className="bg-card/90 backdrop-blur-lg border border-border/20">
                {eventItems.map((item) => (
                  <DropdownMenuItem key={item.label}>
                    <a href={item.href} className="w-full quantum-glow">
                      {item.label}
                    </a>
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>

            <a href="#team" className="quantum-glow text-foreground hover:text-primary transition-colors">
              Team
            </a>

            <Button className="btn-quantum">
              Register
            </Button>
          </div>

          {/* Mobile Navigation Button */}
          <button 
            className="md:hidden p-2 quantum-glow"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation Menu */}
        {isOpen && (
          <div className="md:hidden py-4 space-y-4 animate-fade-in-up">
            <a href="#home" className="block quantum-glow text-foreground hover:text-primary transition-colors">
              Home
            </a>
            {eventItems.map((item) => (
              <a
                key={item.label}
                href={item.href} 
                className="block quantum-glow text-foreground hover:text-primary transition-colors pl-4"
              >
                {item.label}
              </a>
            ))}
            
            <Button className="btn-quantum w-full mt-4">
              Register
            </Button>
          </div>
        )}
      </div>
    </nav>
  );
}