import Particles, { ParticlesProvider } from '@tsparticles/react';
import { loadSlim } from '@tsparticles/slim';
import type { Engine, ISourceOptions } from '@tsparticles/engine';

const initParticles = async (engine: Engine) => {
  await loadSlim(engine);
};

const heroParticleOptions: ISourceOptions = {
  fullScreen: { enable: false },
  background: { color: { value: 'transparent' } },
  fpsLimit: 60,
  detectRetina: true,
  particles: {
    number: {
      value: 45,
      density: { enable: true, width: 1200, height: 800 },
    },
    color: { value: ['#ffffff', '#8FB0C0', '#B8CDD7'] },
    shape: { type: 'circle' },
    opacity: {
      value: { min: 0.15, max: 0.5 },
      animation: { enable: true, speed: 0.4, sync: false },
    },
    size: {
      value: { min: 1, max: 2.5 },
    },
    move: {
      enable: true,
      speed: 0.45,
      direction: 'top',
      random: true,
      straight: false,
      outModes: { default: 'out' },
    },
  },
};

export default function HeroParticles() {
  return (
    <ParticlesProvider init={initParticles}>
      <Particles
        id="hero-particles"
        className="absolute inset-0 z-[1] pointer-events-none"
        options={heroParticleOptions}
      />
    </ParticlesProvider>
  );
}
