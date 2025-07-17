import { motion } from 'framer-motion';

export default function About() {
  return (
    <motion.section
      className="flex flex-col items-start justify-center min-h-screen bg-transparent px-6 md:px-20"
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      id="/in"
    >
      <motion.div className="mb-16">
        <motion.h2
          className="text-[10rem] md:text-[16rem] font-extrabold text-white tracking-tight cursor-pointer"
          whileHover={{ x: 12, y: -8, rotate: -4, scale: 1.08 }}
          transition={{ type: 'spring', stiffness: 300, damping: 15 }}
          style={{ lineHeight: 1 }}
        >
          /in
        </motion.h2>
        <div className="w-40 h-1 bg-white rounded-full mt-4" />
      </motion.div>

      <a
        href="https://www.linkedin.com/in/thomasgonzal/"
        target="_blank"
        rel="noopener noreferrer"
        className="group"
      >
        <img
          src="linkedin-banner.png"
          alt="LinkedIn Banner"
          className="w-full max-w-2xl rounded-xl shadow-2xl border-4 border-blue-600 group-hover:scale-105 transition-transform duration-300"
        />
      </a>
    </motion.section>
  );
}
