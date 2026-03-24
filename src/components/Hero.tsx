import { motion } from 'motion/react';
import { ChevronDown } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background Video/Gradient */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-bg-dark via-cherry-dark/80 to-bg-dark opacity-90 mix-blend-multiply" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,42,42,0.15)_0%,transparent_60%)]" />
        {/* Animated Particles/Bubbles */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-2 h-2 rounded-full bg-electric/30 blur-[1px]"
              initial={{
                x: Math.random() * window.innerWidth,
                y: window.innerHeight + 100,
                scale: Math.random() * 0.5 + 0.5,
                opacity: Math.random() * 0.5 + 0.2,
              }}
              animate={{
                y: -100,
                x: `calc(${Math.random() * 100}vw - 50vw)`,
              }}
              transition={{
                duration: Math.random() * 10 + 10,
                repeat: Infinity,
                ease: "linear",
                delay: Math.random() * 5,
              }}
            />
          ))}
        </div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Text Content */}
        <div className="flex flex-col items-start space-y-8 order-2 lg:order-1">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          >
            <h1 className="text-7xl md:text-9xl font-bebas leading-[0.85] tracking-tight text-cream text-glow">
              TASTE<br />
              <span className="text-electric">THE BOLD</span>
            </h1>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
            className="text-lg md:text-xl text-cream/80 max-w-md font-inter font-light"
          >
            Experience the unapologetic rush of 23 signature flavors. 
            Crafted for those who don't settle for ordinary.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <a href="#checkout" className="bg-electric hover:bg-cherry text-white px-8 py-4 rounded-full font-bold uppercase tracking-widest text-sm transition-all duration-300 hover:scale-105 box-glow flex items-center justify-center group">
              Try It Now
              <motion.span
                className="ml-2 inline-block"
                animate={{ x: [0, 5, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                →
              </motion.span>
            </a>
            <button className="glass hover:bg-white/10 text-cream px-8 py-4 rounded-full font-bold uppercase tracking-widest text-sm transition-all duration-300 flex items-center justify-center">
              Find Near You
            </button>
          </motion.div>
        </div>

        {/* Floating Product Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8, rotate: -10 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ duration: 1.2, delay: 0.3, type: "spring", bounce: 0.4 }}
          className="relative order-1 lg:order-2 flex justify-center lg:justify-end h-[50vh] lg:h-[80vh]"
        >
          {/* Glow behind can */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 md:w-96 md:h-96 bg-electric/40 rounded-full blur-[100px] pointer-events-none" />
          
          <motion.div
            animate={{ y: [-15, 15, -15], rotate: [-2, 2, -2] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            className="relative z-10 h-full max-h-[600px] aspect-[1/2]"
          >
            {/* Placeholder for the actual can image. Using a styled div for now to represent the can */}
            <div className="w-full h-full bg-gradient-to-b from-cherry to-cherry-dark rounded-[40px] shadow-2xl border-2 border-white/20 flex flex-col items-center justify-center overflow-hidden relative">
               {/* Can details */}
               <div className="absolute top-0 w-full h-8 bg-gray-300 rounded-t-[38px] border-b border-gray-400" />
               <div className="absolute bottom-0 w-full h-6 bg-gray-300 rounded-b-[38px] border-t border-gray-400" />
               
               <h2 className="text-6xl font-bebas -rotate-90 text-cream tracking-widest text-glow whitespace-nowrap">
                 CHERRY POP
               </h2>
               
               {/* Condensation drops */}
               {[...Array(30)].map((_, i) => (
                 <div 
                   key={i}
                   className="absolute rounded-full bg-white/30 backdrop-blur-sm"
                   style={{
                     width: Math.random() * 6 + 2 + 'px',
                     height: Math.random() * 8 + 3 + 'px',
                     top: Math.random() * 100 + '%',
                     left: Math.random() * 100 + '%',
                     opacity: Math.random() * 0.5 + 0.3
                   }}
                 />
               ))}
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center text-cream/50"
      >
        <span className="text-xs uppercase tracking-widest mb-2 font-medium">Scroll to explore</span>
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
          <ChevronDown size={24} />
        </motion.div>
      </motion.div>
    </section>
  );
}
