import { motion } from 'motion/react';
import { Zap, Droplets, Flame } from 'lucide-react';

const experiences = [
  {
    icon: <Droplets size={48} className="text-electric" />,
    title: "THE FIZZ",
    desc: "A crisp, effervescent bite that awakens your senses instantly."
  },
  {
    icon: <Flame size={48} className="text-cherry" />,
    title: "THE BOLD",
    desc: "A complex, dark cherry profile with notes of vanilla and spice."
  },
  {
    icon: <Zap size={48} className="text-amber-500" />,
    title: "THE RUSH",
    desc: "The perfect amount of energy to keep you moving, creating, and living."
  }
];

export default function Experience() {
  return (
    <section id="experience" className="py-32 bg-bg-dark relative overflow-hidden">
      {/* Animated Bubbles Background */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(50)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-cherry/20 border border-cherry/30"
            style={{
              width: Math.random() * 40 + 10 + 'px',
              height: Math.random() * 40 + 10 + 'px',
              left: Math.random() * 100 + '%',
              bottom: -50,
            }}
            animate={{
              y: [0, -window.innerHeight * 1.5],
              x: [0, Math.random() * 100 - 50],
              opacity: [0, 0.8, 0],
            }}
            transition={{
              duration: Math.random() * 10 + 10,
              repeat: Infinity,
              ease: "linear",
              delay: Math.random() * 10,
            }}
          />
        ))}
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-20">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-7xl font-bebas tracking-wider text-cream"
          >
            SENSORY <span className="text-electric">OVERLOAD</span>
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="glass-card p-12 rounded-[2rem] flex flex-col items-center text-center group hover:border-electric/50 transition-colors duration-500"
            >
              <motion.div
                whileHover={{ scale: 1.2, rotate: 5 }}
                transition={{ type: "spring", stiffness: 300 }}
                className="mb-8 p-6 rounded-full bg-white/5 border border-white/10 group-hover:bg-white/10 transition-colors"
              >
                {exp.icon}
              </motion.div>
              <h3 className="text-4xl font-bebas tracking-wider text-cream mb-4 group-hover:text-electric transition-colors">
                {exp.title}
              </h3>
              <p className="text-cream/70 font-inter leading-relaxed">
                {exp.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
