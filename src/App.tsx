import { useState, useEffect } from 'react';
import { motion, AnimatePresence, useScroll, useSpring } from 'motion/react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ProductShowcase from './components/ProductShowcase';
import BrandStory from './components/BrandStory';
import Experience from './components/Experience';
import SocialProof from './components/SocialProof';
import FindStore from './components/FindStore';
import EmailCapture from './components/EmailCapture';
import Footer from './components/Footer';
import LoadingScreen from './components/LoadingScreen';
import Checkout from './components/Checkout';

export default function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [currentHash, setCurrentHash] = useState(window.location.hash);
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  useEffect(() => {
    // Simulate loading time for the premium feel
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2500);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const handleHashChange = () => {
      setCurrentHash(window.location.hash);
      window.scrollTo(0, 0);
    };
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const isCheckout = currentHash === '#checkout';

  return (
    <>
      <AnimatePresence mode="wait">
        {isLoading && <LoadingScreen key="loading" />}
      </AnimatePresence>

      {!isLoading && (
        <div className="relative bg-bg-dark text-cream selection:bg-electric selection:text-white">
          {/* Scroll Progress Bar */}
          <motion.div
            className="fixed top-0 left-0 right-0 h-1 bg-electric origin-left z-50"
            style={{ scaleX }}
          />

          {!isCheckout && <Navbar />}
          
          <main>
            <AnimatePresence mode="wait">
              {isCheckout ? (
                <Checkout key="checkout" />
              ) : (
                <motion.div 
                  key="home"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                >
                  <Hero />
                  <ProductShowcase />
                  <BrandStory />
                  <Experience />
                  <SocialProof />
                  <FindStore />
                  <EmailCapture />
                </motion.div>
              )}
            </AnimatePresence>
          </main>

          <Footer />
        </div>
      )}
    </>
  );
}
