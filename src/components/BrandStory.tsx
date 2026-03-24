import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';

export default function BrandStory() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const y1 = useTransform(scrollYProgress, [0, 1], [100, -100]);
  const y2 = useTransform(scrollYProgress, [0, 1], [-50, 50]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);

  return (
    <section id="story" ref={containerRef} className="relative py-32 bg-cherry-dark overflow-hidden">
      {/* Texture Overlay */}
      <div className="absolute inset-0 opacity-10 mix-blend-overlay pointer-events-none" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noiseFilter%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.65%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noiseFilter)%22/%3E%3C/svg%3E")' }} />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Visual Side */}
          <div className="relative h-[600px] rounded-[3rem] overflow-hidden glass-card border-white/5 group">
            <motion.div style={{ y: y1, opacity }} className="absolute inset-0 bg-gradient-to-br from-cherry to-brown opacity-80" />
            
            {/* Abstract representation of 23 flavors */}
            <div className="absolute inset-0 flex items-center justify-center">
              <motion.div 
                animate={{ rotate: 360 }}
                transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
                className="relative w-96 h-96"
              >
                {[...Array(23)].map((_, i) => (
                  <motion.div
                    key={i}
                    className="absolute w-4 h-4 rounded-full bg-electric/80 blur-[2px]"
                    style={{
                      top: '50%',
                      left: '50%',
                      transform: `rotate(${i * (360 / 23)}deg) translateY(-140px)`,
                    }}
                    animate={{
                      scale: [1, 1.5, 1],
                      opacity: [0.5, 1, 0.5],
                    }}
                    transition={{
                      duration: 2 + Math.random() * 2,
                      repeat: Infinity,
                      delay: i * 0.1,
                    }}
                  />
                ))}
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-8xl font-bebas text-cream text-glow">23</span>
                </div>
              </motion.div>
            </div>
          </div>

          {/* Text Side */}
          <div className="flex flex-col space-y-8">
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
            >
              <h4 className="text-electric font-bold uppercase tracking-widest text-sm mb-4">The Legacy</h4>
              <h2 className="text-5xl md:text-7xl font-bebas leading-tight text-cream mb-6">
                A SYMPHONY OF <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-electric to-cream">23 FLAVORS</span>
              </h2>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="space-y-6 text-lg text-cream/80 font-inter font-light leading-relaxed"
            >
              <p>
                Born from a desire to break the mold, Cherry Pop isn't just a beverage—it's an experience. We spent years perfecting the exact ratio of 23 distinct flavor notes, creating a profile that defies categorization.
              </p>
              <p>
                From the initial burst of wild cherry to the subtle hints of vanilla, amaretto, and dark spice, every sip is a journey. It's not cola. It's not fruit punch. It's something entirely its own.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="pt-8 border-t border-white/10"
            >
              <div className="flex items-center gap-8">
                <div>
                  <h5 className="text-4xl font-bebas text-electric">1885</h5>
                  <p className="text-xs uppercase tracking-widest text-cream/60 mt-1">Established</p>
                </div>
                <div className="w-px h-12 bg-white/10" />
                <div>
                  <h5 className="text-4xl font-bebas text-electric">23</h5>
                  <p className="text-xs uppercase tracking-widest text-cream/60 mt-1">Secret Flavors</p>
                </div>
                <div className="w-px h-12 bg-white/10" />
                <div>
                  <h5 className="text-4xl font-bebas text-electric">1</h5>
                  <p className="text-xs uppercase tracking-widest text-cream/60 mt-1">Unique Taste</p>
                </div>
              </div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
