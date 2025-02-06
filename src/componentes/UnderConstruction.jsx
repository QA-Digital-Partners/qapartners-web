import React from "react"

const UnderConstruction = (props) => {
  return (
    <>
        <div className="min-h-[65vh] container mx-auto text-center content-center px-8 lg:px-0" style={{textAlign: "-webkit-center"}}>
            <img src="./under-construction-sign-vec.webp" alt="Under Construction" width={270}/>
            <h1 className="text-qablack font-sembold text-[35px] lexend py-8 leading-[38px]">Page Under Construction</h1>
            <p className="text-qablack">
            We're working hard to bring you new content. Stay tuned for updates!
            </p>
            <p className="py-8">
                Meanwhile, feel free to <a href="/" className="text-qaorange decoration-solid underline">go back to the homepage</a>.
            </p>
        </div>
    </>
  )
};

export default UnderConstruction;
