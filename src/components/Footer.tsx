import { motion } from 'motion/react';
import { Instagram, Twitter, Facebook, Youtube } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-bg-dark pt-24 pb-12 border-t border-white/5 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          {/* Brand */}
          <div className="col-span-1 md:col-span-2">
            <h2 className="text-4xl font-bebas tracking-widest text-cream mb-4">CHERRY POP</h2>
            <p className="text-cream/60 font-inter max-w-sm mb-8">
              The boldest 23 flavors in the game. Crafted for those who don't settle for ordinary.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full glass flex items-center justify-center text-cream hover:text-electric hover:bg-white/10 transition-all duration-300">
                <Instagram size={20} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full glass flex items-center justify-center text-cream hover:text-electric hover:bg-white/10 transition-all duration-300">
                <Twitter size={20} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full glass flex items-center justify-center text-cream hover:text-electric hover:bg-white/10 transition-all duration-300">
                <Facebook size={20} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full glass flex items-center justify-center text-cream hover:text-electric hover:bg-white/10 transition-all duration-300">
                <Youtube size={20} />
              </a>
            </div>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-bold uppercase tracking-widest text-sm text-electric mb-6">Explore</h4>
            <ul className="space-y-4">
              <li><a href="#" className="text-cream/70 hover:text-cream transition-colors font-inter">All Products</a></li>
              <li><a href="#" className="text-cream/70 hover:text-cream transition-colors font-inter">Our Story</a></li>
              <li><a href="#" className="text-cream/70 hover:text-cream transition-colors font-inter">Find a Store</a></li>
              <li><a href="#" className="text-cream/70 hover:text-cream transition-colors font-inter">Merch Shop</a></li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="font-bold uppercase tracking-widest text-sm text-electric mb-6">Support</h4>
            <ul className="space-y-4">
              <li><a href="#" className="text-cream/70 hover:text-cream transition-colors font-inter">FAQ</a></li>
              <li><a href="#" className="text-cream/70 hover:text-cream transition-colors font-inter">Contact Us</a></li>
              <li><a href="#" className="text-cream/70 hover:text-cream transition-colors font-inter">Shipping & Returns</a></li>
              <li><a href="#" className="text-cream/70 hover:text-cream transition-colors font-inter">Privacy Policy</a></li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-cream/40 text-sm font-inter">
            &copy; {new Date().getFullYear()} Cherry Pop Beverage Co. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm text-cream/40 font-inter">
            <a href="#" className="hover:text-cream transition-colors">Terms</a>
            <a href="#" className="hover:text-cream transition-colors">Privacy</a>
            <a href="#" className="hover:text-cream transition-colors">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
