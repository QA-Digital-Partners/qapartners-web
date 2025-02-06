import React from "react"

const ComprenhensiveSeo = ({title, content}) => {
  return (
    <>
      <div className="bg-white rounded-xl py-4 px-8">
        <ul>
            <h3 className="min-h-[4rem] content-center">
            <li className="lexend font-semibold text-[18px] bullet-qaorange list-disc ms-4">{title}</li>
            </h3>
        </ul>
        <p>{content}</p>
      </div>
    </>
  )
};

export default ComprenhensiveSeo;
