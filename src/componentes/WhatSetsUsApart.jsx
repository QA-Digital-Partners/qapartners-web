import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import 'swiper/css/navigation'; // Estilos para la navegación
import { Autoplay, Pagination, Navigation} from 'swiper/modules';
import { WhatSetUsApartData } from "../data";

const WSUA = () => {
  const [expandedResource, setExpandedResource] = useState("Experience");
  const [animateLeft, setAnimateLeft] = useState(false); 
  const faqRef = useRef({});

  // Maneja la expansión de los acordeones
  const handleReadMoreClick = (title) => {
    setExpandedResource((prev) => (prev === title ? "" : title));
    setAnimateLeft(true); // Activa la animación
    setTimeout(() => setAnimateLeft(false), 1000); 
  };


  // Encuentra la sección activa para el slider
  const activeSection = WhatSetUsApartData.find((section) => section.title === expandedResource) || WhatSetUsApartData[0];

  return (
    <div className="flex flex-col md:flex-row">
      {/* Sección izquierda */}
      <div id="left" className={`w-full md:w-1/2 flex flex-col p-6 transition-transform duration-500 ${animateLeft ? "fade-in-up" : ""}`}>
      
        <Swiper className="w-full"
                loop={true} 
                spaceBetween={10} 
                slidesPerView={1} 
                pagination={{
                    el: ".pagination-circles",
                    clickable: true,
                  }}
                  navigation={{
                    prevEl: ".custom-prev-btn",
                    nextEl: ".custom-next-btn",
                  }}
                  modules={[Autoplay, Pagination, Navigation]} // Habilita los módulos necesarios
                >
          {activeSection.imagesData.map((image, index) => (
            <SwiperSlide key={index} className="drop-shadow-md rounded-xl p-4">
              <img src={image.img} alt={image.alt} className="w-full " />
            </SwiperSlide>
          ))}
        </Swiper>
        <div className="pagination-wrapper flex justify-center my-8">
            <button aria-label="Left review" className="bg-qalightgrey p-[0.75rem] rounded-[25px] custom-prev-btn">
                <svg width="14" height="13" viewBox="0 0 14 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12.5954 6.29199L3.00342 6.29199" stroke="#3F3E3E" strokeWidth="2.39801" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M6.20055 11.0879L1.40454 6.29188L6.20055 1.49587" stroke="#3F3E3E" strokeWidth="2.39801" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
            </button>

            <div className="pagination-circles lg:w-[10rem] lg:max-w-[25rem] content-center webkit-center leading-[0px]"></div>

            <button aria-label="Right review" className="bg-qalightgrey p-[0.75rem] rounded-[25px] custom-next-btn">
                <svg width="14" height="13" viewBox="0 0 14 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M1.40456 6.29199L10.9966 6.29199" stroke="#3F3E3E" strokeWidth="2.39801" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M7.79945 11.0879L12.5955 6.29188L7.79945 1.49587" stroke="#3F3E3E" strokeWidth="2.39801" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
            </button>
        </div>
        <div className='bg-gradient-to-b from-[#585D5E] to-qablack lexend mt-8 rounded-xl p-8'>
        <p className='text-white pt-2 pb-4'>
            <span className='font-bold'>{activeSection.businesName}</span> {activeSection.businesDesc}
        </p>
        <p className='text-white pb-2'><span className='font-bold'>QA Digital Partners</span> {activeSection.qaDesc}</p>
        </div>
      </div>

      {/* Sección derecha */}
      <div className="w-full md:w-1/2 p-6">
        <h2 className="text-[30px] lexend font-light mb-4">
          What <span className="font-bold">Sets Us <span className="text-qaorange">Apart</span></span>
        </h2>
        <div>
          {WhatSetUsApartData.map((data) => (
            <div
              key={data.title}
              ref={(el) => (faqRef.current[data.title] = el)}
              className=" bg-gradient-197 from-[#FAF9F9] to-[#f1f1f1] shadow-[0_4px_10px_2px_rgba(0,0,0,0.1)] rounded-xl px-8 py-[2rem] mb-8 min-h-[83px] content-center"
            >
              <div className="flex py-0 justify-between">
                <div className="w-[80%]">
                  <p
                    className={`lexend text-[20px] font-bold leading-[25px] ${
                      expandedResource === data.title ? "text-qaorange" : "text-qablack"
                    }`}
                  >
                    {data.title}
                  </p>
                </div>
                <div className="max-w-[27px] w-[20%]">
                  <a onClick={() => handleReadMoreClick(data.title)}>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="26"
                      height="26"
                      viewBox="0 0 26 26"
                      fill="none"
                      className={`absolute transition-transform fill-qablack ${
                        expandedResource === data.title ? "rotate-x-90" : "rotate-0"
                      }`}
                    >
                      <path d="M0 15.418V10.0191H26.0082V15.418H0ZM9.9153 25.1776V0H16.041V25.1776H9.9153Z" />
                    </svg>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="26"
                      height="26"
                      viewBox="0 0 26 6"
                      fill="none"
                      className={`absolute transition-transform fill-qaorange ${
                        expandedResource === data.title ? "rotate-0" : "rotate-x-90"
                      }`}
                    >
                      <path d="M0 5.41844V0.0195312H26.0082V5.41844H0Z" />
                    </svg>
                  </a>
                </div>
              </div>
              <div
                className={`pe-8 lexend font-light leading-[25px] faq ${
                  expandedResource === data.title
                    ? "expanded border-t-2 border-qablack pt-8 pb-4 mt-4"
                    : ""
                }`}
              >
                {data.answer}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WSUA;

