import { motion } from 'motion/react';
import { ArrowLeft, ShieldCheck, CreditCard, Lock } from 'lucide-react';

export default function Checkout() {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      className="min-h-screen bg-bg-dark pt-32 pb-24 px-6"
    >
      <div className="max-w-6xl mx-auto">
        <a 
          href="#" 
          className="inline-flex items-center text-cream/60 hover:text-electric transition-colors mb-8 font-inter font-medium"
        >
          <ArrowLeft size={20} className="mr-2" /> Back to Home
        </a>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Left Column: Billing & Shipping Form */}
          <div className="lg:col-span-7 space-y-8">
            <div>
              <h1 className="text-4xl md:text-5xl font-bebas tracking-wider text-cream mb-2">
                SECURE <span className="text-electric">CHECKOUT</span>
              </h1>
              <p className="text-cream/60 font-inter">Complete your order to taste the bold.</p>
            </div>

            <div className="glass-card p-8 rounded-[2rem] space-y-8">
              {/* Contact Info */}
              <section>
                <h2 className="text-xl font-bebas tracking-widest text-cream mb-4 flex items-center">
                  <span className="w-6 h-6 rounded-full bg-electric text-white flex items-center justify-center text-sm mr-3">1</span>
                  Contact Information
                </h2>
                <div className="space-y-4">
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-widest text-cream/70 mb-2">Email Address</label>
                    <input 
                      type="email" 
                      placeholder="Enter your email" 
                      className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-cream font-inter placeholder:text-cream/30 focus:outline-none focus:border-electric focus:ring-1 focus:ring-electric transition-all"
                    />
                  </div>
                </div>
              </section>

              <div className="h-px w-full bg-white/10" />

              {/* Shipping Address */}
              <section>
                <h2 className="text-xl font-bebas tracking-widest text-cream mb-4 flex items-center">
                  <span className="w-6 h-6 rounded-full bg-electric text-white flex items-center justify-center text-sm mr-3">2</span>
                  Shipping Address
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-widest text-cream/70 mb-2">First Name</label>
                    <input type="text" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-cream font-inter focus:outline-none focus:border-electric transition-all" />
                  </div>
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-widest text-cream/70 mb-2">Last Name</label>
                    <input type="text" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-cream font-inter focus:outline-none focus:border-electric transition-all" />
                  </div>
                  <div className="md:col-span-2">
                    <label className="block text-xs font-bold uppercase tracking-widest text-cream/70 mb-2">Street Address</label>
                    <input type="text" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-cream font-inter focus:outline-none focus:border-electric transition-all" />
                  </div>
                  <div className="md:col-span-2 grid grid-cols-3 gap-4">
                    <div className="col-span-1">
                      <label className="block text-xs font-bold uppercase tracking-widest text-cream/70 mb-2">City</label>
                      <input type="text" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-cream font-inter focus:outline-none focus:border-electric transition-all" />
                    </div>
                    <div className="col-span-1">
                      <label className="block text-xs font-bold uppercase tracking-widest text-cream/70 mb-2">State</label>
                      <input type="text" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-cream font-inter focus:outline-none focus:border-electric transition-all" />
                    </div>
                    <div className="col-span-1">
                      <label className="block text-xs font-bold uppercase tracking-widest text-cream/70 mb-2">ZIP Code</label>
                      <input type="text" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-cream font-inter focus:outline-none focus:border-electric transition-all" />
                    </div>
                  </div>
                </div>
              </section>

              <div className="h-px w-full bg-white/10" />

              {/* Payment Method */}
              <section>
                <h2 className="text-xl font-bebas tracking-widest text-cream mb-4 flex items-center justify-between">
                  <div className="flex items-center">
                    <span className="w-6 h-6 rounded-full bg-electric text-white flex items-center justify-center text-sm mr-3">3</span>
                    Payment Method
                  </div>
                  <div className="flex gap-2 text-cream/50">
                    <ShieldCheck size={20} />
                    <Lock size={20} />
                  </div>
                </h2>
                
                <div className="bg-white/5 border border-electric/50 rounded-xl p-4 mb-4 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <CreditCard className="text-electric" />
                    <span className="font-inter font-medium text-cream">Credit Card</span>
                  </div>
                  <div className="flex gap-1">
                    <div className="w-8 h-5 bg-white/20 rounded" />
                    <div className="w-8 h-5 bg-white/20 rounded" />
                    <div className="w-8 h-5 bg-white/20 rounded" />
                  </div>
                </div>

                <div className="space-y-4">
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-widest text-cream/70 mb-2">Card Number</label>
                    <input type="text" placeholder="0000 0000 0000 0000" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-cream font-inter placeholder:text-cream/30 focus:outline-none focus:border-electric transition-all" />
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-widest text-cream/70 mb-2">Expiry Date</label>
                      <input type="text" placeholder="MM/YY" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-cream font-inter placeholder:text-cream/30 focus:outline-none focus:border-electric transition-all" />
                    </div>
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-widest text-cream/70 mb-2">CVC</label>
                      <input type="text" placeholder="123" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-cream font-inter placeholder:text-cream/30 focus:outline-none focus:border-electric transition-all" />
                    </div>
                  </div>
                </div>
              </section>
            </div>
          </div>

          {/* Right Column: Order Summary */}
          <div className="lg:col-span-5">
            <div className="glass-card p-8 rounded-[2rem] sticky top-32">
              <h2 className="text-2xl font-bebas tracking-widest text-cream mb-6">Order Summary</h2>
              
              {/* Items */}
              <div className="space-y-6 mb-8">
                <div className="flex items-center gap-4">
                  <div className="w-20 h-24 rounded-xl bg-gradient-to-b from-cherry to-cherry-dark border border-white/10 flex items-center justify-center relative overflow-hidden shrink-0">
                    <div className="absolute top-0 w-full h-2 bg-gray-300 rounded-t-xl" />
                    <div className="absolute bottom-0 w-full h-1.5 bg-gray-300 rounded-b-xl" />
                    <span className="font-bebas text-lg -rotate-90 text-white tracking-widest opacity-80">ORIGINAL</span>
                  </div>
                  <div className="flex-1">
                    <h3 className="font-bold text-cream font-inter">Original 23 (12-Pack)</h3>
                    <p className="text-sm text-cream/60 font-inter mb-2">12 x 12oz Cans</p>
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-medium text-electric">Qty: 1</span>
                      <span className="font-bold text-cream">$24.99</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="h-px w-full bg-white/10 mb-6" />

              {/* Totals */}
              <div className="space-y-3 font-inter text-sm mb-6">
                <div className="flex justify-between text-cream/70">
                  <span>Subtotal</span>
                  <span>$24.99</span>
                </div>
                <div className="flex justify-between text-cream/70">
                  <span>Shipping</span>
                  <span className="text-electric font-medium">FREE</span>
                </div>
                <div className="flex justify-between text-cream/70">
                  <span>Estimated Tax</span>
                  <span>$2.12</span>
                </div>
              </div>

              <div className="h-px w-full bg-white/10 mb-6" />

              <div className="flex justify-between items-end mb-8">
                <span className="text-lg font-bold text-cream font-inter">Total</span>
                <span className="text-3xl font-bebas tracking-wider text-electric">$27.11</span>
              </div>

              <button className="w-full bg-electric hover:bg-cherry text-white py-4 rounded-full font-bold uppercase tracking-widest text-sm transition-all duration-300 hover:scale-[1.02] box-glow flex items-center justify-center">
                <Lock size={16} className="mr-2" /> Complete Order
              </button>

              <p className="text-center text-xs text-cream/40 font-inter mt-6">
                Guaranteed safe & secure checkout.
              </p>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
