import { motion } from 'motion/react';
import { Star, Quote } from 'lucide-react';

const testimonials = [
  {
    name: "Alex Rivera",
    handle: "@alexcreates",
    quote: "Nothing hits like a cold Cherry Pop at 2 PM. It's the only thing getting me through these edit sessions.",
    image: "https://picsum.photos/seed/alex/100/100"
  },
  {
    name: "Sarah Jenkins",
    handle: "@sarahj_style",
    quote: "That 23 flavor blend is actually insane. I don't know what's in it, but I'm obsessed. The Zero Sugar version is my go-to.",
    image: "https://picsum.photos/seed/sarah/100/100"
  },
  {
    name: "Marcus Thorne",
    handle: "@marcus_lifts",
    quote: "Post-workout, pre-game, whatever. The carbonation is perfect and it doesn't leave that weird syrupy aftertaste.",
    image: "https://picsum.photos/seed/marcus/100/100"
  }
];

const ugcImages = [
  "https://picsum.photos/seed/soda1/400/400",
  "https://picsum.photos/seed/soda2/400/400",
  "https://picsum.photos/seed/soda3/400/400",
  "https://picsum.photos/seed/soda4/400/400",
  "https://picsum.photos/seed/soda5/400/400",
  "https://picsum.photos/seed/soda6/400/400"
];

export default function SocialProof() {
  return (
    <section className="py-32 bg-cherry-dark relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-20">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-7xl font-bebas tracking-wider text-cream mb-4"
          >
            THE <span className="text-electric">CULT</span> FOLLOWING
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-lg text-cream/70 max-w-2xl mx-auto font-inter"
          >
            Don't just take our word for it. See why millions choose the bold taste of Cherry Pop every day.
          </motion.p>
        </div>

        {/* Testimonials */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-24">
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.2 }}
              className="glass p-8 rounded-[2rem] relative"
            >
              <Quote className="absolute top-6 right-6 text-white/10" size={48} />
              <div className="flex gap-1 mb-6">
                {[...Array(5)].map((_, j) => (
                  <Star key={j} size={16} className="text-electric fill-electric" />
                ))}
              </div>
              <p className="text-cream/90 font-inter leading-relaxed mb-8 italic">"{t.quote}"</p>
              <div className="flex items-center gap-4">
                <img src={t.image} alt={t.name} className="w-12 h-12 rounded-full border-2 border-electric" referrerPolicy="no-referrer" />
                <div>
                  <h4 className="font-bold text-cream">{t.name}</h4>
                  <p className="text-sm text-electric">{t.handle}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* UGC Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {ugcImages.map((img, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="aspect-square rounded-2xl overflow-hidden group relative"
            >
              <img src={img} alt="User generated content" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" referrerPolicy="no-referrer" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                <span className="text-white font-bebas tracking-wider text-xl">@CHERRYPOP</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
