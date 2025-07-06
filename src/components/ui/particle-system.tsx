import { useEffect, useState } from "react";

interface ParticleProps {
  id: number;
}

function Particle({ id }: ParticleProps) {
  const [style, setStyle] = useState({});

  useEffect(() => {
    const randomDelay = Math.random() * 15;
    const randomSize = Math.random() * 3 + 2;
    const randomOpacity = Math.random() * 0.6 + 0.2;
    const randomLeft = Math.random() * 100;

    setStyle({
      left: `${randomLeft}%`,
      width: `${randomSize}px`,
      height: `${randomSize}px`,
      animationDelay: `${randomDelay}s`,
      opacity: randomOpacity,
    });
  }, []);

  return <div className="particle" style={style} />;
}

export function ParticleSystem() {
  const particles = Array.from({ length: 15 }, (_, i) => i);

  return (
    <div className="particles">
      {particles.map((id) => (
        <Particle key={id} id={id} />
      ))}
    </div>
  );
}

export function MorphingShape({ className }: { className?: string }) {
  return (
    <div className={`morphing-shape ${className}`} />
  );
}