export const transition = { type: "spring", duration: 0.8 };

export const slideAnimation = (direction, delay = 0) => {
  return {
    initial: {
      x: direction === "left" ? -100 : direction === "right" ? 100 : 0,
      y: direction === "up" ? 100 : direction === "down" ? -100 : 0,
      opacity: 0,
      transition: { ...transition, delay: 0.5 },
    },
    whileInView: {
      x: 0,
      y: 0,
      opacity: 1,
      transition: { ...transition, delay: delay },
    },
    viewport: { once: true, margin: "-200px" },
  };
};

export const headTextAnimation = () => {
  return {
    initial: { x: 100, opacity: 0 },
    whileInView: { x: 0, opacity: 1 },
    transition: {
      type: "spring",
      damping: 5,
      stiffness: 40,
      restDelta: 0.001,
      duration: 0.3,
    },
    viewport: { once: true, margin: "-200px" },
  };
};

export const fadeIn = (direction) => {
  return {
    hidden: {
      x: direction === "left" ? 100 : direction === "right" ? -100 : 0,
      y: direction === "up" ? 100 : direction === "down" ? -100 : 0,
      opacity: 0,
    },
    whileInView: {
      x: 0,
      y: 0,
      opacity: 1,
    },
    transition: {
      type: "spring",
      delay: 1,
      duration: 1,
      ease: "easeOut",
    },
    viewport: { once: true, margin: "-200px" },
  };
};

export const zoomIn = (delay, duration) => {
  return {
    hidden: {
      scale: 0,
      opacity: 0,
    },
    show: {
      scale: 1,
      opacity: 1,
      transition: {
        type: "tween",
        delay: delay,
        duration: duration,
        ease: "easeOut",
      },
    },
  };
};
