export const headerVariants = {
  hidden: { opacity: 0, y: -30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: 'spring',
      stiffness: 40,
      damping: 12,
      when: 'beforeChildren',
      staggerChildren: 0.4, 
    },
  },
};

export const childVariants = {
  hidden: { opacity: 0, y: -60 },
  visible: { opacity: 1, y: 0 },
};

export const iconsVariant = {
    hidden: { opacity: 0, y: 120 },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
        type: 'spring',
        stiffness: 40,
        damping: 12,
        delayChildren: 0.2, 
        staggerChildren: 0.2, 
        },
    },
}

export const navbarVariants = {
    initial: {
      scale: 1,
      opacity: 1,
      y: 0,
    },
    scrolled: {
      scale: [1, 1.01, 1],
      opacity: [1, 1, 1],
      y: 0,
      transition: {
        duration: 0.3,
        ease: "easeInOut",
      }
    },
    unscrolled: {
      scale: [1, 1.01, 1],
      opacity: [1, 1, 1],
      y: 0,
      transition: {
        duration: 0.3,
        ease: "easeInOut",
      }
    }
  };


 export const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2, when: 'beforeChildren' },
  },
};
export const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { type: 'spring', stiffness: 60 } },
};


// Variants for the About section's 
export const aboutSectionVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6, 
      ease: "easeOut",
      when: "beforeChildren", 
      staggerChildren: 0.2 
    }
  }
};

export const aboutChildVariants = {
  hidden: { opacity: 0, y: 30 }, 
  visible: {
    opacity: 1,
    y: 0, 
    transition: {
      duration: 0.5, 
      ease: "easeOut"
    }
  }
};

export const aboutImageVariants = {
  hidden: { opacity: 0, scale: 0.8, rotate: -10 },
  visible: {
    opacity: 1,
    scale: 1,
    rotate: 0,
    transition: {
      type: "spring",
      stiffness: 120, 
      damping: 14,
      delay: 0.3 
    }
  }
};

// Variants for the skills section
export const skillsContainerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      delayChildren: 0.2, 
      staggerChildren: 0.15 
    }
  }
};

export const skillCardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 100, 
      damping: 12,    
      duration: 0.5  
    }
  }
};

export const skillItemTextVariants = {
  hidden: { opacity: 0, y: 10 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.3,
      delay: 0.8 
    }
  }
};


//Variants for Experience Section
export const sectionContainerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      when: "beforeChildren",
      staggerChildren: 0.2
    }
  }
};

export const contentBlockVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut",
      staggerChildren: 0.1, 
      delayChildren: 0.3 
    }
  }
};

export const bulletVariants = {
  hidden: { opacity: 0, x: -10 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.3
    }
  }
};

export const timelineContainerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2 
    }
  }
};

export const timelineItemVariants = {
  hidden: { opacity: 0, x: -100 }, 
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      type: "spring",
      stiffness: 80,
      damping: 15
    }
  },
  right: {
    x: 100, 
  }
};

export const timelineCircleVariants = {
  hidden: { scale: 0 },
  visible: {
    scale: 1,
    transition: {
      type: "spring",
      stiffness: 200,
      damping: 10
    }
  }
};

//variant for project section
export const sectionVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      when: "beforeChildren",
      staggerChildren: 0.1
    }
  }
};

export const headingVariants = {
  hidden: { opacity: 0, y: -30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, delay: 0.2 }
  }
};

export const projectCardVariants = {
  hidden: { opacity: 0, y: 50, scale: 0.9 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      type: "spring",
      stiffness: 80,
      damping: 15
    }
  }
};

export const fadeInGrow = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.4, ease: "easeOut" }
  }
};

//Variants for the contact section
export const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", stiffness: 80, damping: 15 }
  }
};