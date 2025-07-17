import { motion } from 'framer-motion';
import { projectsData } from '../utils/projectsData';
import { FaGithub, FaExternalLinkAlt, FaFolder } from 'react-icons/fa';
import {
  fadeInGrow,
  sectionVariants,
  headingVariants,
  projectCardVariants,
} from '../utils/variants';

export default function Projects() {
  const projectsToDisplay = projectsData.slice(0, 6);

  return (
    <motion.section
      id="projects"
      className="min-h-screen py-20 px-4 md:px-8 text-white flex flex-col items-center justify-center relative overflow-hidden"
      variants={sectionVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.1 }}
    >
      <motion.h2
        className="text-4xl md:text-5xl font-extrabold mb-12 text-center z-10"
        variants={headingVariants}
      >
        My Projects
      </motion.h2>

      <motion.div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full max-w-6xl">
        {projectsToDisplay.map((project) => (
          <motion.div
            key={project.id}
            className="bg-black/40 backdrop-blur-sm border border-white/10 rounded-lg shadow-xl overflow-hidden transform hover:scale-[1.01] transition-all duration-300"
            variants={projectCardVariants}
            whileHover={{ y: -5 }}
          >

            <div className="p-4 flex flex-col justify-between h-auto">
              <h3 className="text-xl md:text-2xl font-bold text-white mb-4 flex items-center gap-2">
                <FaFolder className="text-white/60" size={24} style={{ verticalAlign: 'middle' }} />
                <span className="align-middle">{project.title}</span>
              </h3>


              <p className="text-gray-300 text-base mb-4">{project.description}</p>

              <div className="flex flex-wrap gap-2 mb-4">
                {project.technologies.map((tech, i) => (
                  <span
                    key={i}
                    className="bg-purple-800 text-purple-200 text-xs font-semibold px-2.5 py-0.5 rounded-full"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="flex justify-end space-x-4 mt-auto">
                {project.githubLink && (
                  <a
                    href={project.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-purple-400 hover:text-purple-300 transition-colors duration-200 flex items-center"
                  >
                    <FaGithub className="mr-1" /> GitHub
                  </a>
                )}
                {project.liveLink && (
                  <a
                    href={project.liveLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-purple-400 hover:text-purple-300 transition-colors duration-200 flex items-center"
                  >
                    <FaExternalLinkAlt className="mr-1" /> Live Demo
                  </a>
                )}
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>

      {projectsData.length > 3 && (
        <motion.a
          href="https://github.com/Tgonzeiny"
          className="mt-12 px-6 py-3 bg-purple-600 text-white font-semibold rounded-full shadow-lg hover:bg-purple-700 transition-colors duration-300"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.5, duration: 0.6 }}
        >
          View All Projects
        </motion.a>
      )}
    </motion.section>
  );
}
