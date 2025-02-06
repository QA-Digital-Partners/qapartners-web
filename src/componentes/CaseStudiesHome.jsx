import React from "react"

const CaseStudiesM = ({title, subtitle, number, image, link, clas}) => {
  return (
    <>
      <div className={`border-2 rounded-xl border-white px-4 py-8 flex flex-col justify-between h-full fade ${clas}`}>
        <div>
          <ul className="ms-4 mb-4">
              <li className="text-white font-semibold orange-dot list-disc">{title}</li>
          </ul>
          <img src={image} alt={title} className="mb-4"/>
          <p className="text-white text-3xl mb-8">{subtitle} <span className="font-semibold">{number}</span></p>
        </div>
        <div >
          {(link != '') ? (
          <div className="btn-grow-box qaorange">
            <a className="animated-button qawhite text-white bg-transparent px-4 py-1 rounded-md" href={link}>Learn More</a>
          </div>

          ) : ('')}
        </div>
      </div>
    </>
  )
};

export default CaseStudiesM;