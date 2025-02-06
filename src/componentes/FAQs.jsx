import React, { useRef, useState } from "react"

const FAQs = ({faqsData}) => {
    const faqRef = useRef({})
    const [expandedResource, setExpandedResource] = useState(null);

    const handleReadMoreClick = (title) => {
        setExpandedResource(expandedResource === title ? null : title); // Alterna la expansión
    };

  return (
    <>
      {faqsData.map((data, index) => (
        <div key={index} ref={(el) => (faqRef.current[faqsData.title] = el)} className="bg-gradient-197 from-[#FAF9F9] to-[#f1f1f1] shadow-[0_4px_10px_2px_rgba(0,0,0,0.1)] rounded-xl px-8 py-[2rem] mb-8 min-h-[83px] content-center">
            <div className="flex py-0 justify-between ">
                <div className="w-[80%]">
                    <p className="text-qablack lexend text-[20px] font-medium leading-[25px]">{data.title}</p>
                </div>
                <div className="max-w-[27px] w-[20%]">
                    <a  onClick={() => handleReadMoreClick(data.title)}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 26 26" fill="none" className={`absolute transition-transform ${expandedResource === data.title ? 'rotate-x-90' : 'rotate-0'}`}>
                        <path d="M0 15.418V10.0191H26.0082V15.418H0ZM9.9153 25.1776V0H16.041V25.1776H9.9153Z" fill="#1D1D1D"/>
                    </svg>
                    <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 26 6" fill="none" className={`absolute transition-transform ${expandedResource === data.title ? 'rotate-0' : 'rotate-x-90'}`}>
                        <path d="M0 5.41844V0.0195312H26.0082V5.41844H0Z" fill="#1D1D1D"/>
                    </svg>
                    </a>
                </div>
            </div>
            <div className={`pe-8 lexend font-light leadin-[25px] faq ${expandedResource === data.title ? 'expanded border-t-2 border-qablack pt-8 pb-4 mt-4' : ''}`}>{data.answer}</div>
        </div>
      ))}
    </>
  )
};

export default FAQs;
