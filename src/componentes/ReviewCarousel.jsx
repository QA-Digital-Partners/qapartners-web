import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css'; // Importa los estilos básicos de Swiper
import 'swiper/css/navigation'; // Estilos para la navegación

import { Autoplay, Navigation } from 'swiper/modules';
import SwiperCore from 'swiper';
import { useEffect, useRef } from 'react';
import { Reviews } from '../data';
import ReviewIndividual from './RevireIndividual';

SwiperCore.use([Navigation]);

const ReviewCarousel = ({prev, next, heightMod}) => {


    const swiperRef = useRef(null);

    useEffect(() => {
      if (swiperRef.current) {
        const swiper = swiperRef.current.swiper;
        swiper.params.navigation.prevEl = prev.current;
        swiper.params.navigation.nextEl = next.current;
        swiper.navigation.init();
        swiper.navigation.update();
      }
    }, [next, prev]);

    return (
      <Swiper
        ref={swiperRef}
        spaceBetween={20}
        loop={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
        }}
        speed={1500}
        modules={[Autoplay]} // Habilita los módulos necesarios
        className="swiper-container"
  
        // Configurar los breakpoints
        breakpoints={{
          // Pantallas pequeñas (sm)
          640: {
            slidesPerView: 1, // Muestra 2 slides
            spaceBetween: 25,
          },
          // Pantallas medianas (md)
          768: {
            slidesPerView: 2, // Muestra 3 slides
            spaceBetween: 25,
          }
        }}
      >
        {Reviews.map((slide, index) => (
          <SwiperSlide key={index} id={index} className='py-4'>
            <ReviewIndividual slide={slide} heightMod={heightMod}/>
          </SwiperSlide>
        ))}
      </Swiper>
    );
  };
  
  export default ReviewCarousel;
  