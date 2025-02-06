import React from "react"

const SpecializedSEOIndustry = ({icon, title, content}) => {
  return (
    <>
      <div className="rounded-xl ps-8 pe-16 py-8 border-white border-2">
        <img src={icon} alt={title} className="service-icon rounded-lg w-[50px] shadow-[-2px_2px_3px_0px_rgba(51,51,51,0.12)]"/>
        <ul>
            <h3 className="min-h-[4rem] content-center py-8">
            <li className="lexend font-semibold text-[20px] bullet-qaorange list-disc ms-4 text-white">{title}</li>
            </h3>
        </ul>
        <p className="text-white font-light">{content}</p>
      </div>
    </>
  )
};

export default SpecializedSEOIndustry;
