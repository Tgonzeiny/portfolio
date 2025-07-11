import { motion } from 'framer-motion';
import { experienceData } from '../utils/experienceData';
import { sectionContainerVariants, timelineItemVariants, timelineCircleVariants, contentBlockVariants, bulletVariants } from '../utils/variants';

export default function Experience() {
  return (
    <motion.section
      id="experience"
      className="min-h-screen py-20 px-4 md:px-8 text-secondary flex flex-col items-center justify-center relative overflow-hidden"
      variants={sectionContainerVariants} 
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.1 }}
    >
      <motion.h2
        className="text-4xl md:text-5xl font-extrabold text-primary mb-12 text-center z-10"
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        My Experience
      </motion.h2>

      <div className="w-full max-w-5xl relative z-10"> 
        <div className="absolute w-1 bg-purple-700/50 h-full top-0 left-1/2 -translate-x-1/2 z-0 rounded-full"></div>

        {experienceData.map((exp, index) => {
          const isEven = index % 2 === 0; 

          return (
            <motion.div
              key={exp.id}
              className={`flex items-center w-full my-8 md:my-16 ${isEven ? 'justify-start' : 'justify-end'}`} 
              variants={timelineItemVariants}
              custom={isEven ? null : "right"} 
            >
              {!isEven && <div className="hidden md:block w-1/2"></div>}

              <motion.div
                className={`flex-1 p-6 md:p-8 rounded-lg border border-purple-700/50 shadow-lg ${isEven ? 'md:mr-8 text-start' : 'md:ml-8 text-start'} bg-secondary/10 backdrop-blur-xs`} 
                variants={contentBlockVariants} 
              >
                <h3 className="text-xl md:text-2xl font-bold text-secondary leading-tight mb-2">
                  {exp.title} at {exp.company}
                </h3>
                <p className="text-primary text-base md:text-lg font-medium mb-1">
                  {exp.location}
                </p>
                <p className="text-secondary text-base md:text-lg font-semibold mb-4">
                  {exp.startDate} - {exp.endDate}
                </p>

                <motion.ul
                  className={`list-none ${isEven ? 'list-none md:' : 'list-decimal md:pr-6'} space-y-2 text-secondary text-base md:text-lg`}
                >
                  {exp.description.map((bullet, bulletIndex) => (
                    <motion.li
                      key={bulletIndex}
                      variants={bulletVariants} 
                    >
                      {bullet}
                    </motion.li>
                  ))}
                </motion.ul>
              </motion.div>

              <motion.div
                className="absolute left-1/2 -translate-x-1/2 w-10 h-10 rounded-full bg-purple-600 flex items-center justify-center shadow-xl border-2 border-purple-400"
                variants={timelineCircleVariants} 
              >
                <span className="text-secondary text-md font-bold">{index + 1}</span>
              </motion.div>

              {isEven && <div className="hidden md:block w-1/2"></div>}
            </motion.div>
          );
        })}
      </div>
    </motion.section>
  );
}