import { useState, useEffect } from 'react';
import { motion, useScroll, useMotionValueEvent } from 'motion/react';
import { Menu, X, ShoppingBag } from 'lucide-react';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    if (latest > 50) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  });

  const navLinks = [
    { name: 'Flavors', href: '#products' },
    { name: 'Our Story', href: '#story' },
    { name: 'Experience', href: '#experience' },
    { name: 'Find Us', href: '#find-us' },
  ];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled ? 'py-4 glass shadow-lg' : 'py-6 bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="text-3xl font-bebas tracking-widest text-cream hover:text-electric transition-colors">
          CHERRY POP
        </a>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-sm font-medium uppercase tracking-wider hover:text-electric transition-colors relative group"
            >
              {link.name}
              <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-electric transition-all duration-300 group-hover:w-full" />
            </a>
          ))}
        </div>

        {/* Actions */}
        <div className="hidden md:flex items-center space-x-6">
          <button className="hover:text-electric transition-colors relative">
            <ShoppingBag size={20} />
            <span className="absolute -top-1 -right-2 bg-electric text-[10px] font-bold w-4 h-4 rounded-full flex items-center justify-center">
              0
            </span>
          </button>
          <a href="#checkout" className="bg-electric hover:bg-cherry text-white px-6 py-2 rounded-full font-bold uppercase tracking-wider text-sm transition-all duration-300 hover:scale-105 box-glow inline-block">
            Buy Now
          </a>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden text-cream hover:text-electric transition-colors"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <motion.div
        initial={false}
        animate={isMobileMenuOpen ? { height: 'auto', opacity: 1 } : { height: 0, opacity: 0 }}
        className="md:hidden overflow-hidden bg-bg-dark/95 backdrop-blur-xl border-b border-white/10"
      >
        <div className="px-6 py-8 flex flex-col space-y-6">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setIsMobileMenuOpen(false)}
              className="text-2xl font-bebas tracking-wider hover:text-electric transition-colors"
            >
              {link.name}
            </a>
          ))}
          <div className="pt-6 border-t border-white/10 flex items-center justify-between">
            <button className="flex items-center space-x-2 text-cream hover:text-electric transition-colors">
              <ShoppingBag size={24} />
              <span className="font-bebas text-xl tracking-wider">Cart (0)</span>
            </button>
            <a href="#checkout" className="bg-electric text-white px-8 py-3 rounded-full font-bold uppercase tracking-wider text-sm inline-block text-center">
              Buy Now
            </a>
          </div>
        </div>
      </motion.div>
    </motion.nav>
  );
}
