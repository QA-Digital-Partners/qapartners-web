import React from "react"

const TeamPictureIndividual = ({img, alt, position}) => {
  return (
    <div style={{backgroundImage: `url(${img})`, backgroundPosition: 'center', backgroundSize: 'cover'}} className="w-full lg:min-h-[304px] min-h-[400px] p-4 content-end">
        <div className="bg-white p-2 rounded-lg text-center lexend content-center">
            <p className="font-semibold uppercase leading-[15px]">{alt}</p>
            <p className="font-light leading-[15px]">{position}</p>
        </div>
    </div>
  )
};

export default TeamPictureIndividual;
