import { useState } from 'react';
import { motion } from 'motion/react';
import { ShoppingCart, Info } from 'lucide-react';

const products = [
  {
    id: 1,
    name: 'Original 23',
    flavor: 'The Classic Blend',
    color: 'from-cherry to-cherry-dark',
    accent: 'bg-cherry',
    glow: 'shadow-[0_0_40px_rgba(122,0,25,0.6)]',
    description: 'The unmistakable taste of 23 authentic flavors perfectly balanced for a bold, refreshing experience.'
  },
  {
    id: 2,
    name: 'Zero Sugar',
    flavor: 'All Bold, No Guilt',
    color: 'from-gray-800 to-black',
    accent: 'bg-gray-700',
    glow: 'shadow-[0_0_40px_rgba(100,100,100,0.6)]',
    description: 'The exact same 23 flavors you love, crafted with zero sugar for a lighter, crisp finish.'
  },
  {
    id: 3,
    name: 'Vanilla Float',
    flavor: 'Smooth Creaminess',
    color: 'from-amber-700 to-brown',
    accent: 'bg-amber-600',
    glow: 'shadow-[0_0_40px_rgba(217,119,6,0.6)]',
    description: 'A rich, creamy vanilla twist on our classic recipe. Like a soda fountain float in a can.'
  }
];

export default function ProductShowcase() {
  const [activeProduct, setActiveProduct] = useState(products[0].id);

  return (
    <section id="products" className="py-32 relative bg-bg-dark overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 -left-1/4 w-1/2 h-1/2 bg-cherry/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-1/4 -right-1/4 w-1/2 h-1/2 bg-electric/10 rounded-full blur-[120px]" />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-20">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-5xl md:text-7xl font-bebas tracking-wider text-cream mb-4"
          >
            CHOOSE YOUR <span className="text-electric">BOLD</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg text-cream/70 max-w-2xl mx-auto font-inter"
          >
            Explore our lineup of premium beverages, each crafted to deliver an unforgettable taste experience.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
          {products.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              onHoverStart={() => setActiveProduct(product.id)}
              className={`relative group rounded-[2rem] p-8 transition-all duration-500 ${
                activeProduct === product.id ? 'glass-card scale-105 z-20' : 'glass scale-100 z-10 opacity-70 hover:opacity-100'
              }`}
            >
              {/* Product Image Placeholder (Can) */}
              <div className="relative h-80 flex justify-center items-center mb-8 perspective-1000">
                <motion.div
                  animate={{ 
                    rotateY: activeProduct === product.id ? [0, 10, -10, 0] : 0,
                    y: activeProduct === product.id ? [-5, 5, -5] : 0
                  }}
                  transition={{ 
                    rotateY: { duration: 4, repeat: Infinity, ease: "easeInOut" },
                    y: { duration: 3, repeat: Infinity, ease: "easeInOut" }
                  }}
                  className={`w-32 h-64 rounded-[30px] bg-gradient-to-b ${product.color} ${activeProduct === product.id ? product.glow : ''} border border-white/20 flex flex-col items-center justify-center relative overflow-hidden transition-all duration-500`}
                >
                  <div className="absolute top-0 w-full h-4 bg-gray-300 rounded-t-[28px]" />
                  <div className="absolute bottom-0 w-full h-3 bg-gray-300 rounded-b-[28px]" />
                  <span className="font-bebas text-3xl -rotate-90 text-white tracking-widest whitespace-nowrap opacity-80">
                    {product.name.split(' ')[0]}
                  </span>
                </motion.div>
              </div>

              {/* Product Info */}
              <div className="text-center space-y-4">
                <h3 className="text-3xl font-bebas tracking-wider text-cream">{product.name}</h3>
                <p className="text-sm font-bold uppercase tracking-widest text-electric">{product.flavor}</p>
                
                <motion.div 
                  initial={false}
                  animate={{ height: activeProduct === product.id ? 'auto' : 0, opacity: activeProduct === product.id ? 1 : 0 }}
                  className="overflow-hidden"
                >
                  <p className="text-sm text-cream/70 font-inter leading-relaxed mb-6">
                    {product.description}
                  </p>
                  
                  <div className="flex gap-3 justify-center">
                    <a href="#checkout" className={`${product.accent} hover:brightness-110 text-white px-6 py-3 rounded-full font-bold uppercase tracking-wider text-xs transition-all duration-300 flex items-center gap-2 flex-1 justify-center`}>
                      <ShoppingCart size={16} /> Add
                    </a>
                    <button className="glass hover:bg-white/10 text-cream px-4 py-3 rounded-full transition-all duration-300 flex items-center justify-center">
                      <Info size={18} />
                    </button>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
