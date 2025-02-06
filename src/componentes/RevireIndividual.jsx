import React from "react"

const ReviewIndividual = ({slide, heightMod}) => {
  return (
    <>
        <div className={`p-8 rounded-xl border-[1px] border-qablack h-fit ${heightMod != '' ? heightMod : 'lg:min-h-[340px] min-h-[345px]'}`}>
          <div className='flex items-center pb-4'>
              <div className='pe-4'>
                  <img src={slide.image} alt={slide.title} className='rounded-[50px] lg:w-[97px] w-[60px]' width={'97px'}/>
              </div>
              <div>
                  <p className='text-qablack3f geologica font-bold lg:text-2xl text-xl'>{slide.title}</p>
                  <img src="Stars.svg" alt="Stars review" width={'162px'}/>
              </div>
           </div>
          <p className='pt-2'>{slide.review}</p>
        </div>
    </>
  )
};

export default ReviewIndividual;
