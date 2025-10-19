import React from 'react';
import { ReactTyped } from 'react-typed';

interface TypingAnimationProps {
  strings: string[];
  className?: string;
}

export const TypingAnimation: React.FC<TypingAnimationProps> = ({ strings, className = "" }) => {
  return (
    <ReactTyped
      strings={strings}
      typeSpeed={50}
      backSpeed={30}
      backDelay={2000}
      loop
      className={className}
    />
  );
};