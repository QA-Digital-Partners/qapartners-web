import React, { createContext, useEffect } from 'react';

const FadeObserverContext = createContext();

export const FadeObserverProvider = ({ children }) => {
  useEffect(() => {
    const elementsUp = document.querySelectorAll('.fade.up');
    const elementsLeft = document.querySelectorAll('.fade.left');
    const elementsRight = document.querySelectorAll('.fade.right');
    const elementsDown = document.querySelectorAll('.fade.down');

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('show');
          }
        });
      },
      { threshold: 0.5 }
    );

    elementsUp.forEach((el) => observer.observe(el));
    elementsLeft.forEach((el) => observer.observe(el));
    elementsRight.forEach((el) => observer.observe(el));
    elementsDown.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <FadeObserverContext.Provider value={{}}>
      {children}
    </FadeObserverContext.Provider>
  );
};

export default FadeObserverContext;
