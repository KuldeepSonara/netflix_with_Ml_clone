// Fade.jsx
import React from 'react';
import { CSSTransition } from 'react-transition-group';

const PageTransition = ({ children, ...props }) => (
  <CSSTransition
    {...props}
    timeout={500}
    classNames={{
      enter: 'fade-enter',
      enterActive: 'fade-enter-active',
      exit: 'fade-exit',
      exitActive: 'fade-exit-active',
    }}
  >
    {children}
  </CSSTransition>
);

export default PageTransition;
