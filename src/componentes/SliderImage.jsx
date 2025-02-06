import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css'; // Importa los estilos básicos de Swiper
import 'swiper/css/navigation'; // Estilos para la navegación
import 'swiper/css/pagination'; // Estilos para la paginación
import 'swiper/css/free-mode'; // Estilos para free mode

import { Autoplay, Pagination, Navigation, FreeMode } from 'swiper/modules';
import { useEffect, useRef } from 'react';
import SwiperCore from 'swiper';

SwiperCore.use([Navigation]);

const ImageCarousel = ({reverse, data, prev, next }) => {

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
      freeMode={true}
      autoplay={{
        delay: 3000,
        disableOnInteraction: false,
        pauseOnMouseEnter: true,
        reverseDirection: reverse
      }}
      speed={1500}
      modules={[Autoplay, Pagination, Navigation, FreeMode]} // Habilita los módulos necesarios
      className=""

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
      {data.map((slide, index) => (
        <SwiperSlide key={index} id={index} className='lh:py-4 py-2'>
          <img src={slide.img} alt={slide.alt} className='w-full' loading='lazy' />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default ImageCarousel;
