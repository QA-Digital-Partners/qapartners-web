import React, { useEffect, useRef } from "react"
import { ServicesHome, ServicesSeo } from "../data";

const SmallServices = ({home, seo}) => {

  const elementsRef = useRef([]); // Referencia a los elementos
  let toMap = []

  if(home) {
    toMap = ServicesHome
  }
  if(seo) {
    toMap = ServicesSeo
  }

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('show'); // Agrega la clase para animar
          }
        });
      },
      { threshold: 0.1 } // EjecSuta la animación cuando el 10% del elemento es visible
    );

    elementsRef.current.forEach((el) => observer.observe(el)); // Observa cada elemento

    return () => observer.disconnect(); // Limpia el observer al desmontar
  }, []);

  return (
    <>
    {toMap.map((data, index) => {
              let divider = true;   
              let widthSection = ""
              if(home) {
                widthSection = "lg:w-[22vw]"
              }
              if(seo) {
                widthSection = "lg:w-[33.33%]"
              }
              if(index === toMap.length-1 || !home) {
                divider = false;
                widthSection = 'lg:w-[15vw]'
              }
              
              return(
              <div key={index} className={`flex flex-wrap lg:flex-nowrap w-full ${widthSection}`}>
                <div ref={(el) => (elementsRef.current[index] = el)} className={`fade up animation-d-200 w-full lg:py-8 py-4 flex flex-wrap content-between lg:gap-8 gap-4 justify-center lg:justify-start`}>
                  <img src={data.imageLink} alt={data.title1} className="service-icon rounded-lg w-[50px]"/>
                  <h3 className="lexend text-qablack font-bold w-full lg:text-[20px] text-[16px] block text-center lg:text-left">{data.title1}<br />{data.title2}</h3>
                  <div id="Phone Button" className="self-center btn-grow-box qablack">
                    {data.buttonLink != '' ? 
                    <a href={data.buttonLink} className="animated-button rounded-lg py-[4px] px-4 text-base font-bold">Learn More</a>
                     : 
                     ""}
                  </div>
                </div>
                {divider ? (
                  <>
                  <div className="w-[2px] py-4 px-[3rem] content-evenly lg:block hidden">
                      <div className="bg-[#dedbdb] w-full min-w-[2px] min-h-[12rem]">
                      </div>
                  </div>
                  <div className="w-full py-4 content-evenly lg:hidden block">
                      <div className="bg-[#dedbdb] w-full min-h-[2px]">
                      </div>
                  </div>
                  </>
                  
                ) : ('')
                }

              </div>
              )
      })}
    </>
  )
};

export default SmallServices;
