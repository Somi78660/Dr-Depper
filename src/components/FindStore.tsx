import { motion } from 'motion/react';
import { MapPin, Search, Navigation } from 'lucide-react';

export default function FindStore() {
  return (
    <section id="find-us" className="py-32 bg-bg-dark relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Text Content */}
          <div className="flex flex-col space-y-8 order-2 lg:order-1">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h4 className="text-electric font-bold uppercase tracking-widest text-sm mb-4">Availability</h4>
              <h2 className="text-5xl md:text-7xl font-bebas leading-[0.9] tracking-tight text-cream mb-6">
                FIND YOUR <br />
                <span className="text-cherry">FIX</span>
              </h2>
              <p className="text-lg text-cream/70 font-inter font-light max-w-md">
                Cherry Pop is stocked in over 50,000 locations nationwide. Enter your zip code to find the closest retailer, or order directly for doorstep delivery.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="glass p-2 rounded-full flex items-center max-w-md w-full"
            >
              <div className="pl-6 pr-4 text-cream/50">
                <MapPin size={20} />
              </div>
              <input 
                type="text" 
                placeholder="Enter Zip Code or City" 
                className="bg-transparent border-none outline-none text-cream font-inter w-full placeholder:text-cream/30"
              />
              <button className="bg-electric hover:bg-cherry text-white p-4 rounded-full transition-colors duration-300 ml-2">
                <Search size={20} />
              </button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="flex items-center gap-4 pt-4"
            >
              <button className="flex items-center gap-2 text-sm font-bold uppercase tracking-widest text-electric hover:text-cream transition-colors">
                <Navigation size={16} /> Use Current Location
              </button>
            </motion.div>
          </div>

          {/* Map UI Preview */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, rotate: 2 }}
            whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, type: "spring", bounce: 0.4 }}
            className="order-1 lg:order-2 relative h-[500px] rounded-[3rem] overflow-hidden glass-card border-white/10 p-4 group"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-cherry/20 to-bg-dark/80 z-10 pointer-events-none" />
            
            {/* Fake Map Background */}
            <div className="w-full h-full rounded-[2.5rem] bg-[#1a1a1a] relative overflow-hidden">
              {/* Grid lines to simulate map */}
              <div className="absolute inset-0" style={{ backgroundImage: 'linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px)', backgroundSize: '40px 40px' }} />
              
              {/* Map Pins */}
              {[...Array(5)].map((_, i) => (
                <motion.div
                  key={i}
                  initial={{ y: -20, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.5 + i * 0.1, type: "spring" }}
                  className="absolute flex flex-col items-center"
                  style={{
                    top: `${20 + Math.random() * 60}%`,
                    left: `${20 + Math.random() * 60}%`,
                  }}
                >
                  <div className={`w-12 h-12 rounded-full flex items-center justify-center shadow-lg ${i === 0 ? 'bg-electric animate-pulse box-glow' : 'bg-cherry'}`}>
                    <MapPin size={24} className="text-white" />
                  </div>
                  {i === 0 && (
                    <div className="mt-2 glass px-3 py-1 rounded-full text-xs font-bold text-cream whitespace-nowrap">
                      0.2 miles away
                    </div>
                  )}
                </motion.div>
              ))}

              {/* User Location */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                <div className="w-6 h-6 bg-blue-500 rounded-full border-4 border-white shadow-[0_0_20px_rgba(59,130,246,0.8)]" />
                <div className="absolute inset-0 bg-blue-500 rounded-full animate-ping opacity-50" />
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
