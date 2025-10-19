import { useState, useEffect } from 'react';

export const useMobileOptimization = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [isReducedMotion, setIsReducedMotion] = useState(false);

  useEffect(() => {
    // Check if device is mobile
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    // Check if user prefers reduced motion
    const checkReducedMotion = () => {
      setIsReducedMotion(window.matchMedia('(prefers-reduced-motion: reduce)').matches);
    };

    checkMobile();
    checkReducedMotion();

    window.addEventListener('resize', checkMobile);
    
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    mediaQuery.addEventListener('change', checkReducedMotion);

    return () => {
      window.removeEventListener('resize', checkMobile);
      mediaQuery.removeEventListener('change', checkReducedMotion);
    };
  }, []);

  // Mobile-optimized animation variants
  const mobileAnimationVariants = {
    initial: { opacity: 0, y: isMobile ? 10 : 30 },
    animate: { opacity: 1, y: 0 },
    transition: {
      duration: isReducedMotion ? 0.2 : (isMobile ? 0.4 : 0.8),
      ease: 'easeOut'
    }
  };

  const mobileHoverVariants = {
    hover: isReducedMotion ? {} : {
      scale: isMobile ? 1.02 : 1.05,
      transition: { duration: 0.2 }
    },
    tap: {
      scale: 0.98,
      transition: { duration: 0.1 }
    }
  };

  return {
    isMobile,
    isReducedMotion,
    mobileAnimationVariants,
    mobileHoverVariants
  };
};