import { motion, AnimatePresence } from 'framer-motion';

export default function AnimatedLoader({ isVisible }) {
  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          className="fixed inset-0 bg-black flex items-center justify-center z-50 text-white text-xl font-semibold"
          initial={{ opacity: 1 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="loading-dots flex items-center justify-center h-screen bg-black text-white text-xl font-semibold">
          Loading
          <span className="inline-block mx-1 animate-dot-wave" style={{ animationDelay: '0s' }}>.</span>
          <span className="inline-block mx-1 animate-dot-wave" style={{ animationDelay: '0.2s' }}>.</span>
          <span className="inline-block mx-1 animate-dot-wave" style={{ animationDelay: '0.4s' }}>.</span>
    </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
