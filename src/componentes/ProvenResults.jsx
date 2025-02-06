import React from "react"

const ProvenResults = ({img, imgResp, title, linkName, link}) => {
  return (
    <div className="pb-8">
        <picture className="webkit-center-left">
            <source media="(min-width: 1024px)" srcSet={img} />
            <source media="(max-width: 1023px)" srcSet={imgResp} />
            <img
              src={img}
              alt={title}
              width="384"   
              height="541"
              loading="lazy"
              className="lg:w-[384px] w-[320px] shadow-[0px_4px_10px_2px_rgba(0,0,0,0.1)] rounded-md"
            />
            </picture>
        <p className="text-qablack font-light text-[18px] text-center lg:py-8 pt-8 pb-4 whitespace-pre-line">{title}</p>
        <a href={link} target="_blank" className="text-qablack font-semibold text-[18px] text-center w-full block hover:underline">{linkName}</a>
    </div>
  )
};

export default ProvenResults;
