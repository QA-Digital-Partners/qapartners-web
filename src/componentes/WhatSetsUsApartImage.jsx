
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css'; // Importa los estilos básicos de Swiper
import 'swiper/css/navigation'; // Estilos para la navegación
import 'swiper/css/pagination'; // Estilos para la paginación
import 'swiper/css/effect-cube';

import { Autoplay, Pagination, Navigation, EffectCube } from 'swiper/modules';
import SwiperCore from 'swiper';

SwiperCore.use([Navigation]);

const WSUAImage = ({imagesData, businesDesc, businesName, qaDesc}) => {

    console.log(imagesData)

  return (
    <>
    <Swiper
      effect={"cube"}
      loop={true}
      cubeEffect={{
        shadow: false,
      }}
      pagination={{
        el: ".pagination-circles",
        clickable: true,
      }}
      navigation={{
        prevEl: ".custom-prev-btn",
        nextEl: ".custom-next-btn",
      }}
      speed={1500}
      modules={[Autoplay, Pagination, Navigation, EffectCube]} // Habilita los módulos necesarios
      className="SpecialBullet"

    >
      {imagesData.map((slide, index) => (
        <SwiperSlide key={index} id={index} className=''>
          <img src={slide.img} alt={slide.alt} className='w-full' />
        </SwiperSlide>
        
      ))}
    </Swiper>
    <div className="pagination-wrapper flex justify-center">
    <button aria-label="Left review" className="bg-qalightgrey p-[0.75rem] rounded-[25px] custom-prev-btn">
        <svg width="14" height="13" viewBox="0 0 14 13" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M12.5954 6.29199L3.00342 6.29199" stroke="#3F3E3E" strokeWidth="2.39801" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M6.20055 11.0879L1.40454 6.29188L6.20055 1.49587" stroke="#3F3E3E" strokeWidth="2.39801" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
    </button>

    <div className="pagination-circles w-auto max-w-[25rem] content-center webkit-center leading-[0px]"></div>

    <button aria-label="Right review" className="bg-qalightgrey p-[0.75rem] rounded-[25px] custom-next-btn">
        <svg width="14" height="13" viewBox="0 0 14 13" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M1.40456 6.29199L10.9966 6.29199" stroke="#3F3E3E" strokeWidth="2.39801" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M7.79945 11.0879L12.5955 6.29188L7.79945 1.49587" stroke="#3F3E3E" strokeWidth="2.39801" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
    </button>
    </div>
    <div className='bg-gradient-to-b from-[#585D5E] to-qablack lexend mt-8 rounded-xl'>
        <p className='text-white'>
            <span className='font-bold'>{businesName}</span> {businesDesc}
        </p>
        <p className='text-white'><span className='font-bold'>QA Digital Partners</span> {qaDesc}</p>
    </div>
    </>
  );
};


export default WSUAImage;
