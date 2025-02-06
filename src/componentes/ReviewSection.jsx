import React, { useEffect, useRef } from "react"
import ReviewCarousel from "./ReviewCarousel";

const ReviewSection = ({heightMod}) => {
    const prevRev = useRef(null);
    const nextRev = useRef(null);

    
  useEffect(() => {
    const elements = document.querySelectorAll('.fade.up'); // Selecciona los elementos
    const elementsL = document.querySelectorAll('.fade.left'); // Selecciona los elementos
    const elementsR = document.querySelectorAll('.fade.right'); // Selecciona los elementos
    const elementsD = document.querySelectorAll('.fade.down'); // Selecciona los elementos

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('show'); // Añade la clase 'visible'
          }
        });
      },
      { threshold: 0.5 } // Detecta cuando al menos el 10% del elemento es visible
    );

    elements.forEach((el) => observer.observe(el)); // Observa todos los elementos
    elementsL.forEach((el) => observer.observe(el)); // Observa todos los elementos
    elementsR.forEach((el) => observer.observe(el)); // Observa todos los elementos
    elementsD.forEach((el) => observer.observe(el)); // Observa todos los elementos

    return () => observer.disconnect(); // Limpia el observer al desmontar
  }, []);

  return (
    <>
      <div className="lg:py-32 py-16">
        <div className="container mx-auto flex lg:flex-nowrap flex-wrap px-8 lg:px-0">
          <div className="lg:w-1/3 w-full content-center">
            <h2 className="text-qablack lexend lg:text-[2.5rem] text-[1.8rem] font-light leading-tight">70+ Google <span className="lg:text-[4.3rem] text-[3rem] inter font-semibold block">REVIEWS</span></h2>
            <p className="lexend text-2xl text-qablack font-medium leading-loose mb-8">Reach your <span className="lg:block bg-qablack text-white w-[200px] px-4 py-2 rounded-xl text-center inter font-bold">Full Potential</span></p>
            <div className="flex">
              <div className="hover:scale-125 transition-transform">
                <button aria-label="Left review" ref={prevRev} className="bg-qalightgrey p-[0.75rem] rounded-[25px] me-4 fade down animation-d-400">
                  <svg width="14" height="13" viewBox="0 0 14 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12.5954 6.29199L3.00342 6.29199" stroke="#3F3E3E" strokeWidth="2.39801" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M6.20055 11.0879L1.40454 6.29188L6.20055 1.49587" stroke="#3F3E3E" strokeWidth="2.39801" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </button>
              </div>
              <div className="hover:scale-125 transition-transform">
                <button aria-label="Right review" ref={nextRev} className="bg-qalightgrey p-[0.75rem] rounded-[25px] fade down animation-d-400">
                  <svg width="14" height="13" viewBox="0 0 14 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M1.40456 6.29199L10.9966 6.29199" stroke="#3F3E3E" strokeWidth="2.39801" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M7.79945 11.0879L12.5955 6.29188L7.79945 1.49587" stroke="#3F3E3E" strokeWidth="2.39801" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </button>
              </div>

            </div>
          </div>
          <div className="lg:w-2/3 w-full ">
            <ReviewCarousel prev={prevRev} next={nextRev} heightMod={heightMod}/>
          </div>
        </div>
      </div>
    </>
  )
};

export default ReviewSection;
