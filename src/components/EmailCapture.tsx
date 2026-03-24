import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';

export default function EmailCapture() {
  return (
    <section className="py-24 bg-gradient-to-b from-bg-dark via-cherry-dark/50 to-bg-dark relative overflow-hidden">
      <div className="max-w-4xl mx-auto px-6 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, type: "spring" }}
          className="glass-card p-12 md:p-20 rounded-[3rem] border-electric/20 relative overflow-hidden group"
        >
          {/* Animated Background Glow */}
          <div className="absolute inset-0 bg-gradient-to-br from-electric/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
          
          <h2 className="text-5xl md:text-7xl font-bebas tracking-wider text-cream mb-6">
            JOIN THE <span className="text-electric">CLUB</span>
          </h2>
          <p className="text-lg text-cream/80 font-inter max-w-xl mx-auto mb-10">
            Get 15% off your first online order, plus early access to limited edition flavors and exclusive merch drops.
          </p>

          <form className="flex flex-col sm:flex-row gap-4 max-w-2xl mx-auto relative z-20">
            <input 
              type="email" 
              placeholder="Enter your email address" 
              className="flex-1 bg-white/5 border border-white/10 rounded-full px-8 py-4 text-cream font-inter placeholder:text-cream/40 focus:outline-none focus:border-electric transition-colors"
              required
            />
            <button 
              type="submit"
              className="bg-electric hover:bg-cherry text-white px-8 py-4 rounded-full font-bold uppercase tracking-widest text-sm transition-all duration-300 hover:scale-105 box-glow flex items-center justify-center whitespace-nowrap"
            >
              Subscribe <ArrowRight size={18} className="ml-2" />
            </button>
          </form>
          <p className="text-xs text-cream/40 mt-6 font-inter">
            By subscribing, you agree to our Terms of Service and Privacy Policy.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
