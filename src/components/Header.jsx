import { useEffect, useState, useRef } from 'react';
import { motion } from 'framer-motion';
import AnimatedLoader from './AnimatedLoader';
import { GrGithub } from "react-icons/gr";
import { TbBrandLinkedinFilled } from "react-icons/tb";
import { headerVariants, childVariants, iconsVariant } from '../utils/variants';


export default function Header() {
  const [showLoader, setShowLoader] = useState(true);
  const [showHeader, setShowHeader] = useState(false);
  const [typedText, setTypedText] = useState('');
  const fullText = "Hi, I'm Thomas!";

  const indexRef = useRef(0); // persistent index

  useEffect(() => {
    const loaderTimeout = setTimeout(() => setShowLoader(false), 1200);
    const headerTimeout = setTimeout(() => setShowHeader(true), 700);
    return () => {
      clearTimeout(loaderTimeout);
      clearTimeout(headerTimeout);
    };
  }, []);

  // Typewriter effect (recursive setTimeout for smooth animation)
  useEffect(() => {
    if (!showHeader) return;

    let timeoutId;

    function typeLetter() {
      setTypedText(fullText.slice(0, indexRef.current + 1));
      if (indexRef.current < fullText.length - 1) {
        indexRef.current += 1;
        timeoutId = setTimeout(typeLetter, 120); // Adjust speed here
      } else {
        // Pause, then restart
        timeoutId = setTimeout(() => {
          indexRef.current = 0;
          setTypedText('');
          setTimeout(typeLetter, 400); // Short pause before restarting
        }, 1500);
      }
    }

    indexRef.current = 0;
    setTypedText('');
    timeoutId = setTimeout(typeLetter, 400);

    return () => clearTimeout(timeoutId);
  }, [showHeader]);

  return (
    <>
      <AnimatedLoader isVisible={showLoader} />
        {showHeader && (
        <motion.header
            className="flex flex-col items-center justify-center h-screen text-center px-4"
            variants={headerVariants}
            initial="hidden"
            animate="visible"
            id="home"
            >
            <motion.h1
                variants={childVariants}
                tabIndex={0}
                className="text-4xl md:text-6xl font-extrabold text-white text-primary"
                role="heading"
                aria-label="Welcome to my portfolio"
                >
                {typedText}
            </motion.h1>

            <motion.p
                variants={childVariants}
                tabIndex={0}
                className="mt-6 text-lg md:text-2xl text-secondary text-center max-w-2xl mx-auto"
                role="contentinfo"
                aria-label="I am a Backend-Focused Full-Stack Developer"
            >
                I'm a software engineer based in NY, and currently working at&nbsp;
                <span className="text-blue-600 font-semibold">General Dynamics</span>
                &nbsp;as a&nbsp;
                <span className="text-green-600 font-semibold">full-stack engineer</span>!
                <span className="block mt-2">
                  I've also worked on various projects, including a full-stack e-commerce application, check them out at my&nbsp;
                  <span className="font-bold">GitHub</span>
                  &nbsp;below!
                </span>
            </motion.p>
            <div className='flex gap-8'>
                <motion.a
                    variants={childVariants}
                    href="/general-resume.pdf"
                    target="_blank"
                    download
                    rel="noopener noreferrer"
                    className="mt-6 inline-block bg-purple-600 hover:bg-purple-700 focus:ring-2 focus:ring-purple-500 text-white font-semibold rounded-xl px-8 py-3 shadow-lg hover:shadow-2xl transition-all"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.98 }}
                    >
                    Download Resume
                </motion.a>
                <motion.a
                    variants={childVariants}
                    href="#projects"
                    className="mt-6 md:mt-6 inline-block border-2 border-secondary  text-secondary hover:bg-primary hover:text-white focus:ring-2 focus:ring-secondary shadow-lg hover:shadow-2xl hover:border-primary font-semibold rounded-xl px-8 py-3 transition-all"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.98 }}
                    role="button"
                    aria-label="View my projects"
                    >
                    View Projects
                </motion.a>
            </div>
            <motion.div
                variants={iconsVariant}
                className="mt-8 flex gap-8 justify-center"
            >
                <a href="https://github.com/Tgonzeiny" target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="hover:text-purple-500 transition">
                    <GrGithub className="hover:text-secondary  hover:scale-140 transition-all duration-300 text-3xl"/>
                </a>
                <a href="https://www.linkedin.com/in/thomasgonzal/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="hover:text-purple-500 transition">
                    <TbBrandLinkedinFilled className="hover:text-secondary hover:scale-140 transition-all duration-300 text-3xl"/>
                </a>
            </motion.div>
        </motion.header>
      )}
    </>
  );
}
